import { useState } from "react";
import PropTypes from "prop-types";
import AchievementCard from "./AchievementCard";

export default function AchievementCarousel({ items = [] }) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  return (
    <div className="flex justify-center w-full">
      <div className="w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%]">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {items.map((it, i) => (
                <div key={i} className="flex-shrink-0 w-full">
                  <AchievementCard {...it} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 text-white p-2 rounded-full hover:bg-white/20"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 text-white p-2 rounded-full hover:bg-white/20"
          >
            ›
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-gray-600"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

AchievementCarousel.propTypes = {
  items: PropTypes.array,
};
