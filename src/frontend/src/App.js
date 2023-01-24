import React from "react";
import { ReactDOM } from "react";

// Components
import Header from "./components/Header";

// Pages
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
