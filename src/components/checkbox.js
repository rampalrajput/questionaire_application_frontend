
import React from 'react'

const CheckboxGroup = ({ question, value = [], onChange, error }) => {
  const handleCheckboxChange = (option) => {
    const newValue = value.includes(option)
      ? value.filter((v) => v !== option)
      : [...value, option]
    onChange(newValue)
  }

  return (
    <div className="checkbox-group">
      <p>{question.question}</p>
      {question.options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            checked={value.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
          {option}
        </label>
      ))}
      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default CheckboxGroup
