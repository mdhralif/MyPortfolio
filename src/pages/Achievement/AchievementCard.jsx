import PropTypes from "prop-types";
import { FiLink } from "react-icons/fi";
import grainImage from "@/assets/images/grain.jpg";

export default function AchievementCard({
  certificateName,
  placement,
  description,
  logo,
  color = "#2DD4BF",
  link,
}) {
  return (
    <div className="relative w-full h-[240px] overflow-hidden bg-[#1f2937]/90 shadow-none">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${grainImage})` }}
      />
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 h-full p-4 md:p-5 lg:p-6 flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 min-w-0">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center overflow-hidden shrink-0">
              {logo ? (
                <img
                  src={logo}
                  alt="Certificate logo"
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-xs md:text-sm font-bold text-white/70 uppercase">
                  CE
                </span>
              )}
            </div>

            <div className="min-w-0">
              <h3 className="text-base md:text-2xl font-bold text-white leading-tight truncate md:whitespace-normal">
                {certificateName}
              </h3>
              <p
                className="mt-2 inline-flex w-fit rounded-none bg-gray-700/50 px-3 py-1 text-sm md:text-base font-semibold"
                style={{ color }}
              >
                {placement}
              </p>
            </div>
          </div>

          {link ? (
            <div className="mt-1">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#30d6c2]"
                aria-label="Open certificate link"
              >
                <FiLink className="text-lg md:text-xl" />
              </a>
            </div>
          ) : null}
        </div>

        <p className="mt-4 text-sm md:text-base text-white/95 leading-relaxed text-justify overflow-y-auto pr-1">
          {description}
        </p>
      </div>
    </div>
  );
}

AchievementCard.propTypes = {
  certificateName: PropTypes.string.isRequired,
  placement: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.string,
  color: PropTypes.string,
  link: PropTypes.string,
};
