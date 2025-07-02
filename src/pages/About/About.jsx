import HeroImg from "@/assets/images/profile.jpg";
import SparklesText from "@/components/ui/sparkles-text";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h1 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            <SparklesText text="Here I'm" showSparkles={false} />  
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <div className="pt-6">
                <p className="text-gray-300 leading-relaxed">
                  Passionate software developer with expertise in modern web technologies, 
                  mobile development, and system design. I love creating innovative solutions 
                  that make a real impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
