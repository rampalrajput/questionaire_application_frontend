import React, { createContext, useState, useContext } from 'react'

const QuestionnaireContext = createContext()

export const useQuestionnaire = () => useContext(QuestionnaireContext)

export const QuestionnaireProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ name: '', email: '' })
  const [answers, setAnswers] = useState({})
  const [selectedCategories, setSelectedCategories] = useState([])  

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
    setSelectedCategories([]) 
  }

  return (
    <QuestionnaireContext.Provider
      value={{
        userInfo,
        setUserInfo,
        answers,
        selectedCategories,         
        updateAnswer,
        updateCategorySelection,  
        resetQuestionnaire,
      }}
    >
      {children}
    </QuestionnaireContext.Provider>
  )
}
