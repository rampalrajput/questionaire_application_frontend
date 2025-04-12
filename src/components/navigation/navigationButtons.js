import React from 'react'
import './navigationButtons.css'

const NavigationButtons = ({ onNext, onPrevious, isFirst, isLast, isNextDisabled }) => (
  <div className="nav-buttons-container">

    {/* "Previous" button visible when it's not the first step */}
    {!isFirst && (
      <button className="primary-btn left-btn" onClick={onPrevious}>
        Previous
      </button>
    )}

    {/* "Next" button, which becomes "Review" on last step */}
    <button
      className="primary-btn right-btn"
      onClick={onNext}
      disabled={isNextDisabled}
    >
      {onNext ? 'Next': 'Review'}
    </button>
  </div>
)

export default NavigationButtons
