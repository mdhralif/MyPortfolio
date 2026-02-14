import ProfileImage from "@/assets/images/Alif_.png";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";

export default function About() {
  return (
    <main className="bg-[#161825] text-white min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 items-center">
          {/* Left: image card with offset background and social icons */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="absolute left-0 top-6 w-64 h-80 bg-[#211640] opacity-95 transform -translate-x-6 lg:-translate-x-12" />

            <div className="relative z-10 bg-transparent p-6">
              <div className="w-64 h-80 bg-[#0f1223] shadow-2xl overflow-hidden">
                <img src={ProfileImage} alt="Profile" className="w-full h-full object-cover" />
              </div>

              <div className="mt-6 flex gap-4 text-gray-300">
                {/* Twitter */}
                <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-transparent hover:bg-white/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 7v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5A4.5 4.5 0 0 0 23 3z"/></svg>
                </a>
                {/* Facebook */}
                <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-transparent hover:bg-white/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                {/* Discord */}
                <a href="#" aria-label="Discord" className="p-2 rounded-full bg-transparent hover:bg-white/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/><path d="M21 6.5s-1.5 2.5-5.5 3.5c0 0-1-1-3-1s-3 1-3 1C4.5 9 3 6.5 3 6.5S1 14 6 17.5c0 0 1.5-1 3-1.5 0 0 .5 1 2.5 1s2.5-1 2.5-1c1.5.5 3 1.5 3 1.5 5-3.5 3-11 3-11z"/></svg>
                </a>
                {/* YouTube */}
                <a href="#" aria-label="YouTube" className="p-2 rounded-full bg-transparent hover:bg-white/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><path d="M9.75 15.02V8.98l6.5 3.02-6.5 3.02z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: large heading and paragraphs */}
          <div className="py-6">
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              Myself, MD H R ALIF
            </h1>

            <p className="text-gray-300 max-w-2xl mb-6 text-justify">
              Need a web developer who actually enjoys building cool stuff? I’m Md Hasibur Rahman Alif, and I specialize in creating fast, modern, and user-friendly web applications. From full-stack platforms to AI-powered tools, I love turning ideas into clean, functional products that people enjoy using.
            </p>
            <p>
            If you have a vision, I’m ready to help you bring it to life.
            </p>

            
          </div>
        </div>
      </section>

      {/* Education and Experience sections */}
      <section>
        <Education />
      </section>

      <section>
        <Experience />
      </section>
    </main>
  );
}
