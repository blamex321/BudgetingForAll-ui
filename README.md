# Nutshell — AI-Powered Budgeting App

Nutshell is a React Native budgeting and expense-tracking application built for DUHacks 4.0. It combines mobile-first UI, Firebase authentication, persistent financial data, and AI-powered budgeting workflows.

## Product Flow

```text
Sign In / Sign Up
       │
       ▼
Expense Tracking ──► Firebase
       │
       ▼
AI Categorization ──► OpenAI GPT-4o
       │
       ▼
Insights / Advice / FIRE Planning
```

## Features

- Expense tracking
- AI-powered expense categorization
- Budgeting and FIRE planning
- Financial insights and graphs
- Firebase authentication
- React Native bottom navigation
- API integration with the Nutshell backend

## Tech Stack

**Mobile:** React Native, Expo  
**State:** Context API  
**Authentication:** Firebase Auth  
**Backend:** Node.js, Express  
**Database:** Firebase Firestore  
**AI:** OpenAI GPT-4o  
**UI:** React Native Paper, Recharts

## Screenshots

| Home | Expenses | AI Chat |
|---|---|---|
| ![Home](screenshots/home-screen.jpeg) | ![Expenses](screenshots/expenses.jpeg) | ![AI Chat](screenshots/ai-chat.jpeg) |

| FIRE Dashboard | Expense Management |
|---|---|
| ![FIRE Dashboard](screenshots/Fire-planner.jpeg) | ![Expense Management](screenshots/add-or-remove.jpeg) |

## API Integration

The mobile application communicates with the backend for expense management and AI workflows.

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/expenses` | Fetch user expenses |
| POST | `/expenses` | Add an expense |
| POST | `/ai/categorize` | AI expense categorization |
| POST | `/ai/advice` | AI financial advice |

## Related Repository

Backend API: [BudgetingForAll-backend](https://github.com/blamex321/BudgetingForAll-backend)

## Getting Started

```bash
npm install
npx expo start
```

Configure the required Firebase and backend environment values before running the application.

## Team

Built as a team project for DUHacks 4.0.
