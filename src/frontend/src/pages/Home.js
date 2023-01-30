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
import Slider from "../components/Slider";
import { ReactComponent as Curve } from "../assets/img/curve.svg";
import { ReactComponent as Logo } from "../assets/img/logo.svg";
import { ReactComponent as Styles } from "../assets/img/styles.svg";
import { ReactComponent as Reveal } from "../assets/img/reveal.svg";
import { ReactComponent as Flashes } from "../assets/img/flashes.svg";
import { ReactComponent as Customs } from "../assets/img/customs.svg";

// #endregion

/**
 * Home Page
 */
const Home = () => {
  const loaded = useRef(false);

  const revealCallback = (value) => {
    document.querySelector("#reveal__rect").setAttribute("width", `${value}%`);
  };

  useEffect(() => {
    // If Component Already Loaded...
    if (loaded.current) {
      // Skip
      return;
    }
    // Else Play Animation
    loaded.current = true;

    gsap.registerPlugin(ScrollTrigger);

    // Logo Animations
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

    // Styles Title Animations
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
        scrub: true,
      },
      fontFamily: "Proclamate Heavy",
      textTransform: "lowercase",
      stagger: {
        from: "random",
        amount: 1,
      },
    });

    // Styles Images Animations
    let tl = gsap.timeline();

    tl.to(
      ".styles__images .realism-text",
      {
        y: 200,
        duration: 10,
      },
      "5"
    );

    tl.from(
      ".styles__images .old-school-text",
      {
        y: -210,
        duration: 10,
      },
      "<"
    );

    tl.from(
      ".styles__images .old-school-image",
      {
        y: -600,
        stagger: 3,
        duration: 10,
      },
      "<"
    );

    tl.to(
      ".styles__images .old-school-text",
      {
        y: 210,
        duration: 10,
      },
      ">+=5"
    );

    tl.from(
      ".styles__images .fine-line-text",
      {
        y: -210,
        duration: 10,
      },
      "<"
    );

    tl.from(
      ".styles__images .fine-line-image",
      {
        y: -600,
        stagger: 3,
        duration: 10,
      },
      "<"
    );

    ScrollTrigger.create({
      animation: tl,
      trigger: ".styles__images",
      pin: ".styles__images",
      start: "middle top",
      end: "bottom top",
      snap: [0.5, 1],
      scrub: true,
    });
  }, []);

  return (
    <div className="home">
      <div className="logo">
        <Logo />
      </div>

      <div className="styles">
        <div className="styles__curve">
          <Curve />
        </div>
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
        <div className="styles__curve">
          <Curve />
        </div>
      </div>

      <div className="coverups">
        <div className="coverups__container">
          <div className="coverups__title d2">cover-ups</div>
          <p className="coverups__subtitle">
            looking to cover up a tattoo? you’ve come to the right place. turn a
            poor decision into a work of art.
          </p>
          <Reveal />
          <Slider
            min={0}
            max={100}
            labelOne={"original"}
            labelTwo={"covered"}
            callback={revealCallback}
          />
        </div>
      </div>

      <div className="types">
        <div className="types__container">
          <div className="types__card">
            <div className="types__card__title d3">flashes</div>
            <p className="types__card__subtitle">
              select from a collection of pre-constructed tattoo designs.
            </p>
            <Flashes />
          </div>
          <Seperator />
          <div className="types__card">
            <div className="types__card__title d3">customs</div>
            <p className="types__card__subtitle">
              looking for a design that is more <strong>you</strong>? let’s
              create something together.
            </p>
            <Customs />
          </div>
        </div>
        <button className="outline--button">book now</button>
      </div>
    </div>
  );
};

export default Home;
