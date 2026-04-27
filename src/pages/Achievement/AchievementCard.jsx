import PropTypes from "prop-types";
import { IoLocationSharp } from "react-icons/io5";

export default function AchievementCard({
  certificateName,
  placement,
  description,
  logo,
  location,
}) {
  return (
    <div className="achievement-card">

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 flex items-center justify-center shrink-0">
          {logo ? (
            <img src={logo} alt="logo" className="achievement-logo" />
          ) : (
            <div className="achievement-logo text-white/80 font-bold flex items-center justify-center">CE</div>
          )}
        </div>

        <div className="min-w-0">
          <h3 className="achievement-title">{certificateName}</h3>
          <div className="achievement-sub">{placement}</div>
          {description ? <div className="achievement-desc">{description}</div> : null}

          {/** location shown as a subtle meta row */}
          {location ? (
            <div className="achievement-meta">
              <IoLocationSharp className="" />
              <span>{location}</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

AchievementCard.propTypes = {
  certificateName: PropTypes.string.isRequired,
  placement: PropTypes.string.isRequired,
  description: PropTypes.string,
  logo: PropTypes.string,
  location: PropTypes.string,
  link: PropTypes.string,
};
