import { Fragment, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import AchievementCard from "./AchievementCard";

export default function AchievementCarousel({ items = [] }) {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const lastFrameTimeRef = useRef(0);
  const startXRef = useRef(0);
  const startTransformRef = useRef(0);
  const [transform, setTransform] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [groupWidth, setGroupWidth] = useState(0);

  useEffect(() => {
    if (!items.length) return;

    const updateWidths = () => {
      if (!trackRef.current) return;
      const width = trackRef.current.scrollWidth / 3;
      setGroupWidth(width);
    };

    updateWidths();
    window.addEventListener("resize", updateWidths);

    return () => window.removeEventListener("resize", updateWidths);
  }, [items.length]);

  useEffect(() => {
    if (!items.length || isDragging) return;

    const SPEED_PX_PER_SECOND = 32;

    const animate = (timestamp) => {
      if (!lastFrameTimeRef.current) {
        lastFrameTimeRef.current = timestamp;
      }

      const deltaMs = timestamp - lastFrameTimeRef.current;
      lastFrameTimeRef.current = timestamp;

      setTransform((prev) => prev - (SPEED_PX_PER_SECOND * deltaMs) / 1000);
      rafRef.current = window.requestAnimationFrame(animate);
    };

    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
      lastFrameTimeRef.current = 0;
    };
  }, [isDragging, items.length]);

  const getWrappedTransform = (value, width) => {
    if (!width) return value;
    let wrapped = value % width;
    if (wrapped > 0) wrapped -= width;
    return wrapped;
  };

  const handleStart = (clientX) => {
    setIsDragging(true);
    startXRef.current = clientX;
    startTransformRef.current = transform;
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    const deltaX = clientX - startXRef.current;
    setTransform(startTransformRef.current + deltaX);
  };

  const handleEnd = () => {
    if (groupWidth) {
      setTransform((prev) => getWrappedTransform(prev, groupWidth));
    }
    setIsDragging(false);
  };

  if (!items.length) return null;

  return (
    <div className="w-[94%] md:w-[92%] mx-auto overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] py-4 -my-4">
      <div
        ref={trackRef}
        className={`flex gap-8 pr-8 select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        style={{
          transform: `translateX(${getWrappedTransform(transform, groupWidth)}px)`,
          transition: "none",
        }}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        {[...new Array(3)].map((_, repeatIndex) => (
          <Fragment key={repeatIndex}>
            {items.map((it, i) => (
              <div
                key={`${repeatIndex}-${i}-${it.title}`}
                className="w-[75vw] max-w-[420px] flex-shrink-0"
              >
                <AchievementCard {...it} />
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

AchievementCarousel.propTypes = {
  items: PropTypes.array,
};
