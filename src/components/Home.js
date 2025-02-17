import React from "react";
import { Link } from "react-router-dom";
import "./home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to iSPI Space Booking</h1>
      <h3><strong>Select a space to book</strong></h3>

      <div className="space-list">
        <div className="space-card">
          <h2>Conference Room</h2>
          <p>Perfect for meetings and presentations.</p>
          <p><strong>Capacity: up to 12 people</strong></p>
          <p><strong>Features:</strong>TV with HDMI/USB/ethernet input </p>
        
          <Link to="/booking?space=conference" className="book-btn">
            Book Now
          </Link>
        </div>

        <div className="space-card">
          <h2>Classroom</h2>
          <p>Best for training sessions and classes.</p>
          <p><strong>Capacity: 20-45 people</strong></p>
          <p><strong>Features:</strong> TV with HDMI/USB/Ethernet input; round, square, and rectangular tables</p>
          <Link to="/booking?space=classroom" className="book-btn">
            Book Now
          </Link>
        </div>

        <div className="space-card">
          <h2>Idea Room</h2>
          <p>A creative space for brainstorming sessions.</p>
          <p>The idea rooms are for: </p>
          <ul>
            <li>Taking private phone calls</li>
            <li>Virtual/small group meetings</li>
            <li>Brainstorming sessions</li>
            <li>quiet reading spaces</li>
            <li>brief mediatation</li>
            <li>drawing, story-boarding, mind mapping </li>
            <li>when you just, line, need a sec</li>
            <li>etch-a-sketch drawing contests</li>
            <li>And many more....</li>
          </ul>
          <Link to="/booking?space=idea" className="book-btn">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
