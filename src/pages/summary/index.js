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
    alert('Your test has been submitted successfully!')
    navigate('/')
  }

  const renderAnswer = (value) => {
    if (!value || value.length === 0) return <em>Not Answered</em>
    if (Array.isArray(value)) return value.join(', ')
    return value
  }

  return (
    <div className="form-container">
      <h2 className="title">Review Your Answers</h2>

      <div className="summary-section">
        <div className="input-group">
          <strong>Name:</strong> {userInfo.name || <em>Not provided</em>}
        </div>
        <div className="input-group">
          <strong>Email:</strong> {userInfo.email || <em>Not provided</em>}
        </div>

        {Object.values(questions).map((q) => {
          const answer = answers[q.id]
          if (answer) { 
            return (
              <div className="input-group" key={q.id}>
                <strong>{q.question}</strong>
                <div>{renderAnswer(answer)}</div>
              </div>
            )
          }
          return null
        })}
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
