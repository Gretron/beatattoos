// #region Imports

// Modules
import React from "react";
import { ReactDOM } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";

// Hooks
import { useEffect, useRef } from "react";

// #endregion

function App() {
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

    ScrollSmoother.create({
      wrapper: ".wrapper",
      content: ".content",
      smooth: 1,
      smoothTouch: 0.1,
      effects: true,
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="wrapper">
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
