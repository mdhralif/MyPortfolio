import { useRef, useState, useEffect } from "react";

// Images (same as desktop component)
import soulaceImg from "@/assets/images/soulace.png";
import nexmeetImg from "@/assets/images/nexmeet.png";
import blingoImg from "@/assets/images/blingo.png";
import nexbookImg from "@/assets/images/nexbook.png";
import nextalkImg from "@/assets/images/nextalk.png";
import iutWebImg from "@/assets/images/iut_web.png";
import pixelforgeImg from "@/assets/images/pixelforge.png";
import fluppyImg from "@/assets/images/fluppy.png";

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
  {
    title: "SoulAce",
    description:
      "Built a mental health platform offering AI-powered journalism, personalized well being tools, real-time mental health assessment and personalized recommendations.",
    src: soulaceImg,
    githubLink: "https://github.com/mdhralif/Blingo",
    liveLink: "https://soulace.onrender.com/",
  },

  {
    title: "IUT website Design",
    description:
      "A prototype of the Islamic University of Technology (IUT) website using basic HTML, CSS, and JavaScript",
    src: iutWebImg,
    githubLink: "https://github.com/mdhralif",
    liveLink:
      "https://drive.google.com/file/d/1AD-3NzOo-DUug4-E801I4hanOdGLkNSd/view?usp=sharing",
  },
  {
    title: "NexTalk",
    description:
      "Nextalk is a real-time conversation web app designed to facilitate instant messaging and seamless communication between users.",
    src: nextalkImg,
    githubLink: "https://github.com/mdhralif/Realtime_Chat_Application",
    liveLink:
      "https://drive.google.com/file/d/1GaoliAKVd3J9IDk97kINaRAaMSNF5kUx/view?usp=sharing",
  },
  {
    title: "PixelForge",
    description:
      "Pixelforge is a Minecraft-inspired prototype that simulates a block-based world with crafting and building mechanics,focused on creating a detailed map of the Islamic University of Technology (IUT).",
    src: pixelforgeImg,
    githubLink: "https://github.com/mdhralif",
    liveLink:
      "https://drive.google.com/file/d/1SKGoVzAZgH5KBLp6EEodw4J9MyL5iFRx/view?usp=sharing",
  },
  {
    title: "Flappy Bird",
    description:
      "A clone of the classic Flappy Bird game, built using Unity & scripting with C#, featuring responsive controls and dynamic gameplay.",
    src: fluppyImg,
    githubLink: "https://github.com/mdhralif/Fluppy_Bird",
    liveLink:
      "https://drive.google.com/file/d/1UAgQtEz32a5xWLXzvf5yd3ghycyVUYvg/view?usp=sharing",
  },
];

export default function FeaturedProjectsMobile() {
  const scrollerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let raf = null;
    const gap = 16; // corresponds to `gap-4`

    const updateIndex = () => {
      const scrollLeft = scroller.scrollLeft;
      const first = scroller.children[0];
      if (!first) return;
      const itemWidth = first.offsetWidth + gap;
      const idx = Math.round(scrollLeft / itemWidth);
      setCurrentIndex(Math.min(Math.max(0, idx), featuredProjects.length - 1));
    };

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateIndex);
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    // initial
    updateIndex();

    // on resize, recompute
    window.addEventListener("resize", updateIndex);

    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateIndex);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="md:hidden relative text-white w-full bg-[#161925] pb-12 pt-20 min-h-[72vh]">
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
      <div ref={scrollerRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory touch-auto pb-6">
          {featuredProjects.map((p, i) => (
            <article
              key={`mobile_fp_${i}`}
              className="snap-start min-w-[82%] bg-zinc-900 rounded-none overflow-hidden shadow-lg"
            >
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={p.src}
                  alt={p.title}
                  className="w-full h-full object-cover transform scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h4 className="text-lg font-semibold text-white">{p.title}</h4>
                <p className="text-sm text-gray-300 mt-2 line-clamp-3 text-justify">{p.description}</p>

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

        {/* Project counter (bottom-right) */}
        <div className="absolute right-4 bottom-4 bg-black/60 text-white/90 px-3 py-1 text-xs rounded-none">
          {currentIndex + 1}/{featuredProjects.length}
        </div>

      </div>
    </section>
  );
}
