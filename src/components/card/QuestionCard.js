import React from 'react'
import './QuestionsCard.css'

const QuestionCard = ({ question, value, onChange, error }) => {
  const renderOptions = () => {
    return question.options.map((option, index) => {
      const display = typeof option === 'string' ? option : option.label
      const optionValue = typeof option === 'string' ? option : option.value

      return (
        <label key={index}>
          <input
            type={question.type}
            name={question.id}
            value={optionValue}
            checked={
              question.type === 'checkbox'
                ? (value || []).includes(optionValue)
                : value === optionValue
            }
            onChange={(e) => {
              if (question.type === 'checkbox') {
                const newVal = value || []
                if (e.target.checked) {
                  onChange([...newVal, optionValue])
                } else {
                  onChange(newVal.filter((v) => v !== optionValue))
                }
              } else {
                onChange(optionValue)
              }
            }}
          />
          {display}
        </label>
      )
    })
  }

  return (
    <div className="question-card">
      <p className="question-label">{question.question}</p>
      {question.options ? renderOptions() : (
        <input
          className="input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default QuestionCard
