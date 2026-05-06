# 🎭 Playwright Automation Project

## 📌 Project Overview

This repository contains end-to-end test automation scripts built using **Playwright**.
It covers key user flows like login, signup, and forgot password scenarios.

---

## 🚀 Tech Stack

* Playwright
* JavaScript / TypeScript
* Node.js
* VS Code

---

## 📂 Project Structure

```
├── tests/
│   ├── *.spec.js
├── PageObjects/
│   ├── PageLogin.js
│   ├── PageSignup.js
│   ├── PageForgotPassword.js
├── Common/
│   ├── URLs.js
│   ├── TestData.js
├── playwright.config.js
├── package.json
```

---

## ⚙️ Setup Instructions

1. Clone the repository:

```bash
git clone <your-repo-url>
```

2. Navigate to project:

```bash
cd <project-folder>
```

3. Install dependencies:

```bash
npm install
```

4. Install Playwright browsers:

```bash
npx playwright install
```

---

## ▶️ Run Tests

Run all tests:

```bash
npx playwright test
```

Run specific test:

```bash
npx playwright test tests/1.4ForgotPassword.spec.js
```

Run in headed mode:

```bash
npx playwright test --headed
```

---

## 📊 Test Reports

To view HTML report:

```bash
npx playwright show-report
```

---

## 🧪 Features Covered

* Login functionality
* Signup flow
* Forgot Password flow
* Form validations
* Error message validation

---

## 💡 Best Practices Used

* Page Object Model (POM)
* Reusable locators
* Data-driven testing
* Playwright locators (`getByRole`, `getByTestId`)

---

## ⚠️ Notes

* Prefer Playwright built-in locators over XPath
* Keep locators centralized in POM files

---

## 👤 Author

Gunjan Ranparia

---
