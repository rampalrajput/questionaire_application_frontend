const questions = {
  q1: {
    id: 'q1',
    question: 'What is your goal?',
    type: 'radio',
    options: [
      { label: 'Government Exam', value: 'govt', next: 'q2' },
      { label: 'Tech Career', value: 'tech', next: 'q5' }
    ]
  },

  // --- Government Exam Flow ---
  q2: {
    id: 'q2',
    question: 'Which government exam are you preparing for?',
    type: 'text',
    next: 'q3'
  },
  q3: {
    id: 'q3',
    question: 'How many hours do you study daily?',
    type: 'radio',
    options: [
      { label: 'Less than 2 hours', value: 'lt2', next: 'q4' },
      { label: '2 to 4 hours', value: '2to4', next: 'q4' },
      { label: 'More than 4 hours', value: 'gt4', next: 'q4' }
    ]
  },
  q4: {
    id: 'q4',
    question: 'Do you prefer online coaching or offline?',
    type: 'radio',
    options: [
      { label: 'Online', value: 'online', next: null },
      { label: 'Offline', value: 'offline', next: null }
    ]
  },

  // --- Tech Career Flow ---
  q5: {
    id: 'q5',
    question: 'Which tech stack do you prefer?',
    type: 'checkbox',
    options: ['React', 'Node', 'Java', 'Python'],
    next: 'q6'
  },
  q6: {
    id: 'q6',
    question: 'Are you preparing for product-based or service-based companies?',
    type: 'radio',
    options: [
      { label: 'Product-based', value: 'product', next: 'q7' },
      { label: 'Service-based', value: 'service', next: 'q7' }
    ]
  },
  q7: {
    id: 'q7',
    question: 'How many DSA problems do you solve weekly?',
    type: 'radio',
    options: [
      { label: '0-5', value: '0-5', next: 'q8' },
      { label: '6-15', value: '6-15', next: 'q8' },
      { label: '15+', value: '15+', next: 'q8' }
    ]
  },
  q8: {
    id: 'q8',
    question: 'Are you comfortable with system design concepts?',
    type: 'radio',
    options: [
      { label: 'Yes', value: 'yes', next: null },
      { label: 'No', value: 'no', next: null }
    ]
  }
}

export default questions
