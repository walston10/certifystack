import React, { useState } from 'react';
import { Users, MessageCircle, ExternalLink, Shield, Heart } from 'lucide-react';
import './Community.css';

function Community() {
  const [discordLoaded, setDiscordLoaded] = useState(false);
  const DISCORD_INVITE = 'https://discord.gg/hbdC4DRwR';

  return (
    <div className="community-page">
      {/* Header */}
      <div className="community-header">
        <div className="header-content">
          <Users size={48} className="header-icon" />
          <div>
            <h1>Community</h1>
            <p>Join thousands of Network+ students on Discord</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="community-container">
        {/* Discord Embed Section */}
        <section className="discord-section">
          <div className="discord-header">
            <MessageCircle size={32} />
            <h2>Join Our Discord Server</h2>
          </div>

          <div className="discord-widget-container">
            {!discordLoaded && (
              <div className="discord-loading">
                <div className="loading-spinner"></div>
                <p>Loading Discord server...</p>
              </div>
            )}

            <iframe
              src="https://discord.com/widget?id=1437522931751059640&theme=dark"
              width="100%"
              height="500"
              allowTransparency="true"
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              title="Discord Server Widget"
              onLoad={() => setDiscordLoaded(true)}
              style={{ display: discordLoaded ? 'block' : 'none' }}
            ></iframe>
          </div>

          <div className="join-button-container">
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-join-discord"
            >
              <MessageCircle size={20} />
              <span>Join Discord Server</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <h2>Why Join Our Community?</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <Users size={32} />
              </div>
              <h3>Study Together</h3>
              <p>Connect with fellow Network+ students, form study groups, and share resources.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <MessageCircle size={32} />
              </div>
              <h3>Get Help Fast</h3>
              <p>Ask questions and get answers from experienced students and instructors in real-time.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Shield size={32} />
              </div>
              <h3>Exam Tips</h3>
              <p>Learn from those who've passed the exam. Get insider tips and strategies.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Heart size={32} />
              </div>
              <h3>Supportive Environment</h3>
              <p>Join a friendly community that celebrates your progress and keeps you motivated.</p>
            </div>
          </div>
        </section>

        {/* Channels Preview */}
        <section className="channels-section">
          <h2>Popular Channels</h2>

          <div className="channels-list">
            <div className="channel-item">
              <span className="channel-hash">#</span>
              <div className="channel-info">
                <h4>general</h4>
                <p>General discussion about Network+ and networking topics</p>
              </div>
            </div>

            <div className="channel-item">
              <span className="channel-hash">#</span>
              <div className="channel-info">
                <h4>study-help</h4>
                <p>Ask questions and get help with difficult concepts</p>
              </div>
            </div>

            <div className="channel-item">
              <span className="channel-hash">#</span>
              <div className="channel-info">
                <h4>exam-experiences</h4>
                <p>Share your exam experience and learn from others</p>
              </div>
            </div>

            <div className="channel-item">
              <span className="channel-hash">#</span>
              <div className="channel-info">
                <h4>labs-and-practice</h4>
                <p>Discuss labs, practice exams, and hands-on exercises</p>
              </div>
            </div>

            <div className="channel-item">
              <span className="channel-hash">#</span>
              <div className="channel-info">
                <h4>career-advice</h4>
                <p>Get guidance on networking careers and job opportunities</p>
              </div>
            </div>

            <div className="channel-item">
              <span className="channel-hash">#</span>
              <div className="channel-info">
                <h4>wins-and-celebrations</h4>
                <p>Celebrate your achievements and milestones!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="guidelines-section">
          <h2>Community Guidelines</h2>

          <div className="guidelines-content">
            <ul>
              <li><strong>Be Respectful:</strong> Treat everyone with kindness and respect.</li>
              <li><strong>Stay On Topic:</strong> Keep discussions relevant to Network+ and networking.</li>
              <li><strong>Help Each Other:</strong> Share knowledge and support fellow students.</li>
              <li><strong>No Spam:</strong> Avoid excessive self-promotion or spam.</li>
              <li><strong>Follow Discord ToS:</strong> Abide by Discord's Terms of Service and Community Guidelines.</li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Ready to Join?</h2>
          <p>Connect with your peers and accelerate your Network+ journey</p>
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-join-discord-large"
          >
            <MessageCircle size={24} />
            <span>Join Our Discord Community</span>
            <ExternalLink size={20} />
          </a>
        </section>
      </div>
    </div>
  );
}

export default Community;
