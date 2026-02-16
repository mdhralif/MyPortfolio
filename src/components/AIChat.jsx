import { useState, useRef } from "react";

const SYSTEM_PROMPT = `You are a helpful assistant that knows everything about Md Hasibur Rahman Alif (MD H R ALIF):
- B.Sc. in Software Engineering (Islamic University of Technology - IUT)
- Experience: Software Engineer Intern at KAZ Software Ltd. (Sep 2025 - Jan 2026)
- Skills: React, Node.js, Python, Web Development, AI/ML, Databases, Algorithms
- Projects: production-level web apps, APIs, UI design, bug fixing
Answer user questions concisely and, when needed, refer to the profile above.`;

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  const scrollToEnd = () => {
    if (endRef.current) endRef.current.scrollIntoView({ behavior: "smooth" });
  };

  async function sendMessage(e) {
    e && e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input.trim() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const payload = {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...updated,
        ],
        max_tokens: 600,
      };

      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "OpenAI request failed");
      }

      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || "Sorry, no response.";
      const botMsg = { role: "assistant", content: reply };
      setMessages((m) => [...m, botMsg]);
      setTimeout(scrollToEnd, 100);
    } catch (err) {
      const errMsg = { role: "assistant", content: `Error: ${err.message}` };
      setMessages((m) => [...m, errMsg]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen((o) => !o)}
          className="bg-[#2DD4BF] text-black px-4 py-2 rounded-full font-semibold shadow-lg"
        >
          {open ? "Close AI" : "Ask AI"}
        </button>
      </div>

      {open && (
        <div className="fixed z-40 bottom-20 right-6 flex items-end justify-end p-0">
          <div className="w-full max-w-sm md:max-w-md bg-[#0f1223] rounded-none shadow-2xl overflow-hidden">
            <div className="px-4 py-3 flex items-center justify-between">
              <div className="font-bold text-white">AI Assistant</div>
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white">Close</button>
            </div>

            <div className="h-72 md:h-80 overflow-auto p-4 text-sm text-gray-100" style={{ background: "linear-gradient(180deg,#0f1223, #0b0c12)" }}>
              {messages.length === 0 && (
                <div className="text-gray-400">Ask me anything about Myself (eg. education, skills, projects, experience) .</div>
              )}

              {messages.map((m, i) => (
                <div key={i} className={`mb-3 ${m.role === "user" ? "text-right" : "text-left"}`}>
                  <div className={`inline-block px-3 py-2 rounded ${m.role === "user" ? "bg-white text-black" : "bg-gray-800 text-gray-200"}`}>
                    {m.content}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <form onSubmit={sendMessage} className="p-3 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a question..."
                className="flex-1 px-3 py-2 rounded-none bg-[#111218] text-white focus:outline-none"
              />
              <button disabled={loading} className="px-4 py-2 bg-[#2DD4BF] text-black rounded-none">{loading ? "..." : "Send"}</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
