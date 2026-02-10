import AchievementCarousel from "./AchievementCarousel";

const achievements = [

  {
    title: "Hackathon Winner",
    org: "Local Hack Day",
    year: "2023",
    description: "Built an accessibility-focused web tool and won first place.",
    color: "#8f89ff",
  },
];

export default function Achievement() {
  return (
    <main className="bg-[#1C1F2E] text-white py-20 px-6">
      <section className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-8">
          <span style={{ color: "#2DD4BF" }}>Achievement</span>
        </h2>

        <div className="flex justify-center">
          <AchievementCarousel items={achievements} />
        </div>
      </section>
    </main>
  );
}
