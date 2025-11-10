import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Send, Loader, AlertCircle, History, Plus } from 'lucide-react';
import ChatMessage from './ChatMessage';
import { supabase } from '../lib/supabase';
import './AITutorPage.css';

function AITutorPage() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dailyUsage, setDailyUsage] = useState(0);
  const [isPremium, setIsPremium] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    loadUserData();
    loadConversationHistory();
  }, []);

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

      // Get unique conversation sessions (group by date)
      const { data, error } = await supabase
        .from('ai_tutor_usage')
        .select('question, created_at')
        .eq('user_id', user.data.user.id)
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;

      // Group conversations by date
      const grouped = {};
      data.forEach(item => {
        const date = new Date(item.created_at).toLocaleDateString();
        if (!grouped[date]) {
          grouped[date] = [];
        }
        grouped[date].push(item);
      });

      setConversationHistory(grouped);
    } catch (err) {
      console.error('Error loading conversation history:', err);
    }
  };

  const startNewConversation = () => {
    setMessages([]);
    setError(null);
    setShowHistory(false);
  };

  const loadPastConversation = async (date) => {
    try {
      const user = await supabase.auth.getUser();
      if (!user.data.user) return;

      const targetDate = new Date(date).toISOString().split('T')[0];

      const { data, error } = await supabase
        .from('ai_tutor_usage')
        .select('question, response, created_at')
        .eq('user_id', user.data.user.id)
        .gte('created_at', `${targetDate}T00:00:00`)
        .lte('created_at', `${targetDate}T23:59:59`)
        .order('created_at', { ascending: true });

      if (error) throw error;

      const history = data.flatMap(item => [
        { role: 'user', content: item.question, timestamp: item.created_at },
        { role: 'assistant', content: item.response, timestamp: item.created_at }
      ]);

      setMessages(history);
      setShowHistory(false);
    } catch (err) {
      console.error('Error loading past conversation:', err);
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

    const newUserMessage = {
      role: 'user',
      content: userMessage,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, newUserMessage]);

    setIsLoading(true);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        throw new Error('No active session');
      }

      const response = await fetch('/api/ai-tutor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`
        },
        body: JSON.stringify({
          question: userMessage,
          lessonId: null,
          lessonContent: null,
          conversationHistory: messages.slice(-4)
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get response');
      }

      const data = await response.json();

      const aiMessage = {
        role: 'assistant',
        content: data.response,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, aiMessage]);

      setDailyUsage(prev => prev + 1);
      loadConversationHistory();

    } catch (err) {
      console.error('Error sending message:', err);
      setError(err.message || 'Failed to get response. Please try again.');
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

  const suggestedQuestions = [
    "Explain the OSI model in simple terms",
    "What's the difference between TCP and UDP?",
    "Help me understand subnetting",
    "How do VLANs work?",
    "Explain DNS resolution process",
    "What are the common networking ports?"
  ];

  return (
    <div className="ai-tutor-page">
      {/* Header */}
      <div className="ai-tutor-header">
        <div className="header-title">
          <Sparkles size={32} className="header-icon" />
          <div>
            <h1>AI Tutor</h1>
            <p>Your 24/7 Network+ Certification Coach</p>
          </div>
        </div>

        <div className="header-actions">
          <button
            className="btn-history"
            onClick={() => setShowHistory(!showHistory)}
          >
            <History size={20} />
            <span>History</span>
          </button>
          <button className="btn-new-chat" onClick={startNewConversation}>
            <Plus size={20} />
            <span>New Chat</span>
          </button>
        </div>
      </div>

      {/* Usage Indicator */}
      <div className={`usage-banner ${isPremium ? 'premium' : dailyUsage >= 3 ? 'limit-reached' : ''}`}>
        {isPremium ? (
          <>
            <Sparkles size={16} />
            <span>Premium - Unlimited Questions</span>
          </>
        ) : (
          <>
            <AlertCircle size={16} />
            <span>
              Free Tier: {getRemainingQuestions()} question{getRemainingQuestions() !== 1 ? 's' : ''} remaining today
            </span>
            {dailyUsage >= 3 && (
              <button className="upgrade-link">Upgrade to Premium</button>
            )}
          </>
        )}
      </div>

      <div className="ai-tutor-content">
        {/* Sidebar - Conversation History */}
        {showHistory && (
          <div className="history-sidebar">
            <h3>Past Conversations</h3>
            {Object.keys(conversationHistory).length === 0 ? (
              <p className="no-history">No conversation history yet</p>
            ) : (
              <div className="history-list">
                {Object.entries(conversationHistory).map(([date, conversations]) => (
                  <div key={date} className="history-group">
                    <div className="history-date">{date}</div>
                    {conversations.slice(0, 3).map((conv, idx) => (
                      <button
                        key={idx}
                        className="history-item"
                        onClick={() => loadPastConversation(date)}
                      >
                        {conv.question.substring(0, 60)}
                        {conv.question.length > 60 ? '...' : ''}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Main Chat Area */}
        <div className="chat-area">
          <div className="messages-container">
            {messages.length === 0 && (
              <div className="welcome-screen">
                <Sparkles size={64} className="welcome-icon" />
                <h2>Welcome to AI Tutor!</h2>
                <p>Ask me anything about CompTIA Network+ topics. I'm here to help you understand networking concepts and prepare for your certification exam.</p>

                <div className="suggested-questions">
                  <h3>Try asking:</h3>
                  <div className="suggestions-grid">
                    {suggestedQuestions.map((question, idx) => (
                      <button
                        key={idx}
                        className="suggestion-btn"
                        onClick={() => setInputMessage(question)}
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}

            {isLoading && (
              <div className="loading-indicator">
                <Loader className="spinner" size={20} />
                <span>AI Tutor is thinking...</span>
              </div>
            )}

            {error && (
              <div className="error-message">
                <AlertCircle size={20} />
                <span>{error}</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="input-area">
            <textarea
              className="message-input"
              placeholder={
                !isPremium && dailyUsage >= 3
                  ? 'Daily limit reached. Upgrade to Premium for unlimited access!'
                  : 'Ask a question about Network+ topics...'
              }
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading || (!isPremium && dailyUsage >= 3)}
              rows={3}
            />
            <button
              className="send-button"
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading || (!isPremium && dailyUsage >= 3)}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AITutorPage;
