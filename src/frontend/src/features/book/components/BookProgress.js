// #region Imports

import { useState, useEffect } from "react";
import BookProgressPoint from "./BookProgressPoint";
import { Link, Outlet, useLocation } from "react-router-dom";

// #endregion

/**
 * Book Progress Bar of Book Page
 */
const BookProgress = ({ type, placement, location, datetime, confirm }) => {
  // Location on Site
  const siteLocation = useLocation();

  // Progress Class
  const [progress, setProgress] = useState("");

  // Init Class for Startup Transitions
  const [init, setInit] = useState("");

  useEffect(() => {
    if (
      siteLocation.pathname == "/book" ||
      siteLocation.pathname == "/book/type"
    ) {
      setProgress("");
    } else if (siteLocation.pathname == "/book/placement") {
      setProgress("book-progress__indicator--placement");
    } else if (siteLocation.pathname == "/book/location") {
      setProgress("book-progress__indicator--location");
    } else if (siteLocation.pathname == "/book/datetime") {
      setProgress("book-progress__indicator--datetime");
    } else {
      setProgress("book-progress__indicator--confirm");
    }

    setTimeout(() => {
      setInit("book-progress__init");
    }, 1000);
  }, [siteLocation]);

  return (
    <div className={`book-progress ${init}`}>
      <div className="book-progress__line">
        <div className={`book-progress__indicator ${progress}`}></div>
      </div>
      <BookProgressPoint name="type" active={type && true} />
      <BookProgressPoint name="placement" active={placement && true} />
      <BookProgressPoint name="location" active={location && true} />
      <BookProgressPoint name="datetime" active={datetime && true} />
      <BookProgressPoint name="confirm" active={confirm && true} />
    </div>
  );
};

export default BookProgress;
