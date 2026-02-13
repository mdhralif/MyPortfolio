import ProfileImage from "@/assets/images/Alif_.png";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";

export default function About() {
  return (
    <main className="bg-[#1C1F2E] text-white min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">MD H R ALIF</h1>
            <p className="text-lg text-gray-300 mb-4">
...
            </p>

            <div className="flex gap-3 mt-4">
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden bg-[#161825] shadow-lg">
              <img src={ProfileImage} alt="Profile" className="w-full h-full object-cover" />
            </div>
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
