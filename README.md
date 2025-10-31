name: "Personal Expense Tracker with AI Advisor Chatbot (MERN)"
description: >
  A full-stack Expense Tracker Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js)
  integrated with an AI-powered financial advisor chatbot. The app helps users manage expenses, visualize
  spending patterns, and receive intelligent insights based on their financial behavior.

features:
  - Add, edit, and delete income and expense records
  - Categorize transactions (Food, Travel, Bills, etc.)
  - Visualize spending through interactive charts and dashboards
  - AI Advisor Chatbot for personalized financial tips using OpenAI API
  - Secure user authentication (JWT)
  - Responsive UI built with React and Tailwind CSS

tech_stack:
  frontend:
    - React.js
    - Tailwind CSS
    - Chart.js
  backend:
    - Node.js
    - Express.js
  database:
    - MongoDB (Mongoose)
  ai_integration:
    - OpenAI API
  authentication:
    - JWT
    - bcrypt
  tools:
    - Git
    - GitHub

installation_and_setup: |
  1. Clone the repository:
     git clone https://github.com/chiruu-git/expense-tracker-ai.git
     cd expense-tracker-ai

  2. Install dependencies:
     npm install
     cd client
     npm install
     cd ..

  3. Add environment variables:
     Create a `.env` file in the root directory and add:
       MONGO_URI=your_mongodb_connection_string
       OPENAI_API_KEY=your_openai_api_key
       JWT_SECRET=your_secret_key

  4. Run the app:
     npm run dev
     # Opens at http://localhost:3000

project_structure: |
  expense-tracker-ai/
  ├── client/               # Frontend React app
  │   ├── src/
  │   │   ├── components/   # Reusable components
  │   │   ├── pages/        # App pages (Dashboard, Login, etc.)
  │   │   └── App.js
  │
  ├── server/               # Backend API
  │   ├── routes/           # Expense, auth, and chatbot routes
  │   ├── models/           # Mongoose models
  │   ├── controllers/      # Business logic
  │   └── server.js
  │
  ├── .env.example
  ├── package.json
  └── README.md

ai_chatbot_advisor:
  description: >
    The AI Advisor is integrated using the OpenAI API. It analyzes user transactions and provides smart budgeting
    tips, expense reduction suggestions, and monthly insights on spending habits.

authentication:
  description: >
    Secure user authentication is implemented using JWT tokens and password hashing with bcrypt.
    Routes are protected to ensure only authorized users can access personal expense data.

future_enhancements:
  - Add Google Sign-In authentication
  - Support for recurring expenses and reminders
  - Mobile app version using React Native
  - Advanced AI financial predictions

contributing: |
  Contributions are welcome!
  Fork the repo and create a new branch:
    git checkout -b feature-name
  Then open a Pull Request describing your changes.

license:
  type: "MIT License"
  link: "https://opensource.org/licenses/MIT"

author:
  name: "Chirag Gowda B R"
  title: "Information Science & Engineering Student"
  email: "br.chirag11@gmail.com"
  linkedin: "https://linkedin.com/in/chiru69"
