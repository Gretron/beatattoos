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

import { BookingList } from "./features/bookings";
import { MessageList } from "./features/messages";
import { SettingsForm } from "./features/settings";

import {
  TypeForm,
  FlashForm,
  CustomForm,
  NoteForm,
  DescriptionForm,
  PlacementCanvas,
} from "./features/book";

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
      wrapper: ".beatattoos__wrapper",
      content: ".beatattoos__content",
      smooth: 1,
      smoothTouch: 0.1,
      effects: true,
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="beatattoos__wrapper">
          <div className="beatattoos__content">
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
                <Route index element={<Navigate to="type" />} />
                <Route path="type">
                  <Route index element={<Navigate to="select" />} />
                  <Route path="select" element={<TypeForm />} />
                  <Route path="flash" element={<FlashForm />} />
                  <Route path="custom" element={<CustomForm />} />
                  <Route path="note" element={<NoteForm />} />
                  <Route path="description" element={<DescriptionForm />} />
                </Route>
                <Route path="placement" element={<PlacementCanvas />}>
                  <Route path="*" element={<div></div>} />
                </Route>
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
