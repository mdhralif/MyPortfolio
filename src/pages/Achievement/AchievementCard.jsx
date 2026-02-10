import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";

export default function AchievementCard({ title, org, year, description, image, color = "#2DD4BF" }) {
  return (
    <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
      {/* Image/Icon section - full width on mobile, 55% on desktop */}
      <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
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
            <motion.div
              className="mb-4"
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
            >
              <FaTrophy className="text-6xl md:text-8xl text-white mx-auto" />
            </motion.div>
            <div className="text-2xl md:text-4xl font-bold" style={{ color }}>{title}</div>
          </div>
        )}
        
        {/* Colored overlay */}
        <motion.div
          className="absolute inset-0"
          style={{ backgroundColor: color, mixBlendMode: "overlay" }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.3 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content section - full width on mobile, 45% on desktop */}
      <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-center">
        <div>
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div
              className="w-2 h-2 md:w-3 md:h-3 rounded-full"
              style={{ backgroundColor: color }}
            />
            <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
          </div>

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
            {title}
          </h3>
          
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <span className="text-base md:text-lg font-semibold" style={{ color }}>
              {org}
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-sm md:text-base text-gray-400">{year}</span>
          </div>
          
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
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
};
