import React from 'react'
import './navigationButtons.css'

const NavigationButtons = ({ onNext, onPrevious, isFirst, isLast, isNextDisabled }) => (
  <div className="nav-buttons-container">

    {!isFirst ? (
      <button className="primary-btn left-btn" onClick={onPrevious}>
        Previous
      </button>
    ) : <div />}

    <button
      className="primary-btn right-btn"
      onClick={onNext}
      disabled={isNextDisabled}
    >
      {isLast ? 'Review' : 'Next'}
    </button>
  </div>
)

export default NavigationButtons
