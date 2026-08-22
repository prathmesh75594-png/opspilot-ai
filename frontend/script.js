const questionInput = document.getElementById("question");
const messages = document.getElementById("messages");
const sendButton = document.getElementById("sendButton");


async function askAI() {

    const question = questionInput.value.trim();

    if (!question) {
        return;
    }

    addMessage(question, "user-message");

    questionInput.value = "";

    sendButton.disabled = true;
    sendButton.textContent = "Thinking...";

    const loadingMessage = addMessage(
        "OpsPilot is analyzing your question...",
        "ai-message"
    );

    try {

        const response = await fetch(
            "http://localhost:5000/api/ask",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    question: question
                })
            }
        );

        const data = await response.json();

        loadingMessage.remove();

        if (data.success) {

            addMessage(
                data.answer,
                "ai-message"
            );

        } else {

            addMessage(
                "❌ " + (data.error || "Something went wrong."),
                "ai-message"
            );

        }

    } catch (error) {

        loadingMessage.remove();

        addMessage(
            "❌ Cannot connect to OpsPilot backend. Make sure server.js is running on port 5000.",
            "ai-message"
        );

        console.error(error);

    } finally {

        sendButton.disabled = false;
        sendButton.textContent = "Send";

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

    askAI();

}


questionInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        askAI();

    }

});
