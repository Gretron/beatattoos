// #region Imports

// Components
import { ReactComponent as Star } from "../../../assets/img/star.svg";

// #endregion

/**
 * Star Icon as Timeline Point
 */
const StarIcon = ({ className, ...props }) => (
  <Star {...props} className={className} />
);

/**
 * Point on Timeline
 */
const TimelinePoint = ({ label, num }) => {
  return (
    <div className={`timeline__point _${num}`}>
      <StarIcon className={`timeline__star _${num}`} />
      <div className={`timeline__label _${num} h6`}>{label}</div>
    </div>
  );
};

export default TimelinePoint;
