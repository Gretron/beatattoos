// #region Imports

// Styles
import portfolio from "../features/portfolio/assets/css/portfolio.css";

// Components
import { Gallery } from "../features/portfolio/index";
import { Timeline } from "../features/portfolio/index";

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

    // Timeline Transition

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

    // #region Image Set 0-1 Transitions

    tl.to(
      ":is(.gallery__image)._0",
      {
        x: "-101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ":is(.gallery__image)._1",
      {
        y: "-101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ":is(.gallery__image)._2",
      {
        x: "101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ":is(.gallery__image)._3",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ":is(.gallery__image)._4",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ":is(.gallery__image)._5",
      {
        x: "-101%",
        duration: 5,
      },
      ">"
    );

    tl.from(
      ":is(.gallery__image)._6",
      {
        y: "-101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ":is(.gallery__image)._7",
      {
        x: "101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ":is(.gallery__image)._8",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ":is(.gallery__image)._9",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    // #endregion

    // Checkpoint 1

    tl.set(
      ".star-1",
      {
        fill: "var(--brown)",
      },
      ">"
    );

    tl.set(
      ".label-1",
      {
        color: "var(--brown)",
      },
      "<"
    );

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

    // #region Image Set 1-2 Transitions

    tl.to(
      ":is(.gallery__image)._5",
      {
        x: "-101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ":is(.gallery__image)._6",
      {
        y: "-101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ":is(.gallery__image)._7",
      {
        x: "101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ":is(.gallery__image)._8",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ":is(.gallery__image)._9",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ":is(.gallery__image)._10",
      {
        x: "-101%",
        duration: 5,
      },
      ">"
    );

    tl.from(
      ":is(.gallery__image)._11",
      {
        y: "-101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ":is(.gallery__image)._12",
      {
        x: "101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ":is(.gallery__image)._13",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ":is(.gallery__image)._14",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    // #endregion

    tl.set(
      ".star-2",
      {
        fill: "var(--brown)",
      },
      ">"
    );

    tl.set(
      ".label-2",
      {
        color: "var(--brown)",
      },
      "<"
    );

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

    // #region Image Set 1-2 Transitions

    tl.to(
      ":is(.gallery__image)._10",
      {
        x: "-101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ":is(.gallery__image)._11",
      {
        y: "-101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ":is(.gallery__image)._12",
      {
        x: "101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ":is(.gallery__image)._13",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.to(
      ":is(.gallery__image)._14",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ":is(.gallery__image)._15",
      {
        x: "-101%",
        duration: 5,
      },
      ">"
    );

    tl.from(
      ":is(.gallery__image)._16",
      {
        y: "-101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ":is(.gallery__image)._17",
      {
        x: "101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ":is(.gallery__image)._18",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    tl.from(
      ":is(.gallery__image)._19",
      {
        y: "101%",
        duration: 5,
      },
      "<"
    );

    // #endregion

    tl.set(
      ".star-3",
      {
        fill: "var(--brown)",
      },
      ">"
    );

    tl.set(
      ".label-3",
      {
        color: "var(--brown)",
      },
      "<"
    );

    tl.set({}, {}, "+=10");

    ScrollTrigger.create({
      id: "timeline",
      animation: tl,
      trigger: ".portfolio",
      pin: ".portfolio",
      start: "top top",
      end: "+=5000 top",
      snap: [0, 0.25, 0.5, 0.99],
      markers: true,
      scrub: true,
    });
  }, []);

  return (
    <div className="portfolio">
      <Gallery />
      <Timeline />
    </div>
  );
};

export default Portfolio;
