import { useState } from "react";
import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Footer from "./pages/Footer/Footer";
import LoadingScreen from "./components/ui/LoadingScreen";
import NotFound from "./components/NotFound";
import ContactModal from "./components/ContactModal";

import { Route, Routes } from "react-router-dom";

export default function App() {
  const [isOnePage] = useState(true); 
  const [isLoading, setIsLoading] = useState(true);

  // Contact modal state - shared across Hero and About
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const handleContactClick = () => setIsContactModalOpen(true);
  const handleCloseModal = () => setIsContactModalOpen(false);

  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <>

      {/* Conditional Rendering */}
      {isOnePage ? (
        <>
          <Hero onContactClick={handleContactClick} />
          <Projects />
          <Skills />
          <Experience />
          <Footer />
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<ContactModal />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </>
      )}
      
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseModal} />
    </>
  );
}
