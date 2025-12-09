const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

// Course-specific system prompts for AI tutor
const COURSE_PROMPTS = {
  'network-plus': {
    name: 'CompTIA Network+ (N10-009)',
    focus: 'networking concepts',
    topics: 'networking protocols, OSI model, TCP/IP, subnetting, VLANs, routing, switching, network security, and troubleshooting',
    scope: 'Network+'
  },
  'a-plus-core1': {
    name: 'CompTIA A+ Core 1 (220-1101)',
    focus: 'hardware, mobile devices, networking, and virtualization',
    topics: 'PC components, mobile devices, printers, networking basics, hardware troubleshooting, virtualization, and cloud computing',
    scope: 'A+ Core 1'
  },
  'a-plus-core2': {
    name: 'CompTIA A+ Core 2 (220-1102)',
    focus: 'operating systems, security, software troubleshooting, and operational procedures',
    topics: 'Windows, macOS, Linux, security best practices, malware removal, software troubleshooting, and IT operational procedures',
    scope: 'A+ Core 2'
  },
  'security-plus': {
    name: 'CompTIA Security+ (SY0-701)',
    focus: 'cybersecurity concepts and practices',
    topics: 'threats, vulnerabilities, attacks, security architecture, cryptography, identity management, risk management, and incident response',
    scope: 'Security+'
  }
};

// Build system prompt based on course
const getSystemPrompt = (courseId) => {
  const course = COURSE_PROMPTS[courseId] || COURSE_PROMPTS['network-plus'];

  return `You are an expert ${course.name} certification tutor. Your role is to help students understand ${course.focus} and prepare for their certification exam.

Guidelines:
- Provide clear, accurate explanations of ${course.topics}
- Use examples and analogies to make complex topics easier to understand
- For technical questions, include practical examples and real-world use cases
- For troubleshooting questions, guide students through systematic problem-solving approaches
- Reference the CompTIA ${course.scope} exam objectives when relevant
- If a student is struggling, break down concepts into smaller, digestible parts
- Encourage critical thinking by asking follow-up questions
- Keep responses concise but comprehensive (aim for 150-300 words unless more detail is needed)
- Use formatting: **bold** for key terms, \`code\` for commands/configs, lists for step-by-step explanations
- Never provide exam dumps or actual exam questions - focus on teaching concepts
- If asked about something outside ${course.scope} scope, politely redirect to relevant ${course.scope} topics

Tone: Professional but friendly, patient, and encouraging.`;
};

exports.handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse request body
    const { question, lessonId, lessonContent, conversationHistory, courseId } = JSON.parse(event.body);

    if (!question || !question.trim()) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Question is required' })
      };
    }

    // Get user from Authorization header
    const authHeader = event.headers.authorization;
    if (!authHeader) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'Unauthorized - No auth token' })
      };
    }

    // Initialize Supabase client with service key for admin operations
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Verify the user's JWT token
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);

    if (authError || !user) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'Unauthorized - Invalid token' })
      };
    }

    // Check user's premium status (gracefully handle missing table)
    let isPremium = false;
    let dailyUsage = 0;

    try {
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('membership_tier')
        .eq('id', user.id)
        .single();

      if (!profileError) {
        isPremium = profile?.membership_tier === 'premium';
      }

      // Rate limiting - check daily usage
      const today = new Date().toISOString().split('T')[0];
      const { data: usageData, error: usageError } = await supabase
        .from('ai_tutor_usage')
        .select('id')
        .eq('user_id', user.id)
        .gte('created_at', `${today}T00:00:00`)
        .lte('created_at', `${today}T23:59:59`);

      if (!usageError) {
        dailyUsage = usageData?.length || 0;
      }

      // Enforce rate limit for free users
      if (!isPremium && dailyUsage >= 3) {
        return {
          statusCode: 429,
          headers,
          body: JSON.stringify({
            error: 'Daily limit reached (3 questions). Upgrade to Premium for unlimited access!',
            dailyUsage,
            limit: 3
          })
        };
      }
    } catch (dbError) {
      console.log('Database tables not yet created, allowing request to proceed');
      // Allow the request to proceed without rate limiting if tables don't exist
    }

    // Build context-aware prompt
    let contextPrompt = '';
    if (lessonContent) {
      contextPrompt = `\n\nCurrent Lesson Context:\nTitle: ${lessonContent.title}\nObjective: ${lessonContent.objective}\n\nThe student is currently studying this lesson. Tailor your response to help them understand this specific topic.`;
    }

    // Build conversation history for OpenAI using course-specific prompt
    const systemPrompt = getSystemPrompt(courseId || 'network-plus');
    const messages = [
      { role: 'system', content: systemPrompt + contextPrompt }
    ];

    // Add recent conversation history (last 2 exchanges = 4 messages)
    if (conversationHistory && conversationHistory.length > 0) {
      conversationHistory.slice(-4).forEach(msg => {
        messages.push({
          role: msg.role,
          content: msg.content
        });
      });
    }

    // Add current question
    messages.push({
      role: 'user',
      content: question
    });

    // Call OpenAI API
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        max_tokens: 500,
        temperature: 0.7,
        top_p: 0.9
      })
    });

    if (!openaiResponse.ok) {
      const errorData = await openaiResponse.json();
      console.error('OpenAI API error:', errorData);
      throw new Error('Failed to get AI response');
    }

    const openaiData = await openaiResponse.json();
    const aiResponse = openaiData.choices[0].message.content;
    const tokensUsed = openaiData.usage.total_tokens;

    // Save to database
    const { error: insertError } = await supabase
      .from('ai_tutor_usage')
      .insert({
        user_id: user.id,
        question: question.trim(),
        response: aiResponse,
        lesson_id: lessonId || null,
        tokens_used: tokensUsed
      });

    if (insertError) {
      console.error('Error saving to database:', insertError);
      // Don't fail the request if database save fails
    }

    // Return successful response
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        response: aiResponse,
        tokensUsed,
        dailyUsage: dailyUsage + 1,
        remainingQuestions: isPremium ? 'unlimited' : Math.max(0, 2 - dailyUsage)
      })
    };

  } catch (error) {
    console.error('Error in ai-tutor function:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};
