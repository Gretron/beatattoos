// #region Imports

// Components
import { BookProgress } from "../features/book/index";
import { Link, Outlet, useLocation } from "react-router-dom";

// Hooks
import { useState, useEffect } from "react";

// #endregion

/**
 * Book Page
 */
const Book = () => {
  // Location on Site
  const location = useLocation();

  // Active Progress Points
  const [active, setActive] = useState({
    type: true,
    placement: false,
    location: false,
    datetime: false,
    confirm: false,
  });

  let [nextStep, setNextStep] = useState("placement");

  useEffect(() => {
    let completeSteps;

    if (location.pathname == "/book" || location.pathname == "/book/type") {
      completeSteps = 1;
      setNextStep("placement");
    } else if (location.pathname == "/book/placement") {
      completeSteps = 2;
      setNextStep("location");
    } else if (location.pathname == "/book/location") {
      completeSteps = 3;
      setNextStep("datetime");
    } else if (location.pathname == "/book/datetime") {
      completeSteps = 4;
      setNextStep("confirm");
    } else {
      completeSteps = 5;
    }

    let count = 0;
    let newActive = {
      type: false,
      placement: false,
      location: false,
      datetime: false,
      confirm: false,
    };

    for (let [key, value] of Object.entries(newActive)) {
      if (count < completeSteps) {
        newActive[key] = true;
      } else {
        break;
      }
      count++;
    }

    setActive(newActive);
  }, [location]);

  return (
    <div className="book">
      <BookProgress {...active} />
      <Outlet />
      <Link to={nextStep}>
        <button className="outline--button">next</button>
      </Link>
    </div>
  );
};

export default Book;
