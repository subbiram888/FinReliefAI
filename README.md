# 💰 FinRelief AI

> AI-Powered Debt Relief & Financial Recovery Platform

FinRelief AI is a full-stack AI-powered financial management platform that helps users manage loans, analyze financial health, predict debt settlements, generate AI negotiation strategies, and track repayment history.

---

## 🚀 Features

### 🔐 User Authentication
- User Registration
- Secure Login
- JWT Authentication
- Password Hashing (bcrypt)

### 👤 Profile Management
- Update Personal Information
- Monthly Income
- Monthly Expenses
- Savings
- Employment Type

### 📊 Dashboard
- Financial Overview
- Loan Summary
- Outstanding Balance
- EMI Tracking
- Financial Insights

### 💚 Financial Health
- AI Financial Score
- Debt Ratio
- Savings Analysis
- Personalized Recommendations

### 🎯 Settlement Predictor
- AI Settlement Prediction
- Estimated Savings
- Best Negotiation Time

### 🤖 AI Negotiation Strategy
- AI-generated negotiation strategies
- Smart repayment suggestions
- Financial recommendations

### 📧 Negotiation Email Generator
- AI-generated negotiation emails
- Ready-to-send email templates

### 📜 History
- AI Analysis History
- Loan Activity History

### ⚖️ Know Your Rights
- Financial awareness
- Consumer debt rights

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router
- Axios
- CSS
- Vite

## Backend

- FastAPI
- SQLAlchemy
- SQLite
- JWT Authentication
- Pydantic
- Uvicorn

## AI

- Google Gemini API

## Deployment

Frontend
- Vercel

Backend
- Render

---

# 📂 Project Structure

```
FinReliefAI
│
├── backend
│   ├── app
│   │   ├── core
│   │   ├── database
│   │   ├── dependencies
│   │   ├── models
│   │   ├── routers
│   │   ├── schemas
│   │   ├── services
│   │   └── main.py
│   │
│   └── requirements.txt
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── styles
│   │   └── App.jsx
│   │
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/subbiram888/FinReliefAI.git

cd FinReliefAI
```

---

## Backend Setup

```bash
cd backend

python -m venv venv
```

### Activate

Windows

```bash
venv\Scripts\activate
```

Linux / Mac

```bash
source venv/bin/activate
```

Install packages

```bash
pip install -r ../requirements.txt
```

Run backend

```bash
uvicorn app.main:app --reload
```

Backend runs at

```
http://127.0.0.1:8000
```

Swagger

```
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Runs on

```
http://localhost:5173
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend.

```
GEMINI_API_KEY=YOUR_API_KEY

SECRET_KEY=YOUR_SECRET_KEY

ALGORITHM=HS256

ACCESS_TOKEN_EXPIRE_MINUTES=60
```

---

# 📡 API Endpoints

## Authentication

```
POST /register

POST /login
```

## User

```
GET /profile

PUT /update-profile
```

## Loans

```
GET /loans

POST /add-loan

DELETE /loan/{id}
```

## Dashboard

```
GET /dashboard
```

## Financial Health

```
GET /financial-health
```

## Settlement

```
GET /settlement-predictor
```

## AI

```
GET /ai-negotiation-strategy
```

## History

```
GET /ai-history
```

---

# 🔒 Security

- JWT Authentication
- Password Hashing
- Protected Routes
- CORS Enabled
- Token Authorization

---

# 📸 Screenshots

Add screenshots here.

Examples

```
Login Page

Dashboard

Financial Health

Settlement Predictor

AI Negotiation

Profile
```

---

# 🎯 Future Improvements

- Email OTP Verification
- Forgot Password
- AI Chatbot
- PDF Report Export
- Loan EMI Calculator
- Notification System
- PostgreSQL Support
- Docker Deployment
- CI/CD Pipeline
- Multi-language Support

---

# 👨‍💻 Author

**G. Subbi Ram Reddy**

B.Tech Computer Science Engineering

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub.

It helps others discover the project.

---

# 📜 License

This project is licensed under the MIT License.
