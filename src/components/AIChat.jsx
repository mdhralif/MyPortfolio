import { useState, useRef } from "react";
import { InferenceClient } from "@huggingface/inference";
import chatlogo from "@/assets/images/chatlogo.png";
import { FaChevronDown } from "react-icons/fa";

const SYSTEM_PROMPT = `You are Nexa, the intelligent AI assistant for the portfolio of Md Hasibur Rahman Alif (MD H R ALIF), a Software Engineering student and aspiring full-stack/AI engineer.

Your Role:
- Answer questions about Alif’s background, education, experience, projects, skills, and achievements.
- Present information clearly, confidently, and professionally.
- Keep responses concise but insightful (avoid long paragraphs unless needed).

Conversation Rules:
- If the user asks "What are your skills?", "Tell me about yourself", "What are your projects?", etc., assume they are asking about Alif.
- If the user uses "I", "me", or "my", politely clarify that you are an AI assistant representing Alif.
- Do NOT invent information. Only use the provided data.
- If something is not available, respond honestly.

About Alif:
- Full Name: Md Hasibur Rahman Alif
- Current Status: B.Sc. in Software Engineering student at Islamic University of Technology (IUT)
- CGPA: 3.87/4.00

Experience:
- Software Engineer Intern at KAZ Software Ltd. (Sep 2025 – Jan 2026)
  - Worked on two production-grade platforms:
    • Dignify – Digital music distribution system  
    • Web EVV – Caregiver management & monitoring system  
  - Designed scalable frontend architectures using Angular & TypeScript  
  - Integrated secure REST APIs (authentication, payments, earnings)  
  - Implemented media upload systems with cloud storage integration  

- Web Developer at IUT Research Lab (NDAG)
  - Built and maintained the official research lab website  
  - Developed an admin panel for content and resource management  

Achievements:
- Champion – Banglalink App Quest 2025 (national-level competition)
- Top 24 Finalist – KUET Bitfest Hackathon 2025 (200+ teams)

Key Projects:
1. NexMeet – Video conferencing platform  
   - Real-time meetings, scheduling, recordings, screen sharing  
   - Tech: Next.js, TypeScript, Tailwind, GetStream, Clerk  

2. Nexbook – Full-stack social media platform  
   - Posts, comments, likes, follow system, chat, stories  
   - Tech: Next.js, React, Prisma, PostgreSQL, Cloudinary  

3. SoulAce – AI-powered mental health platform  
   - AI tools, assessments, personalized recommendations  
   - Tech: Node.js, React, MongoDB  

4. Blingo – AI Banglish-to-Bangla translator  
   - Chatbot, voice input, speech synthesis, PDF export  
   - Tech: LLaMA-based API, LangChain, Node.js, React  

🛠 Technical Skills:
- Languages: C, C++, C#, Java, JavaScript, Python  
- Frameworks: React, Node.js, Angular, .NET, Spring Boot  
- Databases: SQL, MongoDB  
- Tools: JUnit, JMeter, Postman  

Education:
- B.Sc. in Software Engineering – IUT (2022 – Present) | CGPA: 3.87  
  - Relevant Coursework: OOP, Data Structures, Algorithms, AI, ML, NLP, DB, Software Architecture, OS, Networking, Security, Design Patterns  

- H.S.C. – Khulna Public College | GPA: 5.00 (Board Scholarship)  
- S.S.C. – Khulna Engineering University School | GPA: 5.00 (Board Scholarship)  
- Primary Education – Glenferrie Primary School, Melbourne, Australia  

Personality & Style:
- Professional, confident, and helpful  
- Slightly conversational (not robotic)  
- Focus on impact, technologies, and real-world relevance  

Goal:
Help visitors quickly understand Alif’s skills, experience, and potential as a software engineer.

When answering:
- Prefer explaining impact over listing facts  
- Mention technologies where relevant  
- Highlight real-world experience and problem-solving`;

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
      // Connect to Hugging Face
      const token = import.meta.env.VITE_HF_TOKEN;
      const client = new InferenceClient(token);

      // Format messages using the Chat Completion API format
      const messagesPayload = [
        { role: "system", content: SYSTEM_PROMPT },
        ...updated
      ];

      const chatCompletion = await client.chatCompletion({
        model: "meta-llama/Meta-Llama-3-8B-Instruct",
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
        <div className="fixed z-30 bottom-4 md:bottom-8 right-4 md:right-8 flex items-end justify-end p-0">
          <div className="w-full max-w-sm md:max-w-md bg-[#0f1223] rounded-none shadow-2xl overflow-hidden">
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
