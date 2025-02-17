import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Booking from "./components/Booking";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  );
}

export default App;
