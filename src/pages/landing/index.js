import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuestionnaire } from '../../context/quizContext'
import './landingPage.css'

const StartPage = () => {
  const navigate = useNavigate()
  const { setUserInfo } = useQuestionnaire()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleStart = () => {
    if (!name || !email) {
      setError('All fields are Required.')
      return
    }

    setUserInfo({ name, email })
    navigate('/step')
  }

  return (
    <div className="form-container">
      <h1 className="title">Smart QuizWise</h1>

      <div className="input-group">
        <label htmlFor="name">Enter Name</label>
        <input
          type="text"
          id="name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="email">Enter Email ID</label>
        <input
          type="email"
          id="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {error && <p className="error">{error}</p>}

      <button className="primary-btn" onClick={handleStart}>
        Start Test
      </button>
    </div>
  )
}

export default StartPage
