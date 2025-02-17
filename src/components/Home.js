import { Link } from "react-router-dom";
import "./home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <h1>Welcome to iSPI Space Booking</h1>
      </div>

      <div className="sub-header">
        <h3><strong>Select a space to book</strong></h3>
      </div>

      <div className="space-container">
        {["Conference Room", "Classroom", "Idea Room"].map((room) => (
          <div key={room} className="space-card">
            <h2>{room}</h2>
            <p>
              {room === "Conference Room"
                ? "Perfect for meetings and presentations."
                : room === "Classroom"
                ? "Best for training sessions and classes."
                : "A creative space for brainstorming sessions."}
            </p>
            <p><strong>Capacity:</strong> {room === "Conference Room" ? "up to 12 people" : room === "Classroom" ? "20-45 people" : "Flexible"}</p>
            <p>
              <strong>Features:</strong> {room === "Conference Room"
                ? "TV with HDMI/USB/ethernet input"
                : room === "Classroom"
                ? "TV with HDMI/USB/Ethernet input; various table shapes"
                : "Perfect for brainstorming, meditation, and creative work"}
            </p>
            <Link to={`/booking?space=${encodeURIComponent(room)}`} className="book-btn">Book Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
