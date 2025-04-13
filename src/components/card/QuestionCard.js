import React from 'react';
import './QuestionsCard.css';

const QuestionCard = ({ question, value, onChange, error }) => {
  const isFirstStep = question.id === 'first-step'; // Adjust as needed
  const inputType = isFirstStep ? "checkbox" : question.type;

  const handleCheckboxChange = (e, optionValue) => {
    const newVal = value || [];
    if (e.target.checked) {
      onChange([...newVal, optionValue]);
    } else {
      onChange(newVal.filter((v) => v !== optionValue));
    }
  };

  const renderOptions = () => {
    return question.options.map((option, index) => {
      const display = typeof option === 'string' ? option : option.label;
      const optionValue = typeof option === 'string' ? option : option.value;

      return (
        <div key={index} className="option">
          <label>
            <input
              type={inputType}
              name={question.id}
              value={optionValue}
              checked={
                inputType === 'checkbox'
                  ? (value || []).includes(optionValue)
                  : value === optionValue
              }
              onChange={(e) =>
                inputType === 'checkbox'
                  ? handleCheckboxChange(e, optionValue)
                  : onChange(optionValue)
              }
            />
            {display}
          </label>
        </div>
      );
    });
  };

  const showValidationError =
    inputType === 'checkbox' &&
    isFirstStep &&
    (!value || value.length === 0);

  return (
    <div className="question-card">
      <h1 className="interactive-title">Smart QuizWise</h1>
      <p className="question-label">{question.question}</p>

      {question.type === 'text' && (
        <input
          className="input"
          type="text"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
        />
      )}

      {question.type === 'date' && (
        <input
          className="input"
          type="date"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
        />
      )}

      {(question.type === 'radio' || question.type === 'checkbox') && (
        <div className="options-wrapper">{renderOptions()}</div>
      )}

      {(error || showValidationError) && (
        <p className="error">{error || 'Please select at least one option.'}</p>
      )}
    </div>
  );
};

export default QuestionCard;
