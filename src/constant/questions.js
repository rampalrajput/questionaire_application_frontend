const questions = [
    [
      {
        id: 'q1',
        type: 'text',
        label: 'What is your favorite programming language?',
        required: true,
      },
      {
        id: 'q2',
        type: 'date',
        label: 'When did you start coding?',
        required: false,
      },
      
    ],
    [
      {
        id: 'q3',
        type: 'number',
        label: 'How many hours do you code per day?',
        required: true,
      },
    ],
    [
      {
        id: 'q4',
        type: 'radio',
        label: 'Preferred platform?',
        options: ['Web', 'Mobile', 'Desktop'],
        required: true,
      },
    ],
    [
      {
        id: 'q5',
        type: 'radio',
        label: 'Preferred location?',
        options: ['Delhi', 'Indore', 'Hyderbad'],
        required: true,
      },
    ],
    [
      {
        id: 'q6',
        type: 'text',
        label: 'Feedback',
        required: false,
      },
    ],
  ]
  
  export default questions
  