import React from 'react'

const InputField = ({ question, value, onChange }) => {
  const { id, label, type, required, options } = question

  return (
    <div className="input-group">
      <label htmlFor={id}>
        {label} {required && '*'}
      </label>

      {type === 'radio' ? (
        options.map((opt) => (
          <label key={opt} style={{ marginLeft: '1rem' }}>
            <input
              type="radio"
              name={id}
              value={opt}
              checked={value === opt}
              onChange={() => onChange(opt)}
            />
            {opt}
          </label>
        ))
      ) : (
        <input
          id={id}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  )
}

export default InputField
