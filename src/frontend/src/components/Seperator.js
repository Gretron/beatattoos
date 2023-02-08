// #region

import { ReactComponent as Star } from "../assets/img/star.svg";

// #endregion

/**
 * Star of Seperator
 */
const StarIcon = ({ className, ...props }) => (
  <Star {...props} className={className} />
);

/**
 * Seperator Line
 */
const Seperator = ({ className }) => {
  return (
    <div className={`seperator ${className}`}>
      <StarIcon className="seperator__star" />
      <div className="seperator__horizontal-line"></div>
      <div className="seperator__vertical-line"></div>
    </div>
  );
};

export default Seperator;
