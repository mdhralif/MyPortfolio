import { useEffect, useState } from "react";
import "./assets/css/index.css";
import About from "./pages/About/About";
import Achievement from "./pages/Achievement/Achievement";
import Projects from "./pages/Projects/Projects";
import FeaturedProjects from "./pages/Projects/FeaturedProjects";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import GlobalHamburger from "./components/GlobalHamburger";
import LoadingScreen from "./components/ui/LoadingScreen";
import NotFound from "./components/NotFound";
import ContactModal from "./components/ContactModal";
import AIChat from "./components/AIChat";

import { Route, Routes } from "react-router-dom";

const imageModules = import.meta.glob(
  "./assets/images/**/*.{png,jpg,jpeg,JPG,JPEG,webp,WEBP,gif,GIF,avif,AVIF,svg,SVG}",
  { eager: true, import: "default" }
);
const imageUrls = Object.values(imageModules);

const getNormalizedPathname = () => {
  if (typeof window === "undefined") return "/";

  const pathname = window.location.pathname.toLowerCase();
  return pathname.endsWith("/") && pathname.length > 1
    ? pathname.slice(0, -1)
    : pathname;
};

const shouldSkipLoading = (pathname) =>
  pathname.endsWith("/projects") ||
  pathname.endsWith("/skills") ||
  pathname.endsWith("/me");

export default function App() {
  const [isLoading, setIsLoading] = useState(
    !shouldSkipLoading(getNormalizedPathname())
  );

  // Contact modal state - shared across Hero and About
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const handleContactClick = () => setIsContactModalOpen(true);
  const handleCloseModal = () => setIsContactModalOpen(false);

  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const preloadedImages = imageUrls.map((src) => {
      const img = new Image();
      img.decoding = "async";
      img.src = src;
      return img;
    });

    return () => {
      preloadedImages.length = 0;
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <>
      <Header />
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
                  <FeaturedProjects />
                  <Skills />
                  <Achievement />
                </>
              }
            />
            <Route path="/skills" element={<Skills />} />
            <Route path="/achievement" element={<Achievement />} />
            <Route
              path="/contact"
              element={<Hero onContactClick={handleContactClick} />}
            />
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/Me"
              element={<About onContactClick={handleContactClick} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>

      <AIChat />

      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseModal} />
    </>
  );
}
