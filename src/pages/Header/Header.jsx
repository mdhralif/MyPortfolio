import { useEffect, useState } from "react";
import alifIcon from "../../assets/images/logo.png";

export default function Header() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;

    const onScroll = () => {
      const current = window.scrollY;
      // always show near top
      if (current <= 10) {
        setVisible(true);
      } else if (current > lastScrollY && current > 50) {
        // scrolling down -> hide
        setVisible(false);
      } else if (current < lastScrollY) {
        // scrolling up -> show
        setVisible(true);
      }
      lastScrollY = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-8 left-6 z-50 transition-transform transition-opacity duration-300 ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 -translate-y-2 scale-90 pointer-events-none"
      }`}
    >
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14">
        <img src={alifIcon} alt="Alif Logo" className="w-full h-full object-cover" />
      </div>
    </header>
  );
}

