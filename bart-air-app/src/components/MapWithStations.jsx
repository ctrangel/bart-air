// src/components/MapWithStations.jsx
import React, { useState } from "react";
import { stations } from "../data/stations";
import "./MapWithStations.css";

const MapWithStations = () => {
  const [popup, setPopup] = useState(null);

  const handleStationClick = (station) => {
    setPopup({
      name: station.name,
      coordinates: station.coordinates,
      concentration: Math.floor(Math.random() * 10) + 1 // Placeholder concentration
    });
  };

  const closePopup = () => setPopup(null);

  return (
    <div className="map-container">
      {/* Display the SVG map as an <img> */}
      <img src="/src/assets/lines(1).svg" alt="BART Map" className="bart-map" />

      {/* Overlay clickable stations */}
      {stations.map((station) => (
        <div
          key={station.id}
          onClick={() => handleStationClick(station)}
          className="station-marker"
          style={{
            left: `${station.coordinates[0]}px`, // Exact pixel values from stations.js
            top: `${station.coordinates[1]}px`,
            transform: "translate(-50%, -50%)"
          }}
        />
      ))}

      {/* Popup for station info */}
      {popup && (
        <div
          className="station-popup"
          style={{
            left: `${popup.coordinates[0]}px`,
            top: `${popup.coordinates[1]}px`,
            transform: "translate(-50%, -110%)",
            opacity: popup ? 1 : 0
          }}
        >
          <strong>{popup.name}</strong>
          <p>Concentration: {popup.concentration}</p>
          <button onClick={closePopup} style={{ border: "none", cursor: "pointer", color: "#007bff", background: "none" }}>Close</button>
        </div>
      )}
    </div>
  );
};

export default MapWithStations;
