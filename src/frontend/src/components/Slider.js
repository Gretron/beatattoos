// #region Imports

import { useRef } from "react";

// #endregion

/**
 * Input Slider
 */
const Slider = ({ min, max, labelOne, labelTwo, callback }) => {
  const progressElement = useRef();

  const handleChange = (e) => {
    const percent =
      ((e.target.value - e.target.min) / (e.target.max - e.target.min)) * 100;
    progressElement.current.style.width = `${percent}%`;

    callback(percent);
  };

  return (
    <div className="slider__container">
      <div className="slider">
        <div className="slider__side">
          <div></div>
        </div>
        <div className="slider__side">
          <div></div>
        </div>
        <div className="slider__progress__container">
          <div className="slider__progress" ref={progressElement}></div>
        </div>
        <input
          type="range"
          className="slider__input"
          min={min}
          max={max}
          onChange={handleChange}
        />
      </div>
      <div className="slider__ranges">
        <div className="slider__range">{labelOne}</div>
        <div className="slider__range">{labelTwo}</div>
      </div>
    </div>
  );
};

export default Slider;
