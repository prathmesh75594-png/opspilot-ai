require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const Groq = require("groq-sdk");

const app = express();

app.use(cors());
app.use(express.json());

// ================================
// GROQ AI
// ================================

if (!process.env.GROQ_API_KEY) {
    console.error("❌ GROQ_API_KEY is missing!");
    process.exit(1);
}

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

// ================================
// HEALTH CHECK
// ================================

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "🚀 OpsPilot AI API is running!",
        provider: "Groq"
    });
});

// ================================
// AI ASSISTANT
// ================================

app.post("/api/ask", async (req, res) => {

    try {

        const { question } = req.body;

        console.log("📩 Question received:", question);

        // Check question
        if (!question || question.trim() === "") {

            return res.status(400).json({
                success: false,
                error: "Question is required"
            });

        }

        const systemPrompt = `
You are OpsPilot AI, a professional DevOps AI assistant.

You help users with:

- Linux
- Docker
- Git and GitHub
- CI/CD
- Jenkins
- AWS
- Kubernetes
- Networking
- DevOps troubleshooting
- Cloud computing
- DevOps tools

Rules:

1. Give practical and beginner-friendly answers.
2. Explain commands clearly.
3. When providing commands, explain what each command does.
4. Give step-by-step solutions when appropriate.
5. Never claim that you executed a command.
6. If the user gives an error message, identify the cause and provide the fix.
7. Keep answers clear and useful.
8. Use code blocks for commands and code.
`;

        console.log("🤖 Sending request to Groq...");

        const completion = await groq.chat.completions.create({

            // Use the model available for your account
            model: "openai/gpt-oss-20b",

            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                {
                    role: "user",
                    content: question
                }
            ],

            temperature: 0.5,
            max_tokens: 2048
        });

        const answer =
            completion.choices?.[0]?.message?.content ||
            "Sorry, I could not generate a response.";

        console.log("✅ Groq response received");

        return res.json({
            success: true,
            answer: answer
        });

    } catch (error) {

        console.error("❌ Groq Error:");
        console.error(error);

        return res.status(500).json({
            success: false,
            error: "Failed to get AI response",
            details: error.message
        });

    }

});

// ================================
// SERVE FRONTEND
// ================================

const frontendPath = path.join(__dirname, "..", "frontend");

app.use(express.static(frontendPath));

app.get("/app", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
});

// ================================
// START SERVER
// ================================

const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  
    console.log("====================================");
    console.log("🚀 OpsPilot AI server is running");
    console.log(`🌐 Port: ${PORT}`);
    console.log("🤖 AI Provider: Groq");
    console.log("🧠 Model: llama-3.1-8b-instant");
    console.log("====================================");

});