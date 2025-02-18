import { useLocation } from "react-router-dom";
import "./gallery.css"; // Make sure this file exists

const Gallery = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const space = searchParams.get("space"); // Get space name from URL

  const roomImages = {
    "Conference Room": [
      { src: "/images/conference1.png", title: "Conference Room - View 1" },
      { src: "/images/conference2.png", title: "Conference Room - View 2" },
    ],
    "Classroom": [
      { src: "/images/classroom1.png", title: "Panel Style" },
      { src: "/images/classroom2.png", title: "Classroom Style" },
      { src: "/images/classroom3.png", title: "Conference Style" },
      { src: "/images/classroom4.png", title: "Team Style" },
    ],
    "Idea Room": [
      { src: "/images/idearoom1.png", title: "Idea Room - View 1" },
      { src: "/images/idearoom2.png", title: "Idea Room - View 2" },
    ],
  };

  const images = roomImages[space] || []; // Get images or empty array if undefined

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">{space} Gallery</h2>
      {images.length === 0 ? (
        <p className="no-images">No images available.</p>
      ) : (
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img.src} alt={img.title} className="gallery-image" />
              <p className="image-title">{img.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
