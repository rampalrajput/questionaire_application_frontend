
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuestionnaire } from '../../context/quizContext'
import questions from '../../constant/questions'
import ProgressBar from '../../components/progressBar/Progressbar'
import QuestionCard from '../../components/card/QuestionCard'
import NavigationButtons from '../../components/navigation/navigationButtons'
import AnimatedWrapper from '../../components/animatedWrappers'
import { validateQuestion } from '../../utils/validation'
//import './questionPage.css'

const QuestionsPage = () => {

  const { answers, updateAnswer } = useQuestionnaire()
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [errors, setErrors] = useState({})

  const currentStepQuestions = questions[step]
  const totalSteps = questions.length

  const handleNext = () => {
    // Validate all questions in this step
    const newErrors = {}
    currentStepQuestions.forEach((q) => {
      const value = answers[q.id]
      const errMsg = validateQuestion(q, value)
      if (errMsg) newErrors[q.id] = errMsg
    })

    if (Object.keys(newErrors).length) {
      setErrors(newErrors)
      return
    }

    // Clear errors and move on
    setErrors({})
    if (step < totalSteps - 1) {
      setStep((prev) => prev + 1)
    } else {
      navigate('/summary')
    }
  }

  const handlePrevious = () => {
    if (step > 0) {
      setErrors({})
      setStep((prev) => prev - 1)
    }
  }

  const handleChange = (questionId, value) => {
    updateAnswer(questionId, value)
    // Clear error for this question as soon as it's changed
    if (errors[questionId]) {
      setErrors((prev) => {
        const { [questionId]: _, ...rest } = prev
        return rest
      })
    }
  }

  return (
    <AnimatedWrapper>
      <div className="form-container">
        

        <div className="questions-section">
          {currentStepQuestions.map((q) => (
            <QuestionCard
              key={q.id}
              question={q}
              value={answers[q.id] || ''}
              onChange={(val) => handleChange(q.id, val)}
              error={errors[q.id]}
            />
          ))}
        </div>

        <NavigationButtons
          onNext={handleNext}
          onPrevious={handlePrevious}
          isFirst={step === 0}
          isLast={step === totalSteps - 1}
        />
      </div>
      <ProgressBar currentStep={step + 1} totalSteps={totalSteps} />
    </AnimatedWrapper>
  )
}

export default QuestionsPage
