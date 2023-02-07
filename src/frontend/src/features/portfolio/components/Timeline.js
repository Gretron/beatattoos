// #region Imports

// Styles
import styles from "../assets/css/timeline.css";

// Components
import { ReactComponent as Gun } from "../assets/img/gun.svg";
import TimelinePoint from "./TimelinePoint";

// #endregion

/**
 * Tattoo Gun Image on Timeline
 */
const GunImage = ({ className, ...props }) => (
  <Gun {...props} className={className} />
);

/**
 * Timeline of Portfolio Page
 */
const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timeline__line">
        <div className="timeline__indicator"></div>
      </div>
      <TimelinePoint label="2019" num="0" />
      <TimelinePoint label="2020" num="1" />
      <TimelinePoint label="2021" num="2" />
      <TimelinePoint label="2022" num="3" />
      <div className="timeline__gun-container">
        <GunImage className="timeline__gun" />
      </div>
    </div>
  );
};

export default Timeline;
