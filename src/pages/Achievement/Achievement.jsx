import AchievementCarousel from "./AchievementCarousel";
import banglalinkLogo from "@/assets/images/banglalink.png";
import gplogo from "@/assets/images/gplogo.png";
import anthropicLogo from "@/assets/images/Anthropic.png";
import kuetLogo from "@/assets/images/kuet.png";


const achievements = [
  {
    certificateName: "Banglalink AppQuest Hackathon",
    placement: "Award of Distinction [Champion]",
    description: "Built a mobile app that uses camera tracking to guide physiotherapy exercises with real-time posture feedback.",
    link: "https://www.linkedin.com/posts/md-h-r-alif-7358801a6_honored-to-be-the-champion-at-banglalink-ugcPost-7406008507109478400-oq1J?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAuzBkBSSwMV6Qt1xaULMLxEbtc9MUQ9MU",
    color: "#fff",
    logo: banglalinkLogo,
  },
  {
    certificateName: "Grameenphone TECH TRENDS",
    placement: "Certificate of Excellence",
    description: "Recognized for successfully completing the TECH TRENDS program, reflecting understanding of emerging technologies and industry innovations.",
    link: "https://media.licdn.com/dms/image/v2/D562DAQGqql-slf8kxg/profile-treasury-image-shrink_8192_8192/profile-treasury-image-shrink_8192_8192/0/1719564850910?e=1776866400&v=beta&t=--Ab_MPIEpXH8C6bJy1FYsd_WYnBQPGZ8GjKvlVNFmQ",
    color: "#fff",
    logo: gplogo,
  },
  {
  "certificateName": "AI Fluency: Framework & Foundations",
  "placement": "Certificate of Completion",
  "description": "Completed a structured program covering AI frameworks, foundational concepts, and best practices for AI fluency.",
  "link": "https://media.licdn.com/dms/image/v2/D562DAQEDsP_pvRvUzg/profile-treasury-image-shrink_800_800/B56ZoQjz55JoAY-/0/1761214414938?e=1776866400&v=beta&t=KSBkAopo0IXm67qsM_ZfnsDfu8SXwwbgoey-0zJZpgc",
  "color": "#fff",
  "logo": anthropicLogo,
 },
 {
  "certificateName": "KUET Bitfest Hackathon, 2024",
  "placement": "Recognition of Top 24 Finalist",
  "description": " Developed an AI-powered Bangla writing platform with translation, AI suggestions, and chatbot support.",
  "link": null,
  "color": "#fff",
  "logo": kuetLogo
}

];

export default function Achievement() {
  return (
    <main className="bg-[#161825] text-white pt-20 pb-20 md:pt-16 md:pb-20 px-6 min-h-screen">
      <section className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-14 md:mb-16">
          <span style={{ color: "#2DD4BF" }}>Key </span>Achievements
        </h2>

        <div className="flex justify-center">
          <AchievementCarousel items={achievements} />
        </div>

        {/* Copy the template comment above and change values only. */}
      </section>
    </main>
  );
}
