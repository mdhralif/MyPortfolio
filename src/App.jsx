import { useState } from "react";
import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import About from "./pages/About/About";
import Footer from "./pages/Footer/Footer";
import LoadingScreen from "./components/ui/LoadingScreen";
import NotFound from "./components/NotFound";

import { Route, Routes } from "react-router-dom";

export default function App() {
  const [isOnePage] = useState(false); // Toggle state
  const [isLoading, setIsLoading] = useState(true);

  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Show loading screen while loading
  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <>
      <Header />
      {/* Conditional Rendering */}
      {isOnePage ? (
        // One-Page Mode: Render all components together
        <>
          <Hero />
          <Skills />
          <Experience />
          <Education />
          {/* <Contact /> */}
          <Footer />
        </>
      ) : (
        // Router Mode: Use routes for navigation
        <>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}
