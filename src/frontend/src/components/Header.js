// #region Imports

// Modules
import { gsap } from "gsap";

// Hooks
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

// Styles
import global from "../assets/css/global.css";

// Components
import { ReactComponent as Hamburger } from "../assets/img/hamburger.svg";
import { ReactComponent as User } from "../assets/img/user.svg";
import Seperator from "./Seperator";

// #endregion

/**
 * Navigation Header
 */
const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleClick = (e) => {
    setIsMenuVisible(!isMenuVisible);

    let mm = gsap.matchMedia();
    mm.add("(max-width: 64em)", (context) => {
      if (isMenuVisible) {
        gsap.to(".links", {
          x: "100%",
          duration: context.isReverted ? 0 : 1,
          ease: "power4.out",
        });
      } else {
        gsap.to(".links", {
          x: "0%",
          duration: context.isReverted ? 0 : 1,
          ease: "power4.out",
        });
      }

      return () => {
        gsap.to(".links", {
          x: "0%",
          duration: 0,
        });

        context.kill();
      };
    });
  };

  // Page Location
  const location = useLocation();

  return (
    <div className="header">
      <div className="brand">beatattoos</div>
      <div className="links" data-visible={isMenuVisible}>
        <Link to="/" className={location.pathname == "/" ? "active--link" : ""}>
          home
        </Link>
        <Link
          to="/portfolio"
          className={location.pathname == "/portfolio" ? "active--link" : ""}
        >
          portfolio
        </Link>
        <Link
          to="/about"
          className={location.pathname == "/about" ? "active--link" : ""}
        >
          about
        </Link>
        <div className="additional-links">
          <Seperator />
          <Link
            to="/account"
            className={location.pathname == "/account" ? "active--link" : ""}
          >
            account
          </Link>
          <Link
            to="/book"
            className={location.pathname == "/book" ? "active--link" : ""}
          >
            book now
          </Link>
        </div>
      </div>
      <div className="actions">
        <Link to="/account">
          <button
            className={
              location.pathname == "/account"
                ? "active--icon icon--button"
                : "icon--button"
            }
          >
            <User />
          </button>
        </Link>
        <Link to="/book">
          <button
            className={
              location.pathname == "/book"
                ? "active--button orange--button"
                : "orange--button"
            }
          >
            book now
          </button>
        </Link>
      </div>
      <button className="toggle icon--button" onClick={handleClick}>
        <Hamburger />
      </button>
    </div>
  );
};

export default Header;
