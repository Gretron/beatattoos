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

    let sm = ScrollSmoother.get();

    // If Smooth Scroller Exists...
    if (sm) {
      // If Lower Than Top of Page...
      if (sm.scrollTop() > 0) {
        // Stop Smooth Scrolling, Go to Top, Start Smooth Scrolling
        sm.paused(true).scrollTop(0).paused(false);

        // Refresh Potentially Bugged ScrollTriggers
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);
      }
    }
  }, []);

  return null;
}

export default ScrollToTopOnMount;
