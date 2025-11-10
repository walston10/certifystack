import React from 'react';
import { User, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

function ChatMessage({ message }) {
  const { role, content, timestamp } = message;
  const isUser = role === 'user';

  const formatTimestamp = (isoString) => {
    if (!isoString) return '';
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffMins < 1440) return `${Math.floor(diffMins / 60)}h ago`;
    return date.toLocaleDateString();
  };


  return (
    <div className={`chat-message ${isUser ? 'user-message' : 'ai-message'}`}>
      <div className="message-avatar">
        {isUser ? <User size={20} /> : <Sparkles size={20} />}
      </div>
      <div className="message-content">
        <div className="message-text">
          {isUser ? (
            <p className="message-paragraph">{content}</p>
          ) : (
            <div className="ai-response">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          )}
        </div>
        {timestamp && (
          <div className="message-timestamp">{formatTimestamp(timestamp)}</div>
        )}
      </div>
    </div>
  );
}

export default ChatMessage;
