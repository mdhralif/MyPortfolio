import AchievementCarousel from "./AchievementCarousel";

const achievements = [

  {
    title: "",
    org: "",
    year: "",
    description: "",
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
