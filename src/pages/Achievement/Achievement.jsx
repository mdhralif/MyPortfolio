import AchievementCarousel from "./AchievementCarousel";
import banglalinkLogo from "@/assets/images/banglalink.png";

const achievements = [
  {
    title: "Banglalink AppQuest",
    org: "Banglalink",
    year: "Dec. 2025",
    description:
      "Built a mobile app using TensorFlow model to guide physiotherapy exercises through phone camera tracking. Integrated Banglalink APPlink API for seamless connectivity.",
    link: "https://www.linkedin.com/posts/md-h-r-alif-7358801a6_honored-to-be-the-champion-at-banglalink-ugcPost-7406008507109478400-oq1J?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAuzBkBSSwMV6Qt1xaULMLxEbtc9MUQ9MU",
    logo: banglalinkLogo,
    color: "#CE9939",
  },
];

export default function Achievement() {
  return (
    <main className="bg-[#161825] text-white py-20 px-6 min-h-screen">
      <section className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-8">
          My <span style={{ color: "#2DD4BF" }}>Achievements</span>
        </h2>

        <div className="flex justify-center">
          <AchievementCarousel items={achievements} />
        </div>
      </section>
    </main>
  );
}
