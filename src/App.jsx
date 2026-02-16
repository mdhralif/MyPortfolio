import { useState } from "react";
import "./assets/css/index.css";
import About from "./pages/About/About";
import Achievement from "./pages/Achievement/Achievement";
import Projects from "./pages/Projects/Projects";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Footer from "./pages/Footer/Footer";
import GlobalHamburger from "./components/GlobalHamburger";
import LoadingScreen from "./components/ui/LoadingScreen";
import NotFound from "./components/NotFound";
import ContactModal from "./components/ContactModal";
// import AIChat from "./components/AIChat";

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

      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          {/* Routing: home (/) renders the one-page layout; other pages are separate */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero onContactClick={handleContactClick} />
                  <Projects />
                  <Skills />
                  <Achievement />
                </>
              }
            />
            <Route path="/skills" element={<Skills />} />
            <Route path="/achievement" element={<Achievement />} />
            <Route path="/contact" element={<ContactModal />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About onContactClick={handleContactClick} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseModal} />
      {/* <AIChat /> */}
    </>
  );
}
