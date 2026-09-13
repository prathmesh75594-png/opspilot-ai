# 🚀 OpsPilot.ai

### AI-Powered DevOps & Cloud Operations Assistant

OpsPilot.ai is an AI-powered DevOps assistant designed to help developers and cloud engineers understand infrastructure problems, troubleshoot issues, generate commands, and work more efficiently with cloud and DevOps technologies.

The goal of OpsPilot.ai is simple:

> **Turn complex DevOps problems into understandable, actionable solutions.**

---

## 🌐 Live Demo

🚀 **Try OpsPilot.ai:**  
https://opspilot-ai-1-1i5c.onrender.com

📂 **GitHub Repository:**  
https://github.com/prathmesh75594-png/opspilot-ai

---

## 💡 Why I Built OpsPilot.ai

Modern DevOps environments involve many technologies such as:

- Linux
- Docker
- AWS
- Kubernetes
- Networking
- Monitoring
- CI/CD
- Infrastructure troubleshooting

For beginners and even experienced engineers, diagnosing infrastructure problems can require searching through documentation, logs, commands, and multiple tools.

I built OpsPilot.ai to explore how AI can act as an intelligent assistant for DevOps workflows.

Instead of simply generating generic answers, the platform is designed around practical DevOps tasks such as:

- Understanding infrastructure errors
- Troubleshooting common problems
- Explaining DevOps concepts
- Suggesting commands
- Providing step-by-step solutions
- Helping developers reason about cloud infrastructure

---

# ✨ Key Features

## 🤖 AI DevOps Assistant

Ask DevOps and cloud-related questions and receive AI-generated explanations and solutions.

Examples:

```text
Why is my Docker container crashing?

How do I check disk usage in Linux?

How can I troubleshoot a failed deployment?

What does a Kubernetes CrashLoopBackOff error mean?

How can I check which process is using port 8080?
```

---

## 🛠️ Practical Troubleshooting

OpsPilot is designed to provide practical troubleshooting guidance rather than only theoretical explanations.

The assistant can help break down problems into:

1. Identify the problem
2. Understand the possible cause
3. Run diagnostic commands
4. Analyze the result
5. Apply the appropriate solution
6. Verify that the issue is resolved

---

## ☁️ Cloud & DevOps Focus

The project focuses on technologies commonly used in modern cloud environments:

| Technology | Purpose |
|---|---|
| 🐧 Linux | System administration & troubleshooting |
| 🐳 Docker | Containerization |
| ☁️ AWS | Cloud infrastructure |
| ☸️ Kubernetes | Container orchestration |
| 📊 Monitoring | Observability & troubleshooting |
| 🔄 DevOps | Automation & deployment |
| 🤖 AI | Intelligent assistance |

---

# 🏗️ Architecture

OpsPilot.ai follows a simple full-stack architecture:

```text
                    ┌─────────────────────┐
                    │      User           │
                    │   DevOps Question   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   OpsPilot Frontend │
                    │     HTML/CSS/JS     │
                    └──────────┬──────────┘
                               │
                         HTTP Request
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Node.js Backend   │
                    │       Express       │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │     Groq API        │
                    │   LLM Processing    │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   AI Response       │
                    │ DevOps Explanation  │
                    └─────────────────────┘
```

---

# 🧰 Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Node.js
- Express.js
- REST API

### AI

- Groq API
- Large Language Model

### DevOps / Deployment

- Git
- GitHub
- Docker
- Linux
- Render

---

# 📁 Project Structure

```text
opspilot-ai/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .env
│   └── .gitignore
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

# ⚙️ How It Works

### 1️⃣ User enters a DevOps question

The user interacts with the OpsPilot.ai frontend.

### 2️⃣ Frontend sends the request

The question is sent to the backend through an API request.

```text
POST /api/ask
```

### 3️⃣ Backend processes the request

The Node.js + Express backend receives the request and prepares it for the AI model.

### 4️⃣ AI generates a response

The backend communicates with the Groq API and receives an AI-generated response.

### 5️⃣ Response is returned

The backend sends the result back to the frontend where it is displayed to the user.

---

# 🔐 Environment Variables

Create a `.env` file inside the `backend` directory:

```env
GROQ_API_KEY=your_groq_api_key
```

⚠️ **Never commit your API key to GitHub.**

The `.env` file should remain inside `.gitignore`.

Example:

```gitignore
node_modules/
.env
```

---

# 🚀 Run Locally

## 1. Clone the repository

```bash
git clone https://github.com/prathmesh75594-png/opspilot-ai.git
```

```bash
cd opspilot-ai
```

---

## 2. Install backend dependencies

```bash
cd backend
npm install
```

---

## 3. Configure environment variables

Create:

```text
backend/.env
```

Add:

```env
GROQ_API_KEY=your_api_key_here
```

---

## 4. Start the application

```bash
node server.js
```

The application will start on:

```text
http://localhost:10000
```

---

# 🩺 API Health Check

OpsPilot includes a health-check endpoint:

```http
GET /health
```

Example response:

```json
{
  "success": true,
  "message": "🚀 OpsPilot AI API is running!",
  "provider": "Groq"
}
```

This endpoint can be useful for checking whether the backend service is running correctly.

---

# 📡 API Endpoint

### Ask the AI Assistant

```http
POST /api/ask
```

The endpoint accepts a DevOps-related question and returns an AI-generated response.

Example request:

```json
{
  "question": "Why is my Docker container crashing?"
}
```

---

# 🌍 Deployment

OpsPilot.ai is deployed as a web application and can be accessed online.

### Production Application

https://opspilot-ai-1-1i5c.onrender.com

The application uses:

```text
Frontend
   ↓
Node.js / Express
   ↓
Groq API
```

---

# 🔭 Future Improvements

OpsPilot.ai is an evolving project.

Planned improvements include:

- [ ] AWS infrastructure diagnostics
- [ ] Docker container log analysis
- [ ] Kubernetes troubleshooting
- [ ] Automated log analysis
- [ ] Prometheus/Grafana integration
- [ ] CI/CD pipeline assistance
- [ ] Infrastructure monitoring
- [ ] AI-powered incident analysis
- [ ] Cloud cost analysis
- [ ] Infrastructure-as-Code assistance
- [ ] Terraform support
- [ ] Ansible automation
- [ ] DevOps workflow automation
- [ ] Authentication and user accounts
- [ ] Conversation history

---

# 🎯 What I Learned

Building OpsPilot.ai helped me gain practical experience with:

- Full-stack application development
- REST API development
- Node.js and Express
- AI API integration
- Environment variable management
- Git and GitHub
- Cloud deployment
- Backend/frontend integration
- Debugging production deployments
- DevOps concepts
- Cloud infrastructure concepts

More importantly, this project helped me understand how AI can be integrated into practical DevOps workflows rather than being used only as a general chatbot.

---

# 🧠 Project Vision

The long-term vision for OpsPilot.ai is to evolve from an AI assistant into an intelligent **DevOps operations platform**.

The goal is to move from:

```text
Ask → Answer
```

towards:

```text
Detect
   ↓
Understand
   ↓
Diagnose
   ↓
Recommend
   ↓
Automate
   ↓
Verify
```

This could eventually allow OpsPilot.ai to assist with real-world infrastructure incidents and automate repetitive DevOps operations.

---

# 👨‍💻 Author

### Prathmesh Pagare

Cloud & DevOps Enthusiast | AI | Linux | Docker | AWS | Python

📂 GitHub:  
https://github.com/prathmesh75594-png

🚀 Portfolio:  
https://prathmesh75594-png.github.io/prathmesh-portfolio/

---

# ⭐ Support

If you find this project interesting, consider giving the repository a ⭐ on GitHub.

Your feedback and suggestions are always welcome!

---

## 📜 License

This project is created for learning, experimentation, and portfolio purposes.
