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
import { BookingList } from "./features/bookings/index";
import { MessageList } from "./features/messages/index";
import { SettingsForm } from "./features/settings/index";

// Pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import Book from "./pages/Book";

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
              <Route index element={<Home />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="account"
                element={true ? <Account /> : <Navigate to="/login" />}
              >
                <Route index element={<BookingList />} />
                <Route path="bookings" element={<BookingList />} />
                <Route path="messages" element={<MessageList />} />
                <Route path="settings" element={<SettingsForm />} />
              </Route>
              <Route path="book" element={<Book />}>
                <Route index element={<BookingList />} />
                <Route path="type" element={<BookingList />} />
                <Route path="placement" element={<BookingList />} />
                <Route path="location" element={<BookingList />} />
                <Route path="datetime" element={<BookingList />} />
                <Route path="confirm" element={<BookingList />} />
              </Route>
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
