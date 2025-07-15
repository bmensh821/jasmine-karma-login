# 🧪 Jasmine + Karma Unit Testing Demo

This project demonstrates how to write unit tests using [Jasmine](https://jasmine.github.io/) 
and [Karma](https://karma-runner.github.io/) for a simple `LoginService` in JavaScript.

## 📂 Project Structure

qa-jasmine-karma-login/
├── src/ # Business logic (LoginService)
├── spec/ # Jasmine tests
├── karma.conf.js # Karma configuration
├── package.json
├── .gitignore
└── README.md

## 🧠 Features

- Jasmine test structure using `describe`, `it`, `beforeEach`, `afterEach`, etc.
- Simulated in-memory mock data (`users`) to test login logic
- SQL injection pattern check
- Clean setup and teardown using Jasmine hooks

## 🚀 Getting Started

### 📦 Install dependencies

```bash
npm install

▶️ Run the tests
npm run karma

🔄 Lifecycle Hooks Used

| Hook         | Purpose                                |
| ------------ | -------------------------------------- |
| `beforeAll`  | Runs once before all tests             |
| `afterAll`   | Runs once after all tests              |
| `beforeEach` | Resets mock user data before each test |
| `afterEach`  | Clears mock data after each test       |


💡 Why This Matters
This is useful for QA Engineers who want to:
- Contribute to frontend codebases (Angular, React)
- Collaborate with developers on unit testing
- Shift testing left and catch bugs earlier

👤 Author
Benyapak Mensh