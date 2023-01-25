import { ReactComponent as Star } from "../assets/img/star.svg";

/**
 * SVG Hamburger Icon
 */
const HamburgerIcon = () => {
  return (
    <div className="seperator">
      <Star />
      <div className="line"></div>
    </div>
  );
};

export default HamburgerIcon;
