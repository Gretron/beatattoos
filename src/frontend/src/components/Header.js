// #region Imports

// Modules
import { gsap } from "gsap";

// Hooks
import { useState } from "react";

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

  return (
    <div className="header">
      <div className="brand">beatattoos</div>
      <div className="links" data-visible={isMenuVisible}>
        <a>home</a>
        <a>portfolio</a>
        <a>about</a>
        <div className="additional-links">
          <Seperator />
          <a>account</a>
          <a>book now</a>
        </div>
      </div>
      <div className="actions">
        <button className="icon--button">
          <User />
        </button>
        <button className="orange--button">book now</button>
      </div>
      <button className="toggle icon--button" onClick={handleClick}>
        <Hamburger />
      </button>
    </div>
  );
};

export default Header;
