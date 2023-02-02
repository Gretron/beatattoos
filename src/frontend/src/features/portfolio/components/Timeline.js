// #region Imports

// Modules
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import { ReactComponent as Star } from "../../../assets/img/star.svg";
import { ReactComponent as Gun } from "../assets/img/gun.svg";

// Hooks
import { useLayoutEffect, useRef } from "react";

// #endregion

const StarImage = ({ className, ...props }) => (
  <Star {...props} className={className} />
);

const GunImage = ({ className, ...props }) => (
  <Gun {...props} className={className} />
);

/**
 * Timeline of Portfolio Page
 */
const Timeline = () => {
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

    tl.to(".timeline__gun", {
      left: "33.3%",
      duration: "10",
    });

    tl.to(
      ".timeline__indicator",
      {
        width: "33.3%",
        duration: "10",
      },
      "<"
    );

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
        duration: "10",
      },
      ">=+5"
    );

    tl.to(
      ".timeline__indicator",
      {
        width: "66.6%",
        duration: "10",
      },
      "<"
    );

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
        duration: "10",
      },
      ">=+5"
    );

    tl.to(
      ".timeline__indicator",
      {
        width: "99.9%",
        duration: "10",
      },
      "<"
    );

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
    <div className="timeline">
      <div className="timeline__line">
        <div className="timeline__indicator"></div>
      </div>
      <div className="timeline__point point-0">
        <StarImage className="timeline__star star-0" />
        <div className="timeline__label label-0 h6">2019</div>
      </div>
      <div className="timeline__point point-1">
        <StarImage className="timeline__star star-1" />
        <div className="timeline__label label-1 h6">2020</div>
      </div>
      <div className="timeline__point point-2">
        <StarImage className="timeline__star star-2" />
        <div className="timeline__label label-2 h6">2021</div>
      </div>
      <div className="timeline__point point-3">
        <StarImage className="timeline__star star-3" />
        <div className="timeline__label label-3 h6">2022</div>
      </div>
      <div className="timeline__gun-container">
        <GunImage className="timeline__gun" />
      </div>
    </div>
  );
};

export default Timeline;
