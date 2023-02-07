// #region Imports

// Styles
import styles from "../assets/css/gallery.css";

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

import _2020_0 from "../assets/img/2020-0.jpg";
import _2020_1 from "../assets/img/2020-1.jpg";
import _2020_2 from "../assets/img/2020-2.jpg";
import _2020_3 from "../assets/img/2020-3.jpg";
import _2020_4 from "../assets/img/2020-4.jpg";

import _2021_0 from "../assets/img/2021-0.jpg";
import _2021_1 from "../assets/img/2021-1.jpg";
import _2021_2 from "../assets/img/2021-2.jpg";
import _2021_3 from "../assets/img/2021-3.jpg";
import _2021_4 from "../assets/img/2021-4.jpg";

import _2022_0 from "../assets/img/2022-0.jpg";
import _2022_1 from "../assets/img/2022-1.jpg";
import _2022_2 from "../assets/img/2022-2.jpg";
import _2022_3 from "../assets/img/2022-3.jpg";
import _2022_4 from "../assets/img/2022-4.jpg";

// #endregion

/**
 * Gallery of Portfolio Page
 */
const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__images _0">
        <div className="gallery__image-container _0">
          <img src={_2019_0} alt="" className="gallery__image _0 caca" />
        </div>
        <div className="gallery__image-container _1">
          <img src={_2019_1} alt="" className="gallery__image _1" />
        </div>
        <div className="gallery__image-container _2">
          <img src={_2019_2} alt="" className="gallery__image _2" />
        </div>
        <div className="gallery__image-container _3">
          <img src={_2019_3} alt="" className="gallery__image _3" />
        </div>
        <div className="gallery__image-container _4">
          <img src={_2019_4} alt="" className="gallery__image _4" />
        </div>
      </div>
      <div className="gallery__label-container">
        <div className="gallery__label _0 d1">2019</div>
      </div>

      <div className="gallery__images _1">
        <div className="gallery__image-container _5">
          <img src={_2020_0} alt="" className="gallery__image _5" />
        </div>
        <div className="gallery__image-container _6">
          <img src={_2020_1} alt="" className="gallery__image _6" />
        </div>
        <div className="gallery__image-container _7">
          <img src={_2020_2} alt="" className="gallery__image _7" />
        </div>
        <div className="gallery__image-container _8">
          <img src={_2020_3} alt="" className="gallery__image _8" />
        </div>
        <div className="gallery__image-container _9">
          <img src={_2020_4} alt="" className="gallery__image _9" />
        </div>
      </div>
      <div className="gallery__label-container">
        <div className="gallery__label _1 d1">2020</div>
      </div>

      <div className="gallery__images _2">
        <div className="gallery__image-container _10">
          <img src={_2021_0} alt="" className="gallery__image _10" />
        </div>
        <div className="gallery__image-container _11">
          <img src={_2021_1} alt="" className="gallery__image _11" />
        </div>
        <div className="gallery__image-container _12">
          <img src={_2021_2} alt="" className="gallery__image _12" />
        </div>
        <div className="gallery__image-container _13">
          <img src={_2021_3} alt="" className="gallery__image _13" />
        </div>
        <div className="gallery__image-container _14">
          <img src={_2021_4} alt="" className="gallery__image _14" />
        </div>
      </div>
      <div className="gallery__label-container">
        <div className="gallery__label _2 d1">2021</div>
      </div>

      <div className="gallery__images _3">
        <div className="gallery__image-container _15">
          <img src={_2022_0} alt="" className="gallery__image _15" />
        </div>
        <div className="gallery__image-container _16">
          <img src={_2022_1} alt="" className="gallery__image _16" />
        </div>
        <div className="gallery__image-container _17">
          <img src={_2022_2} alt="" className="gallery__image _17" />
        </div>
        <div className="gallery__image-container _18">
          <img src={_2022_3} alt="" className="gallery__image _18" />
        </div>
        <div className="gallery__image-container _19">
          <img src={_2022_4} alt="" className="gallery__image _19" />
        </div>
      </div>
      <div className="gallery__label-container">
        <div className="gallery__label _3 d1">2022</div>
      </div>
    </div>
  );
};

export default Gallery;
