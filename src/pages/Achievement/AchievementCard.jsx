import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaMedal } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

export default function AchievementCard({ title, org, year, description, image, color = "#2DD4BF", link, logo }) {
  return (
    <div className="w-full flex flex-col md:flex-row bg-[#161825] rounded-none overflow-hidden shadow-xl">
      {/* Image/Icon section - full width on mobile, 55% on desktop */}
      <div className="w-full md:w-[55%] h-[180px] md:h-[320px] lg:h-[350px] relative overflow-hidden bg-gray flex items-center justify-center">
        {image ? (
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        ) : (
          <div className="text-center p-8">
            <div className="text-4xl md:text-6xl font-bold text-white mb-3">Champion</div>
            <div className="mb-4 relative">
              <FaMedal className="text-6xl md:text-8xl mx-auto text-yellow-400" />
            </div>
          </div>
        )}
        
        {/* Colored overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: color, mixBlendMode: "overlay", opacity: 0.3 }}
        />
      </div>

      {/* Content section - full width on mobile, 45% on desktop */}
      <div className="w-full md:w-[45%] h-[250px] md:h-[320px] lg:h-[350px] p-6 pt-8 md:p-8 md:pt-10 lg:p-10 lg:pt-12 flex flex-col justify-start bg-[#1c1f2e] overflow-hidden">
        <div>
          <div className="flex items-center gap-3 mb-3 md:mb-4">
            <div
              className="w-2 h-2 md:w-3 md:h-3 rounded-none"
              style={{ backgroundColor: color }}
            />
            <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
          </div>

          <div className="flex items-start justify-between">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3">
              {title}
            </h3>
            <div className="ml-4 mt-1">
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#30d6c2]">
                  <FiLink className="text-lg md:text-xl" />
                </a>
              ) : (
                <FiLink className="text-lg md:text-xl text-gray-600" title="No link provided" />
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-3 mb-2 md:mb-3">
            <div className="flex items-center gap-2">
              {logo ? (
                <img src={logo} alt={`${org} logo`} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
              ) : (
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-700" />
              )}
              <span className="text-sm md:text-base font-semibold" style={{ color }}>
                {org}
              </span>
            </div>
            <span className="text-gray-500">•</span>
            <span className="text-xs md:text-sm text-gray-400">{year}</span>
          </div>
          
          <p className="text-sm md:text-base text-gray-300 leading-relaxed text-justify">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

AchievementCard.propTypes = {
  title: PropTypes.string.isRequired,
  org: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  color: PropTypes.string,
  link: PropTypes.string,
  logo: PropTypes.string,
};
