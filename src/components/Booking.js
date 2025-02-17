import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./booking.css";

const Booking = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const space = params.get("space") || "Unknown Space";
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="booking-container">
      <h1>Book {space}</h1>
      <p>Select a date for your booking:</p>

      <div className="calendar-container">
        <DatePicker 
          selected={selectedDate} 
          onChange={(date) => setSelectedDate(date)} 
          inline
        />
      </div>

      <div className="button-group">
        <button className="confirm-btn">Confirm Booking</button>
        <Link to="/" className="cancel-btn">Cancel</Link>
      </div>
    </div>
  );
};

export default Booking;
