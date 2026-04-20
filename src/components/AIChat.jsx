import { useState, useRef, useEffect } from "react";
import { InferenceClient } from "@huggingface/inference";
import chatlogo from "@/assets/images/chatlogo.png";
import { FaChevronDown } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import SYSTEM_PROMPT from "../../system_prompt.txt?raw";

export default function AIChat() {
  // Using DotLottieReact component from @lottiefiles/dotlottie-react
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello ! I'm Nexa, your personal guide to Alif's portfolio. You can ask me anything about his background, coding skills, or the projects he has built!",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  const scrollToEnd = () => {
    if (endRef.current) endRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToEnd();
  }, [messages, loading]);

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
      // Connect to Hugging Face
      const token = import.meta.env.VITE_HF_TOKEN;
      const client = new InferenceClient(token);

      // Format messages using the Chat Completion API format
      const messagesPayload = [
        { role: "system", content: SYSTEM_PROMPT },
        ...updated
      ];

      const chatCompletion = await client.chatCompletion({
        model: "meta-llama/Meta-Llama-3-70B-Instruct",
        messages: messagesPayload,
        max_tokens: 500,
      });

      const botResponse = chatCompletion.choices[0].message.content || "Sorry, I didn't understand that.";

      const botMsg = { 
        role: "assistant", 
        content: botResponse
      };
      setMessages((m) => [...m, botMsg]);
      setTimeout(scrollToEnd, 100);
      setLoading(false);
    } catch (err) {
      const errMsg = { role: "assistant", content: `Error: ${err.message}` };
      setMessages((m) => [...m, errMsg]);
      setLoading(false);
    }
  }

  return (
    <>
      {!open && (
        <div className="fixed bottom-1 right-1 z-30">
          <button
            onClick={() => setOpen(true)}
            aria-label="Ask Nexa"
            title="Ask Nexa"
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
        <>
          {/* Frosted Background Overlay */}
          <div 
            className="fixed inset-0 z-20 bg-[#161825]/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setOpen(false)}
            aria-hidden="true" 
          />
          
          <div className="fixed z-30 bottom-4 md:bottom-8 right-4 md:right-8 flex items-end justify-end p-0">
            <div className="w-full max-w-[320px] md:max-w-[380px] bg-[#0f1223] rounded-none shadow-2xl overflow-hidden">
              <div className="px-4 py-3 flex items-start justify-between border-b border-gray-800 pb-4">
              <div className="flex flex-col">
                <div className="font-bold text-2xl text-white">Nexa</div>
                <div className="text-[11px] font-sans uppercase tracking-widest font-semibold text-[#2DD4BF]/80 mt-1">AI Assistant for Alif&apos;s Portfolio</div>
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
                  <div className={`inline-block px-3 py-2 rounded-none text-justify whitespace-pre-wrap ${m.role === "user" ? "bg-white text-black" : "bg-gray-800 text-gray-200"}`}>
                    {m.content}
                  </div>
                </div>
              ))}
              
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mt-4 w-full">
                  {["Tell me about your projects "," Your experience are ?","Your CGPA?","What are your skills?","Education?"].map((q, idx) => (
                    <button 
                      key={idx} 
                      onClick={(e) => sendMessage(e, q)}
                      className="flex-1 text-xs whitespace-nowrap bg-[#161825] border border-gray-700 hover:border-[#2DD4BF] text-gray-300 hover:text-[#2DD4BF] px-3 py-1.5 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {loading && (
                <div className="mb-3 text-left">
                  <div className="inline-block px-4 py-3.5 rounded-none bg-gray-800">
                    <div className="flex gap-1.5 items-center">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={endRef} />
            </div>

            <form onSubmit={sendMessage} className="p-3 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask what you want to know..."
                className="flex-1 px-3 py-2 rounded-none bg-[#111218] text-white focus:outline-none"
              />
              <button disabled={loading} className="px-4 py-2 bg-[#2DD4BF] text-[#0f1223] hover:bg-white hover:text-black transition-colors rounded-none font-bold flex items-center justify-center shadow-lg" aria-label="Send Message">
                <ArrowUp className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
        </>
      )}
    </>
  );
}
