````markdown
# Personal Expense Tracker with AI Advisor Chatbot (MERN)

A full-stack Expense Tracker Application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) and integrated with an **AI-powered financial advisor chatbot**.  
The app helps users manage expenses, visualize spending patterns, and receive intelligent insights based on their financial behavior.

---

## 🚀 Features
- Add, edit, and delete income and expense records  
- Categorize transactions (Food, Travel, Bills, etc.)  
- Visualize spending through interactive charts and dashboards  
- AI Advisor Chatbot for personalized financial tips using OpenAI API  
- Secure user authentication (JWT)  
- Responsive UI built with React and Tailwind CSS  

---

## 🧠 Tech Stack
**Frontend:** React.js, Tailwind CSS, Chart.js  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (Mongoose)  
**AI Integration:** OpenAI API  
**Authentication:** JWT, bcrypt  
**Tools:** Git, GitHub  

---

## 🛠️ Installation and Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/chiruu-git/expense-tracker-ai.git
   cd expense-tracker-ai
````

2. **Install dependencies**

   ```bash
   npm install
   cd client
   npm install
   cd ..
   ```

3. **Add environment variables**
   Create a `.env` file in the root directory and add:

   ```
   MONGO_URI=your_mongodb_connection_string
   OPENAI_API_KEY=your_openai_api_key
   JWT_SECRET=your_secret_key
   ```

4. **Run the app**

   ```bash
   npm run dev
   ```

   The app will open on [http://localhost:3000](http://localhost:3000)

---

## 📊 Dashboard Preview

Include a screenshot of your dashboard here (optional):

```
[ Screenshot of dashboard showing charts and chatbot popup ]
```

---

## 📂 Project Structure

```
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
```

---

## 💬 AI Chatbot Advisor

The **AI Advisor** is integrated using the **OpenAI API**.
It analyzes user transactions and provides:

* Smart budgeting tips
* Expense reduction suggestions
* Monthly insights on spending habits

---

## 🔒 Authentication

Secure authentication using:

* JWT tokens
* Password hashing with bcrypt
* Protected routes for authorized users

---

## 🧩 Future Enhancements

* Add Google Sign-In authentication
* Support for recurring expenses and reminders
* Mobile app version (React Native)
* Advanced AI financial predictions

---

## 🤝 Contributing

Contributions are welcome!
Fork the repo and create a new branch:

```bash
git checkout -b feature-name
```

Then open a Pull Request describing your changes.

---

## 🧾 License

This project is open source and available under the **MIT License**.

---

### Author

**Chirag Gowda B R**
Information Science & Engineering Student
📧 [br.chirag11@gmail.com](mailto:br.chirag11@gmail.com)
🔗 [LinkedIn](https://linkedin.com/in/chiru69)

```
