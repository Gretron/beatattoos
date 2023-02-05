// #region Imports

// Components
import { about, Bio } from "../features/about/index";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

// #endregion

/**
 * About Page
 */
const About = () => {
  return (
    <div className="about">
      <ScrollToTopOnMount />
      <Bio />
    </div>
  );
};

export default About;
