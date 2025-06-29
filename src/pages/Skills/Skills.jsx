import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
  SiJunit5,
  SiIntellijidea,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandVscode, TbBrandCpp } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Layout,
      title: "Programming Languages",
      color: "text-purple-400",
      skills: [
        {
          name: "C",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#A8B9CC]" />,
        },
        {
          name: "C#",
          icon: <TbBrandCSharp className="w-4 h-4 text-[#239120]" />,
        },
        {
          name: "C++",
          icon: <TbBrandCpp className="w-4 h-4 text-[#00599C]" />,
        },
        {
          name: "JavaScript",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#F7DF1E]" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
        },
        {
          name: "Python",
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "Java",
          icon: <FaJava className="w-4 h-4 text-[#ED8B00]" />,
        },
        
        
      ],
    },
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        {
          name: "HTML5",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: "CSS3",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
        },
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-4 h-4 text-white" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "Redux",
          icon: <SiRedux className="w-4 h-4 text-[#764ABC]" />,
        },
        {
          name: "Vite",
          icon: <SiVite className="w-4 h-4 text-[#646CFF]" />,
        },
        {
          name: "Webpack",
          icon: <SiWebpack className="w-4 h-4 text-[#8DD6F9]" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
        {
          name: "REST APIs",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: "GraphQL",
          icon: <SiGraphql className="w-4 h-4 text-[#E10098]" />,
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
        },
      ],
    },
    {
      icon: Cloud,
      title: "Machine Learning",
      color: "text-orange-400",
      skills: [
        {
          name: "TensorFlow",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#FF6F00]" />,
        },
        {
          name: "PyTorch",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#EE4C2C]" />,
        },
        {
          name: "Scikit-learn",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#F7931E]" />,
        },
        {
          name: "Pandas",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#150458]" />,
        },
        {
          name: "NumPy",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#013243]" />,
        },
        {
          name: "Matplotlib",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#11557C]" />,
        },
        {
          name: "Jupyter",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#F37626]" />,
        },
      ],
    },
    {
      icon: Paintbrush,
      title: "Design & UI/UX",
      color: "text-cyan-400",
      skills: [
        {
          name: "Figma",
          icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" />,
        },
        {
          name: "Canva",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#00C4CC]" />,
        },
        {
          name: "Responsive Design",
          icon: <Layout className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "Wireframing",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#9333EA]" />,
        },
        {
          name: "Prototyping",
          icon: <MdAnimation className="w-4 h-4 text-[#F59E0B]" />,
        },
      ],
    },
    
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        {
          name: "IntelliJ IDEA",
          icon: <SiIntellijidea className="w-4 h-4 text-[#007ACC]" />,
        },
        {
          name: "Git",
          icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" />,
        },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
        { name: "JUnit5", icon: <SiJunit5 className="w-4 h-4 text-[#25A162]" /> },
        {
          name: "Linux",
          icon: <FaLinux className="w-4 h-4 text-[#FCC624]" />,
        },
        {
          name: "Latex",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#008080]" />,
        },
      ],
    },
    
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
