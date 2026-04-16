import { useState, useRef } from "react";
import chatlogo from "@/assets/images/chatlogo.png";
import { FaChevronDown } from "react-icons/fa";

// const SYSTEM_PROMPT = `You are a helpful assistant that knows everything about Md Hasibur Rahman Alif (MD H R ALIF):
// - B.Sc. in Software Engineering (Islamic University of Technology - IUT)
// - Experience: Software Engineer Intern at KAZ Software Ltd. (Sep 2025 - Jan 2026)
// - Skills: React, Node.js, Python, Web Development, AI/ML, Databases, Algorithms
// - Projects: production-level web apps, APIs, UI design, bug fixing
// Answer user questions concisely and, when needed, refer to the profile above.`;

export default function AIChat() {
  // Using DotLottieReact component from @lottiefiles/dotlottie-react
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello ! I'm Nexa, your personal guide to Alif's portfolio. Feel free to ask me anything about his background, coding skills, or the projects he has built!",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  const scrollToEnd = () => {
    if (endRef.current) endRef.current.scrollIntoView({ behavior: "smooth" });
  };

  async function sendMessage(e, text) {
    e && e.preventDefault();
    const msgText = text || input;
    if (!msgText.trim()) return;

    const userMsg = { role: "user", content: msgText.trim() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      // AI Chatbot is disabled for now.
      // We simulate a typing delay, then return a static message.
      setTimeout(() => {
        const botMsg = { 
          role: "assistant", 
          content: "I am currently under development! Please check back later or contact me directly via the contact form." 
        };
        setMessages((m) => [...m, botMsg]);
        setTimeout(scrollToEnd, 100);
        setLoading(false);
      }, 1000);
    } catch (err) {
      const errMsg = { role: "assistant", content: `Error: ${err.message}` };
      setMessages((m) => [...m, errMsg]);
      setLoading(false);
    }
  }

  return (
    <>
      {!open && (
        <div className="fixed bottom-8 right-8 z-30">
          <button
            onClick={() => setOpen(true)}
            aria-label="Ask AI"
            title="Ask AI"
            className="flex items-center justify-center w-28 h-28 bg-transparent transition-transform hover:scale-105"
          >
            {/* We use mask-image to fill the actual shape of the PNG with a sweeping animated linear gradient */}
            <div 
              className="w-full h-full bg-gradient-to-r from-[#2DD4BF] via-purple-500 to-[#2DD4BF] bg-[length:200%_100%] animate-bg-shine"
              style={{
                WebkitMaskImage: `url(${chatlogo})`,
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskImage: `url(${chatlogo})`,
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center'
              }}
            ></div>
          </button>
        </div>
      )}

      {open && (
        <div className="fixed z-30 bottom-4 md:bottom-8 right-4 md:right-8 flex items-end justify-end p-0">
          <div className="w-full max-w-sm md:max-w-md bg-[#0f1223] rounded-none shadow-2xl overflow-hidden border border-gray-800">
            <div className="px-4 py-3 flex items-start justify-between border-b border-gray-800 pb-4">
              <div className="flex flex-col">
                <div className="font-bold text-xl text-white">Ask Nexa</div>
                <div className="text-sm text-[#2DD4BF] mt-1">The AI Assistant at Alif&apos;s Portfolio</div>
              </div>
              <button 
                onClick={() => setOpen(false)} 
                className="text-gray-400 hover:text-white mt-1 p-1 transition-colors"
                aria-label="Minimize Chat"
                title="Minimize"
              >
                <FaChevronDown className="w-5 h-5" />
              </button>
            </div>

            <div 
              className="h-72 md:h-80 overflow-y-auto p-4 text-sm text-gray-100 custom-scrollbar" 
              style={{ background: "linear-gradient(180deg,#0f1223, #0b0c12)" }}
              data-lenis-prevent="true"
            >
              {messages.map((m, i) => (
                <div key={i} className={`mb-3 ${m.role === "user" ? "text-right" : "text-left"}`}>
                  <div className={`inline-block px-3 py-2 rounded-none ${m.role === "user" ? "bg-white text-black" : "bg-gray-800 text-gray-200"}`}>
                    {m.content}
                  </div>
                </div>
              ))}
              
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {["What are your skills?", "Tell me about your projects", "What is your educational background?"].map((q, idx) => (
                    <button 
                      key={idx} 
                      onClick={(e) => sendMessage(e, q)}
                      className="text-xs bg-[#161825] border border-gray-700 hover:border-[#2DD4BF] text-gray-300 hover:text-[#2DD4BF] px-3 py-1.5 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              <div ref={endRef} />
            </div>

            <form onSubmit={sendMessage} className="p-3 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about me..."
                className="flex-1 px-3 py-2 rounded-none bg-[#111218] text-white focus:outline-none"
              />
              <button disabled={loading} className="px-4 py-2 bg-white text-black hover:bg-[#2DD4BF] transition-colors rounded-none font-bold">
                {loading ? "..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
