import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud,} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaJava,
  FaGithub,
  FaAngular,
  FaKaggle,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiFirebase,
  SiJunit5,
  SiIntellijidea,
  SiPostman,
  SiSupabase,
  SiMysql,
  SiCss3,
  SiTensorflow,
  SiHuggingface,
  SiJupyter,
  
} from "react-icons/si";
import { TbBrandCSharp, TbBrandVscode, TbBrandCpp } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";


const SkillCard = ({ title, skills }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-0 rounded-none">
    <CardContent className="p-6 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
            {title}
          </h3>
        </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 flex items-center gap-2 py-2 px-3 rounded-none"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300 bg-transparent rounded-none">
              {React.isValidElement(skill.icon)
                ? React.cloneElement(skill.icon, {
                    className: `${skill.icon.props.className ? skill.icon.props.className.split(' ').filter(c=>!c.startsWith('text-')).join(' ') + ' ' : ''}w-5 h-5`,
                    style: { color: '#ffffff' },
                  })
                : skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

SkillCard.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.node,
    })
  ).isRequired,
  color: PropTypes.string.isRequired,
};

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
          name: "",
          icon: <TbBrandCSharp className="w-4 h-4 text-[#239120]" />,
        },
        {
          name: "",
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
          name: "Angular",
          icon: <FaAngular className="w-4 h-4 text-[#DD0031]" />,
        },
        {
          name: "CSS 3",
          icon: <SiCss3 className="w-4 h-4 text-[#1572B6]" />,
        },
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        {
          name: "React Native",
          icon: <FaReact className="w-4 h-4 text-[#61DAFB]" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
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
          name: "C# .NET",
        },
        {
          name: "Express.js",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#000000]" />,
        },
        {
          name: "REST APIs",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: "Web RTC",
          icon: (
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="2" fill="currentColor" />
              <path d="M12 6a6 6 0 000 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 4a8 8 0 010 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
            </svg>
          ),
        },
        {
          name: "Socket.IO",
          icon: (
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="currentColor" />
            </svg>
          ),
        }

      ],
    },
    {
      icon: Cloud,
      title: "AI & Data Science",
      color: "text-orange-400",
      skills: [
        {
          name: "TensorFlow",
          icon: <SiTensorflow className="w-4 h-4 text-[#FF6F00]" />,
        },
        {
          name: "Jupyter",
          icon: <SiJupyter className="w-4 h-4 text-[#F37626]" />,
        },
        {
          name: "Kaggle",
          icon: <FaKaggle className="w-4 h-4 text-[#20BEFF]" />,
        },
        {
          name: "Hugging Face",
          icon: <SiHuggingface className="w-4 h-4 text-[#FF6F00]" />,
        },
      ],
    },
    {
      icon: Paintbrush,
      title: "Databases & SaaS",
      color: "text-cyan-400",
      skills: [
        {
          name: "MySQL",
          icon: <SiMysql className="w-4 h-4 text-[#FFCA28]" />,
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
          name: "GraphQL",
          icon: <SiGraphql className="w-4 h-4 text-[#E10098]" />,
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
        },
        {
          name: "Supabase",
          icon: <SiSupabase className="w-4 h-4 text-[#FFCA28]" />,
        },
        

      ],
    },
    
    {
      icon: Cpu,
      title: "Developer tools",
      color: "text-pink-400",
      skills: [
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        {
          name: "Postman",
          icon: <SiPostman className="w-4 h-4 text-[#FF6C37]" />,
        },
        
        {
          name: "IntelliJ IDEA",
          icon: <SiIntellijidea className="w-4 h-4 text-[#007ACC]" />,
        },
        {
          name: "Git",
          icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" />,
        },
        {
          name: "Github",
          icon: <FaGithub className="w-4 h-4 text-[#F05032]" />,
        },
        { name: "JUnit5", icon: <SiJunit5 className="w-4 h-4 text-[#25A162]" /> },
        {
          name: "Linux",
          icon: <FaLinux className="w-4 h-4 text-[#FCC624]" />,
        },
        {
          name: "Figma",
          icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" />,
        },
      ],
    },
    
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#1C1F2E] relative">
      <section className="container mx-auto px-4 py-11 relative z-10">
        {/* Section Title */}
        <h2 className="text-5xl md:text-7xl font-black text-transparent bg-white bg-clip-text text-center">
              What I’m <span style={{ color: '#2DD4BF' }}>Good At</span>
        </h2>    

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
    </main>
  );
};

export default SkillsSection;
