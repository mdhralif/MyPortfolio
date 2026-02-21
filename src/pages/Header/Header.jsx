import { useEffect, useState } from "react";
import alifIcon from "../../assets/images/logo.png";

export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const SHOW_NEAR_TOP = 120; // px from top where controls can reveal when scrolling up
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;

    const onScroll = () => {
      const current = window.scrollY;

      // If at the very top, always show
      if (current <= 10) {
        setVisible(true);
      } else if (current > lastScrollY) {
        // scrolling down -> always hide
        setVisible(false);
      } else {
        // scrolling up -> only reveal when near the top
        if (current <= SHOW_NEAR_TOP) setVisible(true);
        else setVisible(false);
      }

      lastScrollY = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // initialize based on current position
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // square uses a single accent color; no injected keyframes needed

  return (
    <header
      className={`fixed top-9 left-6 z-50 transition-transform transition-opacity duration-300 ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 -translate-y-2 scale-90 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-2">
        <div
          className="flex items-center gap-2 group"
          role="button"
          tabIndex={0}
          title="Open portfolio in a new tab and refresh this page"
          onClick={() => {
            // navigate to root (/) in the same tab
            window.location.href = "/";
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              window.location.href = "/";
            }
          }}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-13 lg:h-13 cursor-pointer">
            <img src={alifIcon} alt="Alif Logo" className="w-full h-full object-cover" />
          </div>

          {/* single-color accent square */}
          <span
            aria-hidden="true"
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 block bg-[#2DD4BF] group-hover:bg-[#D2CBBB] hover:bg-[#D2CBBB] transition-colors duration-200 cursor-pointer transform translate-y-2 sm:translate-y-2 md:translate-y-3 lg:translate-y-3"
          />
        </div>
      </div>
    </header>
  );
}

