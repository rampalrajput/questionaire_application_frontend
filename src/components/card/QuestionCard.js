import React from 'react'
import InputField from '../Inputfield'
import './QuestionsCard.css' 

const QuestionCard = ({ question, value, onChange, error }) => {
  return (
    <div className="question-card">
      <InputField
        question={question}
        value={value}
        onChange={onChange}
      />
      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default QuestionCard
