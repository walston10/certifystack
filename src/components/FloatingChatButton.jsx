import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import ChatWindow from './ChatWindow';
import './FloatingChatButton.css';

function FloatingChatButton({ currentLesson = null }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <ChatWindow
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          currentLesson={currentLesson}
        />
      )}

      {/* Floating Button */}
      <button
        className={`floating-chat-button ${isOpen ? 'open' : ''}`}
        onClick={toggleChat}
        aria-label={isOpen ? 'Close AI Tutor' : 'Open AI Tutor'}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <>
            <MessageCircle size={24} />
            <span className="chat-button-pulse"></span>
          </>
        )}
      </button>
    </>
  );
}

export default FloatingChatButton;
