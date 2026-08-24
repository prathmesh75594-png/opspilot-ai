const questionInput = document.getElementById("question");
const messages = document.getElementById("messages");
const sendButton = document.getElementById("sendButton");
const clearButton = document.getElementById("clearButton");

async function askAI() {
    const question = questionInput.value.trim();
    if (!question || sendButton.disabled) return;

    addMessage(question, "user-message");
    questionInput.value = "";
    autoResize();

    sendButton.disabled = true;
    sendButton.innerHTML = 'Thinking... <span>◌</span>';

    const loadingMessage = addMessage("OpsPilot is analyzing your question...", "ai-message");

    try {
        const response = await fetch("/api/ask", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({question})
        });

        let data;
        try {
            data = await response.json();
        } catch {
            throw new Error(`Server returned HTTP ${response.status}`);
        }

        loadingMessage.remove();

        if (data.success) {
            addMessage(data.answer, "ai-message");
        } else {
            addMessage("❌ " + (data.error || "Something went wrong."), "ai-message");
        }
    } catch (error) {
        loadingMessage.remove();
        addMessage(
            "❌ Cannot connect to OpsPilot right now. Please wait a moment and try again.",
            "ai-message"
        );
        console.error("OpsPilot error:", error);
    } finally {
        sendButton.disabled = false;
        sendButton.innerHTML = 'Send <span>➤</span>';
    }
}

function addMessage(text, className) {
    const message = document.createElement("div");
    message.className = `message ${className}`;
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
    return message;
}

function askSuggestion(question) {
    questionInput.value = question;
    autoResize();
    askAI();
}

document.querySelectorAll("[data-prompt]").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".tool").forEach(t => t.classList.remove("active"));
        if (button.classList.contains("tool")) button.classList.add("active");
        askSuggestion(button.dataset.prompt);
    });
});

clearButton.addEventListener("click", () => {
    messages.innerHTML = "";
    questionInput.focus();
});

questionInput.addEventListener("keydown", event => {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        askAI();
    }
});

questionInput.addEventListener("input", autoResize);

function autoResize() {
    questionInput.style.height = "auto";
    questionInput.style.height = Math.min(questionInput.scrollHeight, 120) + "px";
}