// #region Imports

// Hooks
import { useEffect, useRef } from "react";

// Styles
import home from "../assets/css/home.css";

// Modules
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import { ReactComponent as Curve } from "../assets/img/curve.svg";
import { ReactComponent as Logo } from "../assets/img/logo.svg";
import { ReactComponent as Realism } from "../assets/img/realism.svg";

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

    gsap.from(".logo .title text", {
      y: 200,
      x: 0,
      stagger: 0.05,
      duration: 0.75,
      delay: 0.5,
      ease: "power4.out",
    });

    gsap.to(".logo .snake", {
      opacity: 1,
      duration: 0.75,
      delay: 1,
      ease: "power3.out",
    });

    gsap.from(".logo .subtitle text", {
      y: -100,
      duration: 0.75,
      delay: 1.25,
      ease: "power3.out",
    });

    /*
    gsap.fromTo(
      ".styles .title .letter:not(:last-child)",
      {
        letterSpacing: "min(8rem, 10vw)",
      },
      {
        scrollTrigger: {
          trigger: ".styles .title",
          pin: ".styles .title",
          start: "top middle",
          end: "bottom middle",
          scrub: 1,
        },
        letterSpacing: "min(0.2rem, 1vw)",
      }
    );

    gsap.to(".styles .title .letter", {
      scrollTrigger: {
        trigger: ".styles .title",
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

    tl.to(".styles .realism-text", {
      y: 200,
      duration: 30,
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: ".styles .images",
      pin: ".styles .images",
      start: "middle top",
      end: "bottom top",
      markers: true,
      scrub: true,
    });
    */
  }, []);

  return (
    <div className="home">
      <div className="logo">
        <Logo />
      </div>
      {/* 
      <div className="styles">
        <div className="curve">
          <Curve />
        </div>
        <div className="title">
          <div className="container">
            <span className="letter">S</span>
            <span className="letter">T</span>
            <span className="letter">Y</span>
            <span className="letter">L</span>
            <span className="letter">E</span>
            <span className="letter">S</span>
          </div>
        </div>
        <div className="images">
          <Realism />
        </div>
        <div className="curve">
          <Curve />
        </div>
      </div>
      */}
    </div>
  );
};

export default Home;
