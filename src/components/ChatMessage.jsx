import React from 'react';
import { User, Sparkles } from 'lucide-react';

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

  // Format AI responses with markdown-like formatting
  const formatContent = (text) => {
    if (!text) return '';

    // Split into paragraphs
    const paragraphs = text.split('\n\n');

    return paragraphs.map((para, idx) => {
      // Check if it's a code block
      if (para.trim().startsWith('```')) {
        const codeContent = para.replace(/```\w*\n?/g, '').trim();
        return (
          <pre key={idx} className="code-block">
            <code>{codeContent}</code>
          </pre>
        );
      }

      // Check if it's a list
      if (para.includes('\n- ') || para.startsWith('- ')) {
        const items = para.split('\n- ').filter(item => item.trim());
        return (
          <ul key={idx} className="message-list">
            {items.map((item, i) => (
              <li key={i}>{item.replace(/^- /, '')}</li>
            ))}
          </ul>
        );
      }

      // Check if it's a numbered list
      if (/^\d+\./.test(para)) {
        const items = para.split(/\n(?=\d+\.)/).filter(item => item.trim());
        return (
          <ol key={idx} className="message-list">
            {items.map((item, i) => (
              <li key={i}>{item.replace(/^\d+\.\s*/, '')}</li>
            ))}
          </ol>
        );
      }

      // Regular paragraph with inline formatting
      let formattedPara = para;

      // Bold text
      formattedPara = formattedPara.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

      // Inline code
      formattedPara = formattedPara.replace(/`(.+?)`/g, '<code class="inline-code">$1</code>');

      return (
        <p
          key={idx}
          className="message-paragraph"
          dangerouslySetInnerHTML={{ __html: formattedPara }}
        />
      );
    });
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
            <div className="ai-response">{formatContent(content)}</div>
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
