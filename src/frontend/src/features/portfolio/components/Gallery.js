// #region Imports

// Modules
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Hooks
import { useLayoutEffect, useRef } from "react";

// Images
import _2019_0 from "../assets/img/2019-0.jpg";
import _2019_1 from "../assets/img/2019-1.jpg";
import _2019_2 from "../assets/img/2019-2.jpg";
import _2019_3 from "../assets/img/2019-3.jpg";
import _2019_4 from "../assets/img/2019-4.jpg";

// #endregion

/**
 * Gallery of Portfolio Page
 */
const Gallery = () => {
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

    tl.set({}, {}, "+=10");

    ScrollTrigger.create({
      id: "gallery",
      animation: tl,
      trigger: ".portfolio",
      start: "top top",
      end: "+=5000 top",
      snap: [0, 0.25, 0.5, 0.99],
      scrub: true,
    });
  }, []);

  return (
    <div className="gallery">
      <div className="gallery__images">
        <div className="gallery__image-container c0">
          <img src={_2019_0} alt="" className="gallery__image i0" />
        </div>
        <div className="gallery__image-container c1">
          <img src={_2019_1} alt="" className="gallery__image i1" />
        </div>
        <div className="gallery__image-container c2">
          <img src={_2019_2} alt="" className="gallery__image i2" />
        </div>
        <div className="gallery__image-container c3">
          <img src={_2019_3} alt="" className="gallery__image i3" />
        </div>
        <div className="gallery__image-container c4">
          <img src={_2019_4} alt="" className="gallery__image i4" />
        </div>
      </div>
      <div className="gallery__label d1">2019</div>
    </div>
  );
};

export default Gallery;
