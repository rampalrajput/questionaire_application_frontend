/**
 * @param {Object} question 
 * @param {any}   value    
 * @returns {string|null}  
 */
export function validateQuestion(question, value) {
    if (question.required && (value === '' || value == null)) {
      return 'This question is required.'
    }
    return null
  }
  