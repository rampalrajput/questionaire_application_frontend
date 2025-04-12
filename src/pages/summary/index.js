import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuestionnaire } from '../../context/quizContext'
import questions from '../../constant/questions'
import './summaryPage.css'

const SummaryPage = () => {
  const { answers, userInfo } = useQuestionnaire()
  const navigate = useNavigate()

  const handleEdit = () => {
    navigate('/step')
  }

  const handleSubmit = () => {
    alert('Your test have been submitted successfully!')
    navigate('/')
  }

  return (
    <div className="form-container">
      <h2 className="title">Review Your Answers</h2>

      <div className="summary-section">
        <div className="input-group">
          <strong>Name:</strong> {userInfo.name}
        </div>
        <div className="input-group">
          <strong>Email:</strong> {userInfo.email}
        </div>

        {questions.flat().map((q) => (
          <div className="input-group" key={q.id}>
            <strong>{q.label}</strong>
            <div>{answers[q.id] || <em>Not Answered</em>}</div>
          </div>
        ))}
      </div>

      <div className="button-group">
        <button className="primary-btn" onClick={handleEdit}>
          Go Back & Edit
        </button>
        <button className="primary-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default SummaryPage
