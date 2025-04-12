Smart QuizWise (questionaries_application_frontend)

A dynamic, multi-step questionnaire React application with interactive UI, animations, and form validation. Allows users to enter their name and email, navigate through various question types, track progress, and review their responses before submission.

🚀 Features

Landing Page: Collects user name and email.

Multi-Step Form: Supports text, date, numeric, and multiple-choice questions.

Dynamic Flow: Next questions depend on previous answers.

Progress Bar: Visual indicator of completion.

Navigation: Next and Previous buttons for smooth transitions.

Form Validation: Required and optional fields with inline error messages.

Summary Page: Review all answers before final submission.

Animations: Smooth page and component transitions using Framer Motion.

Global State: Managed via React Context API.

React (v18+)

Vite (for fast development)

React Router DOM (v6)

Framer Motion (animations)

SCSS / CSS Modules (styles)

React Context API (state management)

⚙️ Prerequisites

Node.js (v14 or later)

npm (v6 or later) or yarn

🔧 Installation

Clone the repository

git clone https://github.com/your-username/questionaries_application_frontend.git
cd questionaries_application_frontend

Install dependencies

npm install
# or
yarn install

Run the development server

npm run dev
# or
yarn dev

Open in browser
Navigate to http://localhost:3000 (or the port shown in console).

📦 Available Scripts

npm run dev / yarn dev: Start development server with hot reload.

npm run build / yarn build: Build for production into dist/.

npm run preview / yarn preview: Preview production build locally.

🎨 Styling Guidelines

Components use CSS Modules for scoped styles (.module.css).

Global or page-specific styles in .scss or .css under src/styles/.

Utility classes in index.css if needed.

📋 Usage

Enter your name and email on the landing page.

Click Start Test to begin the questionnaire.

Answer questions, navigate using Next and Previous.

View your progress on the progress bar.

Review answers on the Summary page and submit.

🚀 Deployment

You can deploy the production build to any static hosting (Netlify, Vercel, GitHub Pages, etc.).

Example for Netlify:

npm run build
netlify deploy --dir=dist

🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

📄 License

This project is licensed under the MIT License. See the LICENSE file for details.