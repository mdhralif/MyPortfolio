import PropTypes from "prop-types";

export default function AchievementCard({
  certificateName,
  placement,
  description,
  whatItWas,
  logo,
}) {
  const descText = whatItWas || description;
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
          {descText ? <div className="achievement-desc">{descText}</div> : null}

          {/* location removed */}
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
  link: PropTypes.string,
};
