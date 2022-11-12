import { useState, useEffect } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlacesToStay from "./pages/PlacesToStay";
const App = () => {
  return (
    <div className="App">
      <Home />
      <BrowserRouter>
        <Routes>
          <Route to="/" element={<Home />} />
          <Route to="/places" element={<PlacesToStay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
