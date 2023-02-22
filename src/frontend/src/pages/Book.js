// #region Imports

// Components
import { ProgressBar } from "../features/book/index";
import { Link, Outlet, useLocation } from "react-router-dom";

// Hooks
import { useState, useEffect } from "react";
import Seperator from "../components/Seperator";

// #endregion

/**
 * Book Page
 */
const Book = () => {
  //const location = useLocation();

  // Header of Book Step
  let [header, setHeader] = useState("");

  // Next and Previous Step for
  let [nextStep, setNextStep] = useState("");
  let [previousStep, setPreviousStep] = useState("");

  useEffect(
    () => {},
    [
      /*location*/
    ]
  );

  return (
    <div className="book">
      <ProgressBar />
      <div className="book__header-container">
        <div className="book__header h1">{header}</div>
        <Seperator className="book__seperator seperator--horizontal" />
      </div>
      <Outlet context={{ setHeader, setNextStep, setPreviousStep }} />
      <div className="book__buttons">
        <Link
          className="book__previous-button"
          to={previousStep}
          disabled={previousStep === ""}
        >
          <button className="outline--button">previous</button>
        </Link>
        <Link
          className="book__next-button"
          to={nextStep}
          disabled={nextStep === ""}
        >
          <button className="orange--button">next</button>
        </Link>
      </div>
    </div>
  );
};

export default Book;
