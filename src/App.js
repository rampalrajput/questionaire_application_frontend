// src/App.js
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import AppRoutes from './routes'                // <-- import your routes
import { QuestionnaireProvider } from './context/quizContext'

function App() {
  return (
    <QuestionnaireProvider>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <AppRoutes />                         {/* <-- render your routes here */}
        </AnimatePresence>
      </BrowserRouter>
    </QuestionnaireProvider>
  )
}

export default App
