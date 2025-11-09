import React, { useState, useEffect } from 'react';
import './PBQConfiguration.css';

function PBQConfiguration({ question, onAnswer, userAnswer, isReviewMode = false }) {
  const [fieldValues, setFieldValues] = useState({});

  // Initialize from userAnswer
  useEffect(() => {
    if (userAnswer) {
      setFieldValues(userAnswer);
    } else {
      const initialValues = {};
      question.fields.forEach(field => {
        initialValues[field.id] = '';
      });
      setFieldValues(initialValues);
    }
  }, [question, userAnswer]);

  const handleFieldChange = (fieldId, value) => {
    const newValues = {
      ...fieldValues,
      [fieldId]: value
    };
    setFieldValues(newValues);
    onAnswer(newValues);
  };

  const isFieldCorrect = (field) => {
    if (!isReviewMode) return null;

    const userValue = fieldValues[field.id];
    if (!userValue) return false;

    const normalizedUser = userValue.toString().toLowerCase().trim();
    const normalizedCorrect = field.correctAnswer.toString().toLowerCase().trim();

    // Check exact match
    if (normalizedUser === normalizedCorrect) return true;

    // Check partial credit answers if available
    if (field.partialCredit) {
      return field.partialCredit.some(answer =>
        normalizedUser === answer.toString().toLowerCase().trim()
      );
    }

    return false;
  };

  return (
    <div className="pbq-configuration">
      <div className="configuration-form">
        {question.fields.map(field => (
          <div key={field.id} className="config-field">
            <label htmlFor={field.id}>
              {field.label}
              {isReviewMode && (
                <span className={`status-indicator ${isFieldCorrect(field) ? 'correct' : 'incorrect'}`}>
                  {isFieldCorrect(field) ? ' ✓' : ' ✗'}
                </span>
              )}
            </label>
            <input
              type="text"
              id={field.id}
              placeholder={field.placeholder}
              value={fieldValues[field.id] || ''}
              onChange={(e) => handleFieldChange(field.id, e.target.value)}
              disabled={isReviewMode}
              className={isReviewMode ? (isFieldCorrect(field) ? 'correct' : 'incorrect') : ''}
            />
            {isReviewMode && !isFieldCorrect(field) && (
              <div className="correct-answer-display">
                <strong>Correct answer:</strong> {field.correctAnswer}
                {field.partialCredit && field.partialCredit.length > 0 && (
                  <span className="partial-credit-note">
                    {' '}(Also accepted: {field.partialCredit.join(', ')})
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PBQConfiguration;
