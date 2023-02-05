import { useEffect, useRef } from "react";
// Modules
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

function ScrollToTopOnMount() {
  const loaded = useRef(false);

  useEffect(() => {
    // If Component Already Loaded...
    if (loaded.current) {
      // Skip
      return;
    }

    // Else Play Animation
    loaded.current = true;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let sm = ScrollSmoother.get();

    // If Smooth Scroller Exists...
    if (sm) {
      // If Lower Than Top of Page...
      if (sm.scrollTop() > 1) {
        // Refresh Potentially Bugged ScrollTriggers
        const refresh = () => {
          sm.paused(false);
          ScrollTrigger.refresh();
          ScrollTrigger.removeEventListener("scrollEnd", refresh);

          /*console.log("ScrollToTop Fired.");*/
        };

        ScrollTrigger.addEventListener("scrollEnd", refresh);

        // Stop Smooth Scrolling, Go to Top, Start Smooth Scrolling
        sm.paused(true).scrollTop(1);
      }
    }
  }, []);

  return null;
}

export default ScrollToTopOnMount;
