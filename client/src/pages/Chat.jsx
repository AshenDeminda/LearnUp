import { useState, useEffect, useRef } from "react";
import { getLearningPath } from "../api/geminiapi";
import ReactMarkdown from "react-markdown";
import "../styles/Chat.css";

const CHAT_STORAGE_KEY = "learnup_chat_history";

function Chat() {
  const [question, setQuestion] = useState("");
  const [chat, setChat] = useState([]); // {role: 'user'|'ai', text: string}
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [apiKeyValid, setApiKeyValid] = useState(true);
  const chatEndRef = useRef(null);

  // Load chat history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(CHAT_STORAGE_KEY);
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        setChat(parsed);
      }
    } catch {
      // If parsing fails, do nothing (keep chat as [])
    }
  }, []);

  // Save chat history to localStorage
  useEffect(() => {
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(chat));
  }, [chat]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey || apiKey.trim() === "") {
      setApiKeyValid(false);
      setError("Gemini API key is missing or invalid. Please add a valid key to your .env file.");
    } else {
      setApiKeyValid(true);
    }
  }, []);

  useEffect(() => {
    // Scroll to bottom on new message
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat, loading]);

  const handleSend = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setError("");
    const userMsg = { role: "user", text: question };
    setChat(prev => [...prev, userMsg]);
    try {
      // Strongly instruct Gemini to use emojis, markdown, and bullet points
      const learningPrompt = `You are LearnUp AI, a helpful learning assistant for students and self-learners.\n\nWhen you answer, always:\n- Use clear, simple language for beginners.\n- Use relevant emojis for each section or key point (e.g., 📚 for definitions, 🧠 for concepts, 📝 for notes, 💡 for tips, 🏗️ for architecture, etc.).\n- Format your answer with bullet points or step-by-step lists when possible.\n- Use bold for section titles.\n- Format your answer using markdown.\n\nQuestion: ${question}`;
      const answer = await getLearningPath(learningPrompt);
      setChat(prev => [...prev, { role: "ai", text: answer }]);
    } catch (err) {
      setError(err.message || "Failed to get answer.");
    } finally {
      setLoading(false);
      setQuestion("");
    }
  };

  // Optional: clear chat on logout (call this from logout logic)
  // function clearChatHistory() {
  //   setChat([]);
  //   localStorage.removeItem(CHAT_STORAGE_KEY);
  // }

  return (
    <div className="chatgpt-container chatgpt-fullscreen">
      <div className="chatgpt-header">
        <span className="gradient-text">Ask LearnUp AI</span>
      </div>
      <div className="chatgpt-history">
        {chat.map((msg, idx) => (
          <div key={idx} className={`chatgpt-msg ${msg.role}`}>
            <div className="chatgpt-bubble">
              {msg.role === "ai" ? <ReactMarkdown>{msg.text}</ReactMarkdown> : msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="chatgpt-msg ai">
            <div className="chatgpt-bubble">AI is typing...</div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
      {error && <div className="chatgpt-error">{error}</div>}
      <div className="chatgpt-input-row">
        <input
          type="text"
          placeholder="Ask your learning question..."
          value={question}
          onChange={e => setQuestion(e.target.value)}
          disabled={loading || !apiKeyValid}
          onKeyDown={e => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} disabled={loading || !apiKeyValid || !question.trim()}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;