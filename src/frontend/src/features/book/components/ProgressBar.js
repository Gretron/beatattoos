// #region Imports

import { useEffect } from "react";
import BookProgressPoint from "./ProgressPoint";
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
      <BookProgressPoint name="type" />
      <BookProgressPoint name="placement" />
      <BookProgressPoint name="location" />
      <BookProgressPoint name="datetime" />
      <BookProgressPoint name="confirm" />
    </div>
  );
};

export default ProgressBar;
