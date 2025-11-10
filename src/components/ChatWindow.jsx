import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Loader, AlertCircle, Sparkles } from 'lucide-react';
import ChatMessage from './ChatMessage';
import { supabase } from '../lib/supabase';
import './ChatWindow.css';

function ChatWindow({ isOpen, onClose, currentLesson = null }) {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dailyUsage, setDailyUsage] = useState(0);
  const [isPremium, setIsPremium] = useState(false);
  const messagesEndRef = useRef(null);

  // Load initial data
  useEffect(() => {
    if (isOpen) {
      loadUserData();
      loadConversationHistory();
    }
  }, [isOpen, currentLesson]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const loadUserData = async () => {
    try {
      const user = await supabase.auth.getUser();
      if (!user.data.user) return;

      // Check premium status
      const { data: profile } = await supabase
        .from('profiles')
        .select('membership_tier')
        .eq('id', user.data.user.id)
        .single();

      setIsPremium(profile?.membership_tier === 'premium');

      // Get today's usage count
      const today = new Date().toISOString().split('T')[0];
      const { data: usage } = await supabase
        .from('ai_tutor_usage')
        .select('id')
        .eq('user_id', user.data.user.id)
        .gte('created_at', `${today}T00:00:00`)
        .lte('created_at', `${today}T23:59:59`);

      setDailyUsage(usage?.length || 0);
    } catch (err) {
      console.error('Error loading user data:', err);
    }
  };

  const loadConversationHistory = async () => {
    try {
      const user = await supabase.auth.getUser();
      if (!user.data.user) return;

      // Load last 5 messages for this lesson (or global if no lesson)
      let query = supabase
        .from('ai_tutor_usage')
        .select('question, response, created_at')
        .eq('user_id', user.data.user.id)
        .order('created_at', { ascending: false })
        .limit(5);

      if (currentLesson) {
        query = query.eq('lesson_id', currentLesson.id);
      }

      const { data, error } = await query;

      if (error) throw error;

      // Convert to message format (reverse to show oldest first)
      const history = data.reverse().flatMap(item => [
        { role: 'user', content: item.question, timestamp: item.created_at },
        { role: 'assistant', content: item.response, timestamp: item.created_at }
      ]);

      setMessages(history);
    } catch (err) {
      console.error('Error loading conversation history:', err);
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    // Check rate limiting
    if (!isPremium && dailyUsage >= 3) {
      setError('Daily limit reached (3 questions). Upgrade to Premium for unlimited access!');
      return;
    }

    const userMessage = inputMessage.trim();
    setInputMessage('');
    setError(null);

    // Add user message to chat
    const newUserMessage = {
      role: 'user',
      content: userMessage,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, newUserMessage]);

    setIsLoading(true);

    try {
      // Get auth token
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        throw new Error('No active session');
      }

      // Call AI Tutor API
      const response = await fetch('/api/ai-tutor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`
        },
        body: JSON.stringify({
          question: userMessage,
          lessonId: currentLesson?.id || null,
          lessonContent: currentLesson ? {
            title: currentLesson.title,
            content: currentLesson.content,
            objective: currentLesson.objective
          } : null,
          conversationHistory: messages.slice(-4) // Last 2 exchanges
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get response');
      }

      const data = await response.json();

      // Add AI response to chat
      const aiMessage = {
        role: 'assistant',
        content: data.response,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, aiMessage]);

      // Update usage count
      setDailyUsage(prev => prev + 1);

    } catch (err) {
      console.error('Error sending message:', err);
      setError(err.message || 'Failed to get response. Please try again.');

      // Remove user message on error
      setMessages(prev => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getRemainingQuestions = () => {
    if (isPremium) return 'Unlimited';
    return Math.max(0, 3 - dailyUsage);
  };

  if (!isOpen) return null;

  return (
    <div className="chat-window">
      {/* Header */}
      <div className="chat-header">
        <div className="chat-header-content">
          <div className="chat-icon">
            <Sparkles size={20} />
          </div>
          <div className="chat-title">
            <h3>AI Tutor</h3>
            <p className="chat-subtitle">
              {currentLesson ? `Helping with: ${currentLesson.title}` : 'Ask me anything about Network+'}
            </p>
          </div>
        </div>
        <button className="chat-close-btn" onClick={onClose} aria-label="Close chat">
          <X size={20} />
        </button>
      </div>

      {/* Usage Indicator */}
      <div className={`usage-indicator ${isPremium ? 'premium' : dailyUsage >= 3 ? 'limit-reached' : ''}`}>
        {isPremium ? (
          <span>Premium - Unlimited Questions</span>
        ) : (
          <span>
            Free Tier: {getRemainingQuestions()} question{getRemainingQuestions() !== 1 ? 's' : ''} remaining today
          </span>
        )}
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {messages.length === 0 && (
          <div className="chat-welcome">
            <Sparkles size={48} />
            <h4>Welcome to AI Tutor!</h4>
            <p>Ask me anything about CompTIA Network+ topics.</p>
            <div className="chat-suggestions">
              <button onClick={() => setInputMessage("Explain the OSI model layers")}>
                Explain the OSI model layers
              </button>
              <button onClick={() => setInputMessage("What's the difference between TCP and UDP?")}>
                TCP vs UDP?
              </button>
              <button onClick={() => setInputMessage("Help me understand subnetting")}>
                Help with subnetting
              </button>
            </div>
          </div>
        )}

        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}

        {isLoading && (
          <div className="chat-loading">
            <Loader className="spinner" size={20} />
            <span>AI Tutor is thinking...</span>
          </div>
        )}

        {error && (
          <div className="chat-error">
            <AlertCircle size={20} />
            <span>{error}</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="chat-input-container">
        <textarea
          className="chat-input"
          placeholder={
            !isPremium && dailyUsage >= 3
              ? 'Daily limit reached. Upgrade to Premium for unlimited access!'
              : 'Ask a question...'
          }
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isLoading || (!isPremium && dailyUsage >= 3)}
          rows={1}
        />
        <button
          className="chat-send-btn"
          onClick={handleSendMessage}
          disabled={!inputMessage.trim() || isLoading || (!isPremium && dailyUsage >= 3)}
          aria-label="Send message"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;
