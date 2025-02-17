import React from "react";
import { useLocation } from "react-router-dom";
import "./booking.css";

const Booking = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const space = queryParams.get("space");

  return (
    <div>
      <h1>Booking Page</h1>
      <h2>{space ? `Booking for: ${space}` : "Select a space to book"}</h2>
      <button>Request Booking</button>
    </div>
  );
};

export default Booking;
