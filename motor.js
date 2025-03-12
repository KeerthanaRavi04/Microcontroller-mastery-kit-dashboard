import React, { useState, useEffect } from "react";
import "./motor.css";

const ThreeDImage = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

  // Update rotation dynamically
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => ({
        x: (prev.x + 1) % 360, // Increment x-axis
        y: (prev.y + 2) % 360, // Increment y-axis
        z: (prev.z + 3) % 360, // Increment z-axis
      }));
    }, 2000); // Update every 100ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="three-d-container">
      <div
        className="three-d-plane"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
        }}
      >
        <img
          src="https://via.placeholder.com/300" // Replace with your image URL
          alt="3D Plane"
        />
      </div>
    </div>
  );
};

export default ThreeDImage;
