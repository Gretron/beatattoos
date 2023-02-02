// #region Imports

// Modules
import React from "react";
import { ReactDOM } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

// Hooks
import { useEffect, useRef } from "react";

// #endregion

function App() {
  const loaded = useRef(false);

  useEffect(() => {
    // If Component Already Loaded...
    if (loaded.current) {
      // Skip
      return; /*() => {
        let st = ScrollSmoother.getById("timeline");

        if (st) st.kill();
      };*/
    }

    // Else Play Animation
    loaded.current = true;

    gsap.registerPlugin(ScrollSmoother);

    const sm = ScrollSmoother.create({
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
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
