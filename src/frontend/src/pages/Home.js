// #region Imports

// Styles
import home from "../features/home/assets/css/home.css";

// Components
import Logo from "../features/home/components/Logo";
import Styles from "../features/home/components/Styles";
import Coverups from "../features/home/components/Coverups";
import Types from "../features/home/components/Types";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

// #endregion

/**
 * Home Page
 */
const Home = () => {
  return (
    <div className="home">
      <ScrollToTopOnMount />
      <Logo />
      <Styles />
      <Coverups />
      <Types />
    </div>
  );
};

export default Home;
