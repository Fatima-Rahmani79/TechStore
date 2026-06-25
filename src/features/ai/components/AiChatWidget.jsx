import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { getAiResponse } from "./aiApi";

const SUGGESTIONS = [
  "Best laptop under $500?",
  "Do you have gaming monitors?",
  "Recommend noise-cancelling headphones",
  "What's your best seller?",
];

export default function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! 👋 I'm your TechStore assistant. Ask me anything about our products — budget, specs, or recommendations!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 150);
  }, [isOpen]);

  async function sendMessage(text) {
    const userText = text || input.trim();
    if (!userText || loading) return;

    const userMsg = { role: "user", content: userText };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const reply = await getAiResponse([...messages, userMsg]);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  const showSuggestions = messages.length === 1;

  return (
    <>
      {/* ── Floating Button ───────────────────────────────────────────── */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? "Close assistant" : "Open assistant"}
        className="fixed bottom-6 right-6 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-neutral-900 text-white shadow-lg transition hover:scale-105 hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
        style={{ width: "52px", height: "52px" }}
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      {/* ── Chat Panel ────────────────────────────────────────────────── */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 flex w-[340px] flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] shadow-xl"
          style={{ height: "480px" }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)]">
              <Sparkles size={15} color="var(--accent-text)" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                TechStore Assistant
              </p>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                <p className="text-xs text-[var(--text-secondary)]">Online</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4 scrollbar-hidden">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "rounded-br-sm bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                      : "rounded-bl-sm bg-[var(--bg-subtle)] text-[var(--text-primary)]"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Loading dots */}
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-[var(--bg-subtle)] px-4 py-3">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-[var(--text-muted)]"
                      style={{
                        animation: `bounce 0.9s ${i * 0.2}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-[var(--border)] px-3 py-3">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              disabled={loading}
              placeholder="Ask about products..."
              className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)] px-3 py-2 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] disabled:opacity-50"
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim() || loading}
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-900 text-white transition hover:bg-neutral-700 disabled:opacity-30 dark:bg-white dark:text-neutral-900"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
