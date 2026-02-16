import AchievementCarousel from "./AchievementCarousel";

const achievements = [

  {
    title: "Banglalink AppQuest",
    org: "Banglalink",
    year: "December 2025",
    description: "Built a mobile app using TensorFlow model to guide physiotherapy exercises through phone camera tracking. Integrated Banglalink APPlink API for seamless connectivity.",
    color: "#CE9939",
  },
];

export default function Achievement() {
  return (
    <main className="bg-[#161825] text-white py-20 px-6">
      <section className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-8">
          <span style={{ color: "#2DD4BF" }}>Winning</span> moments
        </h2>

        <div className="flex justify-center">
          <AchievementCarousel items={achievements} />
        </div>
      </section>
    </main>
  );
}
