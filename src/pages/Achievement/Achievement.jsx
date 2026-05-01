import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./achievement.css";
import AchievementCard from "./AchievementCard";
import banglalinkLogo from "@/assets/images/banglalink.png";
import gplogo from "@/assets/images/gplogo.png";
import Acllogo from "@/assets/images/ACL.png";
import kuetLogo from "@/assets/images/kuet.png";
import anthropicLogo from "@/assets/images/Anthropic.png";


const achievements = [
  {
    certificateName: "AppQuest Hackathon, 2025",
    placement: "Champion",
    description: "AI & API Hackathon organized by Banglalink",
    link: "https://www.linkedin.com/posts/md-h-r-alif-7358801a6_honored-to-be-the-champion-at-banglalink-ugcPost-7406008507109478400-oq1J?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAuzBkBSSwMV6Qt1xaULMLxEbtc9MUQ9MU",
    color: "#fff",
    logo: banglalinkLogo,
  },
  {
    certificateName: "ACL BioNLP Workshop, 2026",
    placement: "2nd Runner up",
    description: "PsyDefDetect shared task organized by ACL",
    location: "ACL BioNLP Workshop 2026",
    link: "https://www.facebook.com/share/p/1BQwWNhUzS/",
    color: "#fff",
    logo: Acllogo,
  },
  {
    certificateName: "GP TECH TRENDS",
    placement: "Certificate of Excellence",
    description: "TECH TRENDS program organized by Grameenphone",
    location: "Dhaka, Bangladesh",
    link: "https://www.linkedin.com/in/md-h-r-alif-7358801a6/overlay/Honor/1577939993/treasury/?profileId=ACoAADAuzBkBSSwMV6Qt1xaULMLxEbtc9MUQ9MU",
    logo: gplogo,
  },
 {
  "certificateName": "KUET Bitfest Datathon, 2024",
  "placement": "Recognition of Top 10 Finalists",
  "description": "Data Hackathon organized by KUET",
  "location": "KUET, Khulna",
  "link": "https://www.facebook.com/photo.php?fbid=1127385082057875&set=pb.100043591827218.-2207520000&type=3",
  "color": "#fff",
  "logo": kuetLogo
},
{
  "certificateName": "AI Frameworks Course",
  "placement": "Certificate of Completion",
  "description": "AI frameworks course by Anthropic.",
  "location": "Remote",
  "link": "https://www.linkedin.com/in/md-h-r-alif-7358801a6/overlay/Honor/277892522/treasury/?profileId=ACoAADAuzBkBSSwMV6Qt1xaULMLxEbtc9MUQ9MU",
  "color": "#fff",
  "logo": anthropicLogo,
 },



];

export default function Achievement() {
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 640);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="bg-[#161825] text-white pt-20 md:pt-16 min-h-screen">
      <section className="max-w-6xl mx-auto px-4 md:px-8 pb-11">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-14 md:mb-16">
          <span style={{ color: "#2DD4BF" }}>Key </span>Highlights
        </h2>

        <div className="flex justify-center">
          <div className="w-full max-w-7xl achievement-section">
            <div className={`achievement-grid ${achievements.length === 1 ? 'single' : ''}`}>
              {(() => {
                const items = [...achievements];
                // Only add placeholder when not collapsing on mobile
                if (items.length % 2 === 1 && !(isMobile && !mobileExpanded)) items.push(null); // add placeholder to keep grid balanced
                const displayItems = isMobile && !mobileExpanded ? items.slice(0, 3) : items;
                return displayItems.map((a, idx) =>
                  a ? (
                    <AchievementCard
                      key={idx}
                      certificateName={a.certificateName}
                      placement={a.placement}
                      description={a.description}
                      logo={a.logo}
                      color={a.color}
                      link={a.link}
                    />
                    ) : (
                    <div className="achievement-card achievement-placeholder" key={`placeholder-${idx}`} aria-hidden="true" />
                  )
                );
              })()}
            </div>

            {isMobile && achievements.length > 3 ? (
              <div className="mt-6 flex justify-center md:hidden">
                <button
                  type="button"
                  onClick={() => setMobileExpanded(v => !v)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-transparent border border-white/20 text-white font-medium shadow-sm hover:bg-white/5 hover:border-white/30 transition"
                >
                  {mobileExpanded ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
                  <span>{mobileExpanded ? "Show less" : "Show more"}</span>
                </button>
              </div>
            ) : null}
          </div>
        </div>

        {/* Copy the template comment above and change values only. */}
      </section>
    </main>
  );
}
