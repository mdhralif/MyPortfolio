import ProfileImage from "@/assets/images/Alif_.png";
import iutLogo from "@/assets/images/iutlogo.jpg";
import KAZlogo from "@/assets/images/KAZLOGO.png";
import KPClogo from "@/assets/images/KPC.jpg";
import KEUSlogo from "@/assets/images/KEUS.jpg";
import GPSlogo from "@/assets/images/GFC.png";
import HSCCertificate from "@/assets/images/HSC_C.png";
import SSCCertificate from "@/assets/images/SSC_C.png";
import HSCTranscript from "@/assets/images/HSC_T.png";
import SSCTranscript from "@/assets/images/SSC_T.png";
import GPSCertificate from "@/assets/images/GPS_C.png";
import KAZCertificate from "@/assets/images/KAZ_C.png";
import ClassPhoto from "@/assets/images/ClassPhoto.png";
import { FaFacebook, FaLinkedin, FaGithub, FaFileDownload, FaCalendarAlt, FaGraduationCap, FaChevronDown, FaChevronUp, FaCertificate, FaStar, FaTimes, FaScroll, FaFilePdf, FaUsers, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function About() {
  const [showFullExp, setShowFullExp] = useState(false);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [showMoreEdu, setShowMoreEdu] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null); // { title, image }

  // Lock background scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      
      // Add keyboard listener for Escape key
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          setSelectedCert(null);
        }
      };
      document.addEventListener('keydown', handleEscape);
      
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);
  const extraEducations = [
    {
      title: "H.S.C. in Science",
      shortTitle: "H.S.C.",
      org: "Khulna Public College (KPC)",
      gpa: "5.00",
      scholarship: true,
      from: "2019",
      to: "2021",
      desc: "Completed higher secondary education with strong academic achievement with board scholarship.",
      logo: KPClogo,
      certificate: HSCCertificate,
      transcript: HSCTranscript,
    },
    {
      title: "S.S.C. in Science",
      shortTitle: "S.S.C.",
      org: "Khunla Engineering Univerity School (KEUS)",
      gpa: "5.00",
      scholarship: true,
      from: "2016",
      to: "2019",
      desc: "Completed secondary education with strong academic achievement with board scholarship.",
      logo: KEUSlogo,
      certificate: SSCCertificate,
      transcript: SSCTranscript,
    },
    {
      title: "Class of 2014 [Grade - 6]",
      shortTitle: "Class of 2014",
      org: "Glenferrie Primary School, Melbourne, Australia",
      Grade: "5.00",
      from: "2014",
      to: "2015",
      desc: "Completed primary-level education under the Australian curriculum as an international student.",
      logo: GPSlogo,
      certificate: GPSCertificate,
      classPhoto: ClassPhoto
    },
  ];

  return (
    <main className="bg-[#161825] text-white min-h-screen">
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-16 md:pb-16">
        <div className="mb-12 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-white bg-clip-text leading-tight">
            <span style={{ color: '#2DD4BF' }}>About</span> Me
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 items-center">
          {/* Left: image card with offset background and social icons */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="absolute left-0 top-12 w-80 h-96 bg-[#1c1f2e] opacity-95 transform -translate-x-8 lg:-translate-x-16 " />

            <div className="relative z-10 bg-transparent p-6">
              <div className="w-64 h-80 bg-[#0f1223] shadow-2xl overflow-hidden">
                <img src={ProfileImage} alt="Profile" className="w-full h-full object-cover" />
              </div>

              <div className="mt-6 flex gap-4 text-gray-300 relative -left-6 lg:-left-12">
                <a href="#" aria-label="Facebook" className="p-2 rounded-none bg-transparent hover:bg-[#31d4c1]">
                  <FaFacebook className="text-white w-5 h-5 md:w-6 md:h-6" />
                </a>

                <a href="#" aria-label="LinkedIn" className="p-2 rounded-none bg-transparent hover:bg-[#31d4c1]">
                  <FaLinkedin className="text-white w-5 h-5 md:w-6 md:h-6" />
                </a>

                <a href="#" aria-label="GitHub" className="p-2 rounded-none bg-transparent hover:bg-[#31d4c1]">
                  <FaGithub className="text-white w-5 h-5 md:w-6 md:h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: large heading and paragraphs */}
          <div className="py-6">
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              <span style={{ color: 'white' }}>I&apos;m,</span> MD H R ALIF
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-6 text-justify">
              A Software Engineering student and passionate <span className="inline-block bg-[#2ad6c0]/50 text-white px-1">full-stack developer</span> with experience building web and AI-powered applications. I’ve worked as a <span className="inline-block bg-[#2ad6c0]/50 text-white px-1">Software Engineer Intern</span> at KAZ Software and developed production level applications using Angular and .NET framework. I’m eager to apply my skills and continue growing as a software Engineer.
            </p>

            {/* CV Download */}
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate__animated animate__fadeInUp animate__delay-2s justify-start">
                              <a
                                href="https://drive.google.com/uc?export=download&id=1vg9YRsNnimnVixbsyHrKLEDVDEvGTgmK"
                                download="MD_H_R_ALIF_CV.pdf"
                                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-none bg-white text-[#18181a] font-extrabold text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                              >
                                <FaFileDownload className="text-xl transform transition-all duration-300 " /> 
                                <span>Download CV</span>
                              </a>
            
                            </div>


            
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          <span>Experience</span>
        </h3>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1c1f2e] p-6 relative"
        >

          <div className="flex items-start gap-4">
            <div className="w-16 h-16 sm:w-28 sm:h-28 flex-shrink-0 overflow-hidden bg-white flex items-center justify-center p-1">
              <img 
                src={KAZlogo} 
                alt="KAZ Software Logo"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              {/* Mobile icons removed - now shown as buttons below */}
              <h4 className="text-xl font-bold text-white mb-2">Software Engineer Intern</h4>
              <p className="text-sm md:text-base text-gray-400 font-medium mb-2 flex items-center gap-2">
                <FaMapMarkerAlt className="w-4 h-4 text-white" />
                KAZ Software Ltd.
              </p>
              
              <div className="flex items-center gap-4 text-gray-400 text-xs md:text-sm mb-3">
                <div className="flex items-center gap-1">
                  <FaCalendarAlt className="w-4 h-4" />
                  <span>Sep 2025 - Jan 2026</span>
                </div>
              </div>
              
              {/* Desktop: full text */}
              <p className="hidden md:block text-gray-300 mb-4 text-justify">Worked on two production grade web platforms : Dignify, a digital music distribution system, and Web EVV, a caregiver management and monitoring application. Designed and implemented scalable frontend architectures using Angular and TypeScript, integrated secure RESTful APIs for authentication, payments, earnings and handled media uploads with cloud storage integration.</p>

              {/* Mobile: truncated with toggle */}
              <div className="md:hidden mb-4">
                <p
                  className="text-gray-300 text-justify"
                  style={
                    !showFullExp
                      ? { display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }
                      : {}
                  }
                >
                 Worked on two production grade web platforms: Dignify, a role based digital music distribution system, and Web EVV, a caregiver management and monitoring application. Designed and implemented scalable frontend architectures using Angular and TypeScript, integrated secure RESTful APIs for authentication, payments, earnings and handled media uploads with cloud storage integration.</p>

                <button
                  onClick={() => setShowFullExp((s) => !s)}
                  className="mt-2 text-sm text-gray-400 hover:text-white flex items-center gap-2"
                >
                  {showFullExp ? <FaChevronUp /> : <FaChevronDown />}
                  <span>{showFullExp ? 'Show less' : 'Show more'}</span>
                </button>
              </div>

            </div>
          </div>

          {/* Report & Certificate buttons - moved below logo row for mobile */}
          <div className="flex gap-2 mt-3 md:ml-32">
            <button
              onClick={() => setSelectedCert({ title: "KAZ Software | Certificate", image: KAZCertificate, icon: "certificate" })}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f1223] text-white text-sm font-semibold hover:bg-[#2DD4BF] hover:text-white transition-colors duration-200"
              title="View Certificate"
            >
              <FaCertificate className="w-4 h-4" />
              <span>Certificate</span>
            </button>
            <a
              href="https://drive.google.com/file/d/1MBG4-G79_cXUBKiTSOmdJGPzV7AtYzWZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f1223] text-white text-sm font-semibold hover:bg-[#2DD4BF] hover:text-white transition-colors duration-200"
              title="View Report"
            >
              <FaFilePdf className="w-4 h-4" />
              <span>Report</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          <span>Education</span>
        </h3>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1c1f2e] p-6 relative"
        >
          {/* CGPA - desktop absolute, mobile inline to avoid overlap */}
          <div className="hidden md:flex absolute top-4 right-4 flex items-center gap-2 bg-transparent px-4 py-2 rounded-full border border-none">
            <FaGraduationCap className="w-6 h-6 text-white" />
            <span className="text-white font-semibold">CGPA: 3.87</span>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-16 h-16 sm:w-28 sm:h-28 flex-shrink-0 overflow-hidden bg-white flex items-center justify-center p-1">
              <img 
                src={iutLogo} 
                alt="IUT Logo"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h4 className="text-xl font-bold text-white mb-2">B.Sc. in Software Engineering</h4>
              <p className="text-sm md:text-base text-gray-400 font-medium mb-2 flex items-center gap-2">
                <FaMapMarkerAlt className="w-4 h-4 text-white " />
                Islamic University of Technology (IUT)
              </p>
              
              {/* Mobile CGPA inline to prevent absolute overlap */}
              <div className="flex md:hidden items-center gap-2 mt-2 mb-2">
                <FaGraduationCap className="w-4 h-4 text-white" />
                <span className="text-white font-semibold">CGPA: 3.87</span>
              </div>

              <div className="flex items-center gap-4 text-gray-400 text-xs md:text-sm mb-3">
                <div className="flex items-center gap-1">
                  <FaCalendarAlt className="w-4 h-4" />
                  <span>August 2022- Present</span>
                </div>
              </div>
              
              <p className="hidden md:block text-gray-300 mb-4">Academic Highlights :</p>

              <div
                className={`hidden md:flex md:flex-wrap gap-3 overflow-hidden transition-[max-height] duration-300 ${
                  showAllCourses ? "max-h-[1000px]" : "max-h-10"
                }`}
              >
                {[
  "Object Oriented Programming",
  "Data Structures",
  "Algorithms",
  "Algorithm Eng.",
  "Web Dev.",
  "Server Prog.",
  "AI",
  "Machine Learning",
  "NLP",
  "Database",
  "Advanced DB",
  "Data Mining",
  "Big Data",
  "Networking",
  "Advanced Net .",
  "Network Security",
  "Software Design",
  "Software Testing",
  "Software Architecture",
  "Operating Systems",
  "Design Patterns"
]
.map((skill, index) => (
                  <div key={index} className="min-w-[72px] h-10 flex items-center justify-center bg-[#252840]  text-gray-300 rounded-none text-sm font-medium px-2">
                    {skill}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2">
                <button
                  onClick={() => setShowAllCourses((s) => !s)}
                  className="hidden md:inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white"
                >
                  {showAllCourses ? <FaChevronUp /> : <FaChevronDown />}
                  <span>{showAllCourses ? "Show less" : "Show more"}</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-4 flex items-center justify-center gap-2 w-full md:w-auto">
          <button
            onClick={() => setShowMoreEdu((s) => !s)}
            aria-expanded={showMoreEdu}
            aria-label={showMoreEdu ? "Minimize" : "My Academic Journey"}
            className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-white text-[#161825] px-4 py-2 rounded-none font-semibold shadow-md hover:shadow-lg transition-shadow"
          >
            {showMoreEdu ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
            <span>{showMoreEdu ? "Minimize" : "My Academic Journey"}</span>
          </button>
        </div>

        {showMoreEdu &&
          extraEducations.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-[#1c1f2e] p-6 relative mt-6"
            >
              {/* GPA + Scholarship - desktop top right */}
              <div className="hidden md:flex flex-col absolute top-4 right-4 items-end gap-1 px-4 py-2">
                {edu.gpa && (
                  <div className="flex items-center gap-2">
                    <FaGraduationCap className="w-6 h-6 text-white" />
                    <span className="text-white font-semibold">GPA: {edu.gpa}</span>
                  </div>
                )}
                {edu.scholarship && (
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold text-xs">Board Scholarship</span>
                  </div>
                )}
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 sm:w-28 sm:h-28 flex-shrink-0 overflow-hidden bg-white flex items-center justify-center p-1">
                  <img
                    src={edu.logo}
                    alt={`${edu.org} Logo`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-xl font-bold text-white mb-2">{edu.title}</h4>
                  <p className="text-sm md:text-base text-gray-400 font-medium mb-2 flex items-center gap-2">
                    <FaMapMarkerAlt className="w-4 h-4 text-white" />
                    {edu.org}
                  </p>

                  {/* Mobile GPA + Scholarship inline */}
                  {edu.gpa && (
                    <div className="flex md:hidden items-center gap-2 mt-2 mb-1">
                      <FaGraduationCap className="w-4 h-4 text-white" />
                      <span className="text-white font-semibold">GPA: {edu.gpa}</span>
                    </div>
                  )}
                  {edu.scholarship && (
                    <div className="flex md:hidden items-center gap-2 mb-2">
                      <FaScroll className="w-4 h-4 text-white" />
                      <span className="text-white font-semibold text-sm">Board Scholarship</span>
                    </div>
                  )}

                  <div className="flex items-center gap-4 text-gray-400 text-xs md:text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span>{edu.from} - {edu.to}</span>
                    </div>
                  </div>

                  <p className="hidden md:block text-gray-300 mb-4">{edu.desc}</p>

                </div>
              </div>

              {/* Certificate & Transcript buttons - moved below logo row for mobile */}
              {(edu.certificate || edu.transcript || 'classPhoto' in edu) && (
                <div className="flex gap-2 mt-3 md:ml-32">
                  {edu.certificate && (
                    <button
                      onClick={() => setSelectedCert({ title: `${edu.shortTitle || edu.title} | Certificate`, image: edu.certificate, icon: "certificate" })}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f1223] text-white text-sm font-semibold hover:bg-[#2DD4BF] hover:text-white transition-colors duration-200"
                      title="View Certificate"
                    >
                      <FaCertificate className="w-4 h-4" />
                      <span>Certificate</span>
                    </button>
                  )}
                  {edu.transcript && (
                    <button
                      onClick={() => setSelectedCert({ title: `${edu.shortTitle || edu.title} | Transcript`, image: edu.transcript, icon: "transcript" })}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f1223] text-white text-sm font-semibold hover:bg-[#2DD4BF] hover:text-white transition-colors duration-200"
                      title="View Transcript"
                    >
                      <FaScroll className="w-4 h-4" />
                      <span>Transcript</span>
                    </button>
                  )}
                  {'classPhoto' in edu && (
                    <button
                      onClick={() => setSelectedCert({ title: `${edu.shortTitle || edu.title} | Class Photo`, image: edu.classPhoto, icon: "classPhoto" })}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f1223] text-white text-sm font-semibold hover:bg-[#2DD4BF] hover:text-white transition-colors duration-200"
                      title="View Class Photo"
                    >
                      <FaUsers className="w-4 h-4" />
                      <span>Our Class</span>
                    </button>
                  )}
                </div>
              )}
            </motion.div>
          ))}
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-[#1c1f2e] rounded-none shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 ">
              <div className="flex items-center gap-2">
                {selectedCert.icon === "transcript"
                  ? <FaScroll className="text-[#2DD4BF] w-5 h-5" />
                  : selectedCert.icon === "classPhoto"
                  ? <FaUsers className="text-[#2DD4BF] w-5 h-5" />
                  : <FaCertificate className="text-[#2DD4BF] w-5 h-5" />}
                <span className="text-white font-semibold">{selectedCert.title}</span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
            {/* White divider line */}
            <hr className="border-0 h-px bg-gray-500 mx-6 my-0" />
            {/* Image */}
            <div className="p-6">
              {selectedCert.image ? (
                <div className="relative overflow-hidden">
                  {/* Icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    {selectedCert.icon === "transcript"
                      ? <FaScroll className="w-40 h-40 text-white opacity-20" />
                      : <FaCertificate className="w-40 h-40 text-white opacity-20" />}
                  </div>
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-auto object-contain block scale-[1.03]"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-gray-400 gap-3">
                  <FaCertificate className="w-16 h-16 opacity-20" />
                  <p className="text-sm">Certificate image not available yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
