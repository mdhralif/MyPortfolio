import "./achievement.css";
import AchievementCard from "./AchievementCard";
import banglalinkLogo from "@/assets/images/banglalink.png";
import gplogo from "@/assets/images/gplogo.png";
import anthropicLogo from "@/assets/images/Anthropic.png";
import kuetLogo from "@/assets/images/kuet.png";


const achievements = [
  {
    certificateName: "Banglalink AppQuest Hackathon",
    placement: "Award of Champion",
    description: "Mobile physiotherapy app with real-time posture feedback.",
    location: "Banglalink Headquarters, Dhaka",
    link: "https://www.linkedin.com/posts/md-h-r-alif-7358801a6_honored-to-be-the-champion-at-banglalink-ugcPost-7406008507109478400-oq1J?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAuzBkBSSwMV6Qt1xaULMLxEbtc9MUQ9MU",
    color: "#fff",
    logo: banglalinkLogo,
  },
  {
    certificateName: "Grameenphone TECH TRENDS",
    placement: "Certificate of Excellence",
    description: "Completed TECH TRENDS program.",
    location: "Dhaka, Bangladesh",
    link: "https://media.licdn.com/dms/image/v2/D562DAQGqql-slf8kxg/profile-treasury-image-shrink_8192_8192/profile-treasury-image-shrink_8192_8192/0/1719564850910?e=1776866400&v=beta&t=--Ab_MPIEpXH8C6bJy1FYsd_WYnBQPGZ8GjKvlVNFmQ",
    color: "#fff",
    logo: gplogo,
  },
  {
  "certificateName": "AI Fluency- Framework & Foundations",
  "placement": "Certificate of Completion",
  "description": "AI frameworks & foundations course.",
  "location": "Remote",
  "link": "https://media.licdn.com/dms/image/v2/D562DAQEDsP_pvRvUzg/profile-treasury-image-shrink_800_800/B56ZoQjz55JoAY-/0/1761214414938?e=1776866400&v=beta&t=KSBkAopo0IXm67qsM_ZfnsDfu8SXwwbgoey-0zJZpgc",
  "color": "#fff",
  "logo": anthropicLogo,
 },
 {
  "certificateName": "KUET Bitfest Hackathon, 2024",
  "placement": "Recognition of Top 24 Finalist",
  "description": "AI-powered Bangla writing platform with translation and suggestions.",
  "location": "KUET, Khulna",
  "link": null,
  "color": "#fff",
  "logo": kuetLogo
}

];

export default function Achievement() {
  return (
    <main className="bg-[#161825] text-white pt-20 md:pt-16 min-h-screen">
      <section className="max-w-6xl mx-auto px-4 md:px-8 pb-11">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-14 md:mb-16">
          <span style={{ color: "#2DD4BF" }}>Key </span>Achievements
        </h2>

        <div className="flex justify-center">
          <div className="w-full max-w-7xl achievement-section">
            <div className={`achievement-grid ${achievements.length === 1 ? 'single' : ''}`}>
              {achievements.map((a, idx) => (
                <AchievementCard
                  key={idx}
                  certificateName={a.certificateName}
                  placement={a.placement}
                  description={a.description}
                  logo={a.logo}
                  location={a.location}
                  color={a.color}
                  link={a.link}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Copy the template comment above and change values only. */}
      </section>
    </main>
  );
}
