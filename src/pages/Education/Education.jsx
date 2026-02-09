
import {
  Award,
  Calendar,
  BookOpen,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import iutLogo from "../../assets/images/iutlogo.png";
import kpcLogo from "../../assets/images/kpclogo.png";

const EducationSection = () => {
  

  const educationData = [
    {
      degree: "B.Sc. in Software Engineering",
      school: "Islamic University of Technology (IUT)",
      logo: iutLogo,
      mascot: "",
      year: "August 2022-present",
      achievements: ["CGPA: 3.86"],
      skills: ["OOP","Design Pattern", "Data Structures", "Algorithms", "Web Development", "Artificial Intelligence","Machine Learning"," Database Management","Sofware Security", "Networking"," Software Testing","Server Programming","Computer Architecture"],  
      description:
        "",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "Khulna Public College",
      logo: kpcLogo, 
      mascot: "",
      year: "2019-2021",
      achievements: ["GPA: 5.00", "Government Scholarship", "National Winner - Physics Olympiad", "National Winner - ICT Olympiad"],
      skills: [],
      description:
        "",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#1C1F2E]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
          <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        > 
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-white bg-clip-text text-center">
            Educational journey
          </h2>
         </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative rounded-xl p-8 bg-gray-900`}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    {/* Logo Section */}
                    <div className="flex items-center gap-3">
                      {edu.logo ? (
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-white  border border-white/20 flex items-center justify-center p-1">
                          <img 
                            src={edu.logo} 
                            alt={`${edu.school} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20 flex items-center justify-center">
                          <span className="text-2xl">{edu.mascot}</span>
                        </div>
                      )}
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {edu.degree}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-lg font-bold"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
