import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Booking from "./components/Booking";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  );
}

export default App;

