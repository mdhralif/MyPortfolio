import { useState } from "react";
import PropTypes from "prop-types";
import AchievementCard from "./AchievementCard";

export default function AchievementCarousel({ items = [] }) {
  const [index] = useState(0);

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
        </div>
      </div>
    </div>
  );
}

AchievementCarousel.propTypes = {
  items: PropTypes.array,
};
