// #region Imports

// Hooks
import { useEffect, useRef } from "react";

// Styles
import home from "../assets/css/home.css";

// Modules
import { gsap } from "gsap";

// Components
import { ReactComponent as Snake } from "../assets/img/snake.svg";
import { ReactComponent as MaskedSnake } from "../assets/img/masked-snake.svg";
import { ReactComponent as Subtitle } from "../assets/img/subtitle.svg";
import { ReactComponent as Curve } from "../assets/img/curve.svg";
import { ReactComponent as Styles } from "../assets/img/styles.svg";

// #endregion

/**
 * Home Page
 */
const Home = () => {
  const loaded = useRef(false);

  useEffect(() => {
    // If Component Already Loaded...
    if (loaded.current) {
      // Skip
      return;
    }
    // Else Play Animation
    loaded.current = true;
    gsap.from(".logo .char", {
      y: 100,
      x: 0,
      opacity: 0,
      stagger: 0.05,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });

    gsap.to(".logo .snake", {
      opacity: 1,
      duration: 0.75,
      delay: 1,
      ease: "power3.out",
    });

    gsap.from(".logo .subtitle", {
      y: -25,
      opacity: 0,
      duration: 1,
      delay: 1.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="home">
      <div className="logo">
        <Snake />
        <div className="title">
          <div>b</div>
          <div>e</div>
          <div>a</div>
        </div>
        <div className="title">
          <div>t</div>
          <div>a</div>
          <div>t</div>
          <div>t</div>
          <div>o</div>
          <div>o</div>
          <div>s</div>
        </div>
        <MaskedSnake />
        <div className="subtitle"></div>
      </div>

      <div className="styles">
        <div className="curve">
          <Curve />
        </div>
        <div className="container">
          <div className="title">
            <Styles />
          </div>
          <div className="images"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
