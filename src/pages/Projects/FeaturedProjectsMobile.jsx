import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// Images (same as desktop component)
import nexbookImg from "@/assets/images/nexbook.png";
import nexmeetImg from "@/assets/images/nexmeet.png";
import blingoImg from "@/assets/images/blingo.png";

const featuredProjects = [
  {
    title: "NexMeet",
    description:
      "Designed and developed a video conferencing platform with real-time meeting features, scheduling options, and session recording",
    src: nexmeetImg,
    githubLink: "https://github.com/mdhralif/nexmeet",
    liveLink: "https://alif-nexmeet.vercel.app",
  },
  {
    title: "Nexbook",
    description:
      "A prototype of Facebook, Nexbook is a social networking platform that enables users to React, post, and follow in a virtual community",
    src: nexbookImg,
    githubLink: "https://github.com/mdhralif/Nexbook",
    liveLink: "https://alif-nexbook.vercel.app",
  },
  {
    title: "Blingo",
    description:
      "Built an AI-driven text editor that translates Banglish into proper Bangla using Groq API and LLaMA 3.3 with custom prompt engineering.",
    src: blingoImg,
    githubLink: "https://github.com/mdhralif/Blingo",
    liveLink: "https://blingo.onrender.com/",
  },
];

export default function FeaturedProjectsMobile() {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate('/projects');
    setTimeout(() => window.scrollTo(0, 0), 100);
  };
  return (
    <section className="md:hidden text-white w-full bg-[#161925] pb-0 pt-20">
      <div className="px-4">
        <h2 className="text-5xl font-black text-transparent bg-white bg-clip-text text-center leading-tight mb-6">
          <span className="block">
            <span className="inline-block bg-clip-text text-transparent" style={{ color: '#2DD4BF' }}>
              My
            </span>
            <span className="ml-1 text-white"> Projects</span>
          </span>
        </h2>
      </div>

      <div className="px-4">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory touch-pan-x pb-6">
          {featuredProjects.map((p, i) => (
            <article
              key={`mobile_fp_${i}`}
              className="snap-start min-w-[82%] bg-zinc-900 rounded-none overflow-hidden shadow-lg"
            >
              <div className="h-44 w-full overflow-hidden">
                <img src={p.src} alt={p.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-4">
                <h4 className="text-lg font-semibold text-white">{p.title}</h4>
                <p className="text-sm text-gray-300 mt-2 line-clamp-3">{p.description}</p>

                <div className="mt-4 flex items-center gap-3">
                  {p.githubLink && (
                    <a
                      href={p.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} source code`}
                      className="flex items-center text-xs font-medium text-white/90 bg-white/5 px-3 py-2 rounded-none"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      Code
                    </a>
                  )}

                  {p.liveLink && (
                    <a
                      href={p.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} live demo`}
                      className="flex items-center text-xs font-medium text-white/90 bg-white/5 px-3 py-2 rounded-none"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                      Live
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-4 flex px-0">
          <div className="px-4 w-full">
            <button
              onClick={handleViewAll}
              className="group inline-flex items-center gap-3 bg-white px-5 py-3 text-sm font-bold text-black rounded-none"
            >
              View All Projects
              <FaArrowRight className="text-base transition-all group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
