import { ReactComponent as Star } from "../assets/img/star.svg";

/**
 * Seperator Line
 */
const Seperator = () => {
  return (
    <div className="seperator">
      <Star />
      <div className="seperator__horizontal-line"></div>
      <div className="seperator__vertical-line"></div>
    </div>
  );
};

export default Seperator;
