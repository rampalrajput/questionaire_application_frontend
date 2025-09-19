import React from 'react'
import { Routes, Route } from 'react-router-dom'
import StartPage from './pages/landing'
import StepPage from './pages/card'
import SummaryPage from './pages/summary'
import StudentPage from './pages/Students/studentsPages'


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<StartPage />} />
    <Route path="/step" element={<StepPage />} />
    <Route path="/summary" element={<SummaryPage />} />
    <Route path="/studentList" element={<StudentPage />} />
  </Routes>
)

export default AppRoutes
