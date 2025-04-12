import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuestionnaire } from '../../context/quizContext'
import questionBank from '../../constant/questions' // now an object, not array
import ProgressBar from '../../components/progressBar/Progressbar'
import QuestionCard from '../../components/card/QuestionCard'
import NavigationButtons from '../../components/navigation/navigationButtons'
import AnimatedWrapper from '../../components/animatedWrappers'
import { validateQuestion } from '../../utils/validation'

const QuestionsPage = () => {
  const { answers, updateAnswer } = useQuestionnaire()
  const navigate = useNavigate()
  const [currentId, setCurrentId] = useState('q1')
  const [history, setHistory] = useState([]) // For back button
  const [errors, setErrors] = useState({})

  const currentQuestion = questionBank[currentId]

  const handleNext = () => {
    const value = answers[currentId]
    const errMsg = validateQuestion(currentQuestion, value)

    if (errMsg) {
      setErrors({ [currentId]: errMsg })
      return
    }

    setErrors({})

    // Get next based on value (for radio), or from question object
    let nextId
    if (currentQuestion.type === 'radio') {
      const selected = currentQuestion.options.find(opt => opt.value === value)
      nextId = selected?.next
    } else {
      nextId = currentQuestion.next
    }

    if (!nextId) {
      navigate('/summary')
    } else {
      setHistory(prev => [...prev, currentId])
      setCurrentId(nextId)
    }
  }

  const handlePrevious = () => {
    const prevId = history.pop()
    if (prevId) {
      setCurrentId(prevId)
      setHistory([...history])
    }
  }

  const handleChange = (questionId, value) => {
    updateAnswer(questionId, value)
    if (errors[questionId]) {
      setErrors(prev => {
        const { [questionId]: _, ...rest } = prev
        return rest
      })
    }
  }

  return (
    <AnimatedWrapper>
      <div className="form-container">
        <div className="questions-section">
          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            value={answers[currentQuestion.id] || ''}
            onChange={(val) => handleChange(currentQuestion.id, val)}
            error={errors[currentQuestion.id]}
          />
        </div>

        <NavigationButtons
          onNext={handleNext}
          onPrevious={handlePrevious}
          isFirst={history.length === 0}
          isLast={!currentQuestion.next}
        />
      </div>

      <ProgressBar currentStep={history.length + 1} totalSteps={history.length + 2} />
    </AnimatedWrapper>
  )
}

export default QuestionsPage
