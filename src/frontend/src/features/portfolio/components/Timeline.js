// #region Imports

// Components
import { ReactComponent as Star } from "../../../assets/img/star.svg";
import { ReactComponent as Gun } from "../assets/img/gun.svg";

// #endregion

const StarImage = ({ className, ...props }) => (
  <Star {...props} className={className} />
);

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
      <div className="timeline__point point-0">
        <StarImage className="timeline__star star-0" />
        <div className="timeline__label label-0 h6">2019</div>
      </div>
      <div className="timeline__point point-1">
        <StarImage className="timeline__star star-1" />
        <div className="timeline__label label-1 h6">2020</div>
      </div>
      <div className="timeline__point point-2">
        <StarImage className="timeline__star star-2" />
        <div className="timeline__label label-2 h6">2021</div>
      </div>
      <div className="timeline__point point-3">
        <StarImage className="timeline__star star-3" />
        <div className="timeline__label label-3 h6">2022</div>
      </div>
      <div className="timeline__gun-container">
        <GunImage className="timeline__gun" />
      </div>
    </div>
  );
};

export default Timeline;
