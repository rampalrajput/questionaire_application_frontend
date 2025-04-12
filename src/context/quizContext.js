import React, { createContext, useState, useContext } from 'react'

const QuestionnaireContext = createContext()

export const useQuestionnaire = () => useContext(QuestionnaireContext)

export const QuestionnaireProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ name: '', email: '' })
  const [answers, setAnswers] = useState({})
  const [selectedCategories, setSelectedCategories] = useState([])  // Track selected categories

  const updateAnswer = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  const updateCategorySelection = (categories) => {
    setSelectedCategories(categories)
  }

  const resetQuestionnaire = () => {
    setUserInfo({ name: '', email: '' })
    setAnswers({})
    setSelectedCategories([])  // Reset selected categories
  }

  return (
    <QuestionnaireContext.Provider
      value={{
        userInfo,
        setUserInfo,
        answers,
        selectedCategories,         // Providing selected categories in context
        updateAnswer,
        updateCategorySelection,    // Function to update selected categories
        resetQuestionnaire,
      }}
    >
      {children}
    </QuestionnaireContext.Provider>
  )
}
