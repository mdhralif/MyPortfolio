import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FiLink } from "react-icons/fi";
import championIcon from "../../assets/images/champion.png";

export default function AchievementCard({ title, org, year, description, image, color = "#2DD4BF", link, logo }) {
  return (
    <div className="w-full flex flex-col md:flex-row bg-[#1c1f2e] rounded-none overflow-hidden shadow-xl">
      {/* Image/Icon section - full width on mobile, 55% on desktop */}
      <div className="w-full md:w-[55%] h-[180px] md:h-[320px] lg:h-[350px] relative overflow-hidden bg-[#1c1f2e] flex items-center justify-center">
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
          <div className="text-center p-8 flex items-center justify-center">
            <img src={championIcon} alt="Champion" className="w-40 md:w-64 mx-auto" />
          </div>
        )}
        
        {/* Colored overlay removed to avoid tinting the panel */}
      </div>

      {/* Content section - full width on mobile, 45% on desktop */}
      <div className="w-full md:w-[45%] h-[250px] md:h-[320px] lg:h-[350px] p-6 pt-8 md:p-8 md:pt-10 lg:p-10 lg:pt-12 flex flex-col justify-start bg-[#1c1f2e] overflow-hidden">
        <div>
          {!image ? (
            <div className="mb-3 md:mb-4">
              <span className="text-base md:text-xl font-bold text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-none"> 
                Champion
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div
                className="w-2 h-2 md:w-3 md:h-3 rounded-none"
                style={{ backgroundColor: color }}
              />
              <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
            </div>
          )}

          <div className="flex items-start justify-between">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3">
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
          
          <p className="text-xs md:text-base text-gray-300 leading-relaxed text-justify">
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
