import React, { createContext, useState, useContext } from 'react';

// Create context
const QuestionnaireContext = createContext();

// Custom hook to use the context
export const useQuestionnaire = () => useContext(QuestionnaireContext);

// Provider component
export const QuestionnaireProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });
  const [answers, setAnswers] = useState({});
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Update individual question's answer
  const updateAnswer = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  // Update selected categories (for multi-category flow if needed)
  const updateCategorySelection = (categories) => {
    setSelectedCategories(categories);
  };

  // Reset all questionnaire data (used on final submit)
  const resetQuestionnaire = () => {
    setUserInfo({ name: '', email: '' });
    setAnswers({});
    setSelectedCategories([]);
  };

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
  );
};
