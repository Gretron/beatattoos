import { ReactComponent as HalfStar } from "../assets/img/half-star.svg";

/**
 * Divider Line
 */
const Divider = () => {
  return (
    <div className="divider">
      <HalfStar />
      <div className="divider__horizontal-line"></div>
      <HalfStar />
    </div>
  );
};

export default Divider;
