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
}
