import { ReactComponent as Star } from "../assets/img/star.svg";

/**
 * SVG Hamburger Icon
 */
const HamburgerIcon = () => {
  return (
    <div className="seperator">
      <Star />
      <div className="seperator__horizontal-line"></div>
      <div className="seperator__vertical-line"></div>
    </div>
  );
};

export default HamburgerIcon;
