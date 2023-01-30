// #region Imports

// Modules
import { gsap } from "gsap";

// Hooks
import { useEffect, useRef } from "react";

// Images
import { ReactComponent as LogoVector } from "../assets/img/logo.svg";

// #endregion

/**
 * Logo Component of Home Page
 */
const Logo = () => {
  const loaded = useRef(false);

  useEffect(() => {
    // If Component Already Loaded...
    if (loaded.current) {
      // Skip
      return;
    }
    // Else Play Animation
    loaded.current = true;

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
  }, []);

  return (
    <div className="logo">
      <LogoVector />
    </div>
  );
};

export default Logo;
