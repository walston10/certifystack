import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Clock, FileText, AlertCircle, CheckCircle, Target, ArrowRight } from 'lucide-react';
import './ExamInstructions.css';

const courseDisplayNames = {
  'network-plus': 'CompTIA Network+ N10-009',
  'a-plus-core1': 'CompTIA A+ Core 1 (220-1101)',
  'a-plus-core2': 'CompTIA A+ Core 2 (220-1102)',
  'security-plus': 'CompTIA Security+ SY0-701'
};

function ExamInstructions() {
  const navigate = useNavigate();
  const location = useLocation();
  const { mode, settings } = location.state || {};
  const [agreed, setAgreed] = useState(false);

  if (!mode || !settings) {
    navigate('/practice-exam-setup');
    return null;
  }

  const courseId = settings.courseId || 'network-plus';
  const courseName = courseDisplayNames[courseId] || courseDisplayNames['network-plus'];

  const getExamDetails = () => {
    switch (mode) {
      case 'full':
        return {
          title: 'Full Practice Exam',
          questions: 90,
          timeLimit: 90,
          description: `Complete exam simulation matching the real ${courseName}`
        };
      case 'domain':
        return {
          title: 'Domain Practice Exam',
          questions: 25,
          timeLimit: 30,
          description: `Focused practice on ${settings.domainName}`
        };
      case 'quick':
        return {
          title: 'Quick Quiz',
          questions: 15,
          timeLimit: 15,
          description: 'Rapid-fire practice to test your knowledge'
        };
      default:
        return {
          title: 'Practice Exam',
          questions: 90,
          timeLimit: 90,
          description: 'Test your knowledge'
        };
    }
  };

  const examDetails = getExamDetails();

  const handleBeginExam = () => {
    if (!agreed) {
      alert('Please confirm you understand the exam rules before beginning.');
      return;
    }

    navigate('/practice-exam', {
      state: { mode, settings }
    });
  };

  const handleCancel = () => {
    navigate('/practice-exam-setup');
  };

  return (
    <div className="exam-instructions">
      <div className="instructions-container">

        {/* Header */}
        <div className="instructions-header">
          <div className="exam-icon">
            <Target size={48} />
          </div>
          <h1>{examDetails.title}</h1>
          <p className="exam-description">{examDetails.description}</p>
        </div>

        {/* Exam Details */}
        <div className="exam-details-grid">
          <div className="detail-card">
            <FileText size={32} />
            <div className="detail-content">
              <div className="detail-value">{examDetails.questions}</div>
              <div className="detail-label">Questions</div>
            </div>
          </div>

          <div className="detail-card highlight">
            <Clock size={32} />
            <div className="detail-content">
              <div className="detail-value">{examDetails.timeLimit} min</div>
              <div className="detail-label">Time Limit</div>
            </div>
          </div>

          <div className="detail-card">
            <CheckCircle size={32} />
            <div className="detail-content">
              <div className="detail-value">72%</div>
              <div className="detail-label">Passing Score</div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="instructions-content">
          <h2>Exam Instructions</h2>

          <div className="instruction-section">
            <h3>📋 General Rules</h3>
            <ul>
              <li>You have <strong>{examDetails.timeLimit} minutes</strong> to complete all {examDetails.questions} questions</li>
              <li>The exam will <strong>automatically submit</strong> when time expires</li>
              <li>You can navigate between questions using Previous/Next buttons or the question grid</li>
              <li>Click "Mark for Review" to flag questions you want to revisit</li>
              <li>You can change your answers at any time before submitting</li>
            </ul>
          </div>

          <div className="instruction-section">
            <h3>⏱️ Time Management</h3>
            <ul>
              <li>The timer will display in the top-right corner and count down continuously</li>
              <li><strong className="warning-text">At 10 minutes remaining:</strong> Timer turns yellow</li>
              <li><strong className="danger-text">At 5 minutes remaining:</strong> Timer turns red and shows a warning</li>
              <li><strong className="danger-text">At 0 seconds:</strong> Exam automatically submits - no exceptions!</li>
              <li>Aim to spend no more than 1 minute per question (on average)</li>
            </ul>
          </div>

          <div className="instruction-section">
            <h3>❓ Question Types</h3>
            <ul>
              <li><strong>Multiple Choice Questions (MCQs):</strong> Select the best answer from four options</li>
              <li><strong>Performance-Based Questions (PBQs):</strong> Interactive simulations including drag-and-drop, configuration tasks, and matching exercises</li>
              <li>PBQs typically appear at the beginning of the exam (just like the real CompTIA exam!)</li>
              <li>PBQs may take longer - budget your time accordingly</li>
            </ul>
          </div>

          <div className="instruction-section">
            <h3>✅ Best Practices</h3>
            <ul>
              <li>Read each question carefully before answering</li>
              <li>If you're unsure, mark the question for review and move on</li>
              <li>Answer every question - there's no penalty for guessing</li>
              <li>Review marked questions before submitting (if time permits)</li>
              <li>Click "End Exam" only when you're ready to submit all answers</li>
            </ul>
          </div>

          <div className="instruction-section alert-section">
            <AlertCircle size={24} />
            <div>
              <h3>⚠️ Important Reminders</h3>
              <ul>
                <li>This is a timed exam - manage your time wisely</li>
                <li>Once submitted, you cannot retake the same exam (but you can generate a new one)</li>
                <li>Your results will be saved to your account for future reference</li>
                <li>You can review all questions and explanations after completing the exam</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Agreement Checkbox */}
        <div className="agreement-section">
          <label className="agreement-checkbox">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span>
              I understand the exam rules and am ready to begin. I acknowledge that the exam will
              automatically submit when the time limit expires.
            </span>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="instructions-actions">
          <button className="btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button
            className={`btn-begin ${!agreed ? 'disabled' : ''}`}
            onClick={handleBeginExam}
            disabled={!agreed}
          >
            <span>Begin Exam</span>
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Footer Note */}
        <div className="instructions-footer">
          <p>
            💡 <strong>Pro Tip:</strong> Take a deep breath, stay calm, and trust your preparation.
            You've got this!
          </p>
        </div>

      </div>
    </div>
  );
}

export default ExamInstructions;
