// #region Imports

// Styles
import portfolio from "../features/portfolio/assets/css/portfolio.css";

// Components
import { Gallery } from "../features/portfolio/index";
import { Timeline } from "../features/portfolio/index";

// #endregion

/**
 * Portfolio Page
 */
const Portfolio = () => {
  return (
    <div className="portfolio">
      <Gallery />
      <Timeline />
    </div>
  );
};

export default Portfolio;
