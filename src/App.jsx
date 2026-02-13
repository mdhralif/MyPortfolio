import { useState } from "react";
import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Education from "./pages/Education/Education";
import Achievement from "./pages/Achievement/Achievement";
import Projects from "./pages/Projects/Projects";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Footer from "./pages/Footer/Footer";
import GlobalHamburger from "./components/GlobalHamburger";
import LoadingScreen from "./components/ui/LoadingScreen";
import NotFound from "./components/NotFound";
import ContactModal from "./components/ContactModal";

import { Route, Routes } from "react-router-dom";

export default function App() {
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
      <GlobalHamburger onContactClick={handleContactClick} />

      {/* Routing: home (/) renders the one-page layout; other pages are separate */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero onContactClick={handleContactClick} />
              <Projects />
              <Skills />
            </>
          }
        />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/contact" element={<ContactModal />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={
          // if you have a dedicated About page
          // prefer importing it at top. For now render Hero's About section if available
          <Hero onContactClick={handleContactClick} />
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseModal} />
    </>
  );
}
