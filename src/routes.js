import React from 'react'
import { Routes, Route } from 'react-router-dom'
import StartPage from './pages/landing'
import StepPage from './pages/card'
import SummaryPage from './pages/summary'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<StartPage />} />
    <Route path="/step" element={<StepPage />} />
    <Route path="/summary" element={<SummaryPage />} />
  </Routes>
)

export default AppRoutes
