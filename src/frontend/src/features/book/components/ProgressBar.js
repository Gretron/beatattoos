// #region Imports

import { useEffect } from "react";
import ProgressPoint from "./ProgressPoint";
import { Link } from "react-router-dom";

// #endregion

/**
 * Book Progress Bar of Book Page
 */
const ProgressBar = ({ type, placement, location, datetime, confirm }) => {
  useEffect(() => {
    if (confirm) {
    } else if (datetime) {
    } else if (location) {
    } else if (placement) {
    } else {
    }
  }, [type, placement, location, datetime, confirm]);

  return (
    <div className="book-progress">
      <div className="book-progress__line">
        <div className="book-progress__indicator"></div>
      </div>
      <ProgressPoint name="type" />
      <ProgressPoint name="placement" />
      <ProgressPoint name="location" />
      <ProgressPoint name="datetime" />
      <ProgressPoint name="confirm" />
    </div>
  );
};

export default ProgressBar;
