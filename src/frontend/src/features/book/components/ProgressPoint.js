// #region Imports

// Components
import { ReactComponent as Star } from "../../../assets/img/star.svg";

// #endregion

/**
 * Star Icon as Progress Point
 */
const StarIcon = ({ className, ...props }) => (
  <Star {...props} className={className} />
);

/**
 * Point on Book Progress Bar
 */
const ProgressPoint = ({ name, active }) => {
  return (
    <div
      className={`book-progress__point ${
        active ? "book-progress__point--active" : ""
      }`}
    >
      <StarIcon className="book-progress__point-icon"></StarIcon>
      <div className="book-progress__point-text h6">{name}</div>
    </div>
  );
};

export default ProgressPoint;
