require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const { GoogleGenAI } = require("@google/genai");

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    service: "OpsPilot AI",
    status: "healthy"
  });
});

// AI Assistant
app.post("/api/ask", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        error: "Question is required"
      });
    }

    const prompt = `
You are OpsPilot AI, a mini DevOps AI assistant.

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

Give practical, beginner-friendly answers.
When giving commands, explain what they do.
Never pretend you executed a command when you did not.

User question:
${question}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt
    });

    res.json({
      success: true,
      answer: response.text
    });

  } catch (error) {
    console.error("Gemini Error:", error);

    res.status(500).json({
      error: "Failed to get AI response",
      details: error.message
    });
  }
});
// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`OpsPilot AI server running on port ${PORT}`);
});
