// #region Imports

// Hooks
import { useEffect, useRef } from "react";

// Styles
import home from "../assets/css/home.css";

// Modules
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import Seperator from "../components/Seperator";
import { ReactComponent as Curve } from "../assets/img/curve.svg";
import { ReactComponent as Logo } from "../assets/img/logo.svg";
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

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".logo__title text", {
      y: 200,
      x: 0,
      stagger: 0.05,
      duration: 0.75,
      delay: 0.5,
      ease: "power4.out",
    });

    gsap.to(".logo__snake", {
      opacity: 1,
      duration: 0.75,
      delay: 1,
      ease: "power3.out",
    });

    gsap.from(".logo__subtitle text", {
      y: -100,
      duration: 0.75,
      delay: 1.25,
      ease: "power3.out",
    });

    gsap.fromTo(
      ".styles__title .letter:not(:last-child)",
      {
        letterSpacing: "min(8rem, 10vw)",
      },
      {
        scrollTrigger: {
          trigger: ".styles__title",
          pin: ".styles__title",
          start: "top middle",
          end: "bottom middle",
          scrub: 1,
        },
        letterSpacing: "min(0.2rem, 1vw)",
      }
    );

    gsap.to(".styles__title .letter", {
      scrollTrigger: {
        trigger: ".styles__title",
        start: "middle top",
        end: "bottom top",
        markers: true,
        scrub: true,
      },
      fontFamily: "Proclamate Heavy",
      textTransform: "lowercase",
      stagger: {
        from: "random",
        amount: 1,
      },
    });

    let tl = gsap.timeline();

    tl.to(".styles__images .realism-text", {
      y: 200,
      duration: 30,
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: ".styles__images",
      pin: ".styles__images",
      start: "middle top",
      end: "bottom top",
      snap: [0.3, 0.6],
      markers: true,
      scrub: true,
    });
  }, []);

  return (
    <div className="home">
      <div className="logo">
        <Logo />
      </div>

      <div className="styles">
        <Curve />
        <div className="styles__title">
          <div className="styles__title__container">
            <span className="letter">S</span>
            <span className="letter">T</span>
            <span className="letter">Y</span>
            <span className="letter">L</span>
            <span className="letter">E</span>
            <span className="letter">S</span>
          </div>
        </div>
        <div className="styles__images">
          <Styles />
        </div>
        <Curve />
      </div>

      <div className="coverups">
        <div className="coverups__container">
          <div className="coverups__title d2">cover-ups</div>
          <p className="coverups__subtitle">
            looking to cover up a tattoo? you’ve come to the right place. turn a
            poor decision into a work of art.
          </p>
          <input type="range" id="" />
        </div>
      </div>

      <div className="types">
        <div className="types__card">
          <div className="types__card__title d3">flashes</div>
          <p className="types__card__subtitle">
            select from a collection of pre-constructed tattoo designs.
          </p>
          {/* SVG Image Goes Here */}
        </div>
        <Seperator />
        <div className="types__card">
          <div className="types__card__title d3">customs</div>
          <p className="types__card__subtitle">
            looking for a design that is more <strong>you</strong>? let’s create
            something together.
          </p>
          {/* SVG Image Goes Here */}
        </div>
      </div>
    </div>
  );
};

export default Home;
