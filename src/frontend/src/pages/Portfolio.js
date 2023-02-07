// #region Imports

// Components
import { portfolio, Gallery, Timeline } from "../features/portfolio/index";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

// Modules
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Hooks
import { useLayoutEffect, useRef } from "react";

// #endregion

/**
 * Portfolio Page
 */
const Portfolio = () => {
  // Component Loaded Flag
  const loaded = useRef(false);

  useLayoutEffect(() => {
    // If Component Already Loaded...
    if (loaded.current) {
      // Skip
      return () => {
        let st = ScrollTrigger.getById("timeline");

        if (st) st.kill();
      };
    }

    // Else Play Animation
    loaded.current = true;

    gsap.registerPlugin(ScrollTrigger);

    // Portfolio Animations
    let tl = gsap.timeline();

    // #region Transition to 2020

    tl.to(".timeline__gun", {
      left: "33.3%",
      duration: 10,
    });

    tl.to(
      ".timeline__indicator",
      {
        width: "33.3%",
        duration: 10,
      },
      "<"
    );

    tl.to(
      ".gallery__label._0",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ".gallery__image._0",
      {
        x: "-101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ".gallery__image._1",
      {
        y: "-101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ".gallery__image._2",
      {
        x: "101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ".gallery__image._3",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ".gallery__image._4",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ".gallery__label._1",
      {
        y: "-101%",
        duration: 5,
      },
      ">"
    );

    tl.from(
      ".gallery__image._5",
      {
        x: "-101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ".gallery__image._6",
      {
        y: "-101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ".gallery__image._7",
      {
        x: "101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ".gallery__image._8",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ".gallery__image._9",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.set(
      ".timeline__star._1",
      {
        fill: "var(--brown)",
      },
      ">"
    );

    tl.set(
      ".timeline__label._1",
      {
        color: "var(--brown)",
      },
      "<"
    );

    // #endregion

    // #region Transition to 2021

    tl.to(
      ".timeline__gun",
      {
        left: "66.6%",
        duration: 10,
      },
      ">=+5"
    );

    tl.to(
      ".timeline__indicator",
      {
        width: "66.6%",
        duration: 10,
      },
      "<"
    );

    tl.to(
      ".gallery__label._1",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ".gallery__image._5",
      {
        x: "-101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ".gallery__image._6",
      {
        y: "-101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ".gallery__image._7",
      {
        x: "101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ".gallery__image._8",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ".gallery__image._9",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ".gallery__label._2",
      {
        y: "-101%",
        duration: 5,
      },
      ">"
    );

    tl.from(
      ".gallery__image._10",
      {
        x: "-101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ".gallery__image._11",
      {
        y: "-101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ".gallery__image._12",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ".gallery__image._13",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ".gallery__image._14",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.set(
      ".timeline__star._2",
      {
        fill: "var(--brown)",
      },
      ">"
    );

    tl.set(
      ".timeline__label._2",
      {
        color: "var(--brown)",
      },
      "<"
    );

    // #endregion

    // #region Transition to 2022

    tl.to(
      ".timeline__gun",
      {
        left: "99.9%",
        duration: 10,
      },
      ">=+5"
    );

    tl.to(
      ".timeline__indicator",
      {
        width: "99.9%",
        duration: 10,
      },
      "<"
    );

    tl.to(
      ".gallery__label._2",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ".gallery__image._10",
      {
        x: "-101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ".gallery__image._11",
      {
        y: "-101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ".gallery__image._12",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ".gallery__image._13",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ".gallery__image._14",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ".gallery__label._3",
      {
        y: "-101%",
        duration: 5,
      },
      ">"
    );

    tl.from(
      ".gallery__image._15",
      {
        x: "-101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ".gallery__image._16",
      {
        y: "-101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ".gallery__image._17",
      {
        x: "101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ".gallery__image._18",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ".gallery__image._19",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.set(
      ".timeline__star._3",
      {
        fill: "var(--brown)",
      },
      ">"
    );

    tl.set(
      ".timeline__label._3",
      {
        color: "var(--brown)",
      },
      "<"
    );

    // #endregion

    // Add Gap at End
    tl.set({}, {}, "+=10");

    ScrollTrigger.create({
      id: "timeline",
      animation: tl,
      trigger: ".portfolio",
      pin: ".portfolio",
      start: "top top",
      end: "+=5000 top",
      /*snap: [0, 0.25, 0.5, 0.99],*/
      scrub: true,
    });
  }, []);

  return (
    <div className="portfolio">
      <ScrollToTopOnMount />
      <Gallery />
      <Timeline />
    </div>
  );
};

export default Portfolio;
