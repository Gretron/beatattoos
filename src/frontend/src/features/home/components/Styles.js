// #region Imports

// Modules
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Hooks
import { useLayoutEffect, useRef } from "react";

// Images
import { ReactComponent as StylesVector } from "../assets/img/styles.svg";
import { ReactComponent as Curve } from "../../../assets/img/curve.svg";

// #endregion

/**
 * Styles Component of Home Page
 */
const Styles = () => {
  const loaded = useRef(false);

  useLayoutEffect(() => {
    // If Component Already Loaded...
    if (loaded.current) {
      // Skip
      return () => {
        let sts = [
          ScrollTrigger.getById("styles-title-spacing"),
          ScrollTrigger.getById("styles-title-font"),
          ScrollTrigger.getById("styles-images"),
        ];

        if (sts)
          sts.forEach((st) => {
            st.kill();
          });
      };
    }

    // Else Play Animation
    loaded.current = true;

    gsap.registerPlugin(ScrollTrigger);

    // Styles Title Animations
    gsap.fromTo(
      ".styles__title .letter:not(:last-child)",
      {
        letterSpacing: "min(8rem, 10vw)",
      },
      {
        scrollTrigger: {
          id: "styles-title-spacing",
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
        id: "styles-title-font",
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
      id: "styles-images",
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
        <StylesVector />
      </div>
      <div className="styles__curve">
        <Curve />
      </div>
    </div>
  );
};

export default Styles;
