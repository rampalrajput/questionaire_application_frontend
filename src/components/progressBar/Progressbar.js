import React from 'react'
import './ProgressBar.css'

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progressPercent = Math.round((currentStep / totalSteps) * 100)

  return (
    <div className="progress-bar-wrapper">
      <div className="progress-bar-info">
        <span>Step {currentStep} of {totalSteps}</span>
        <span>{progressPercent}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar

