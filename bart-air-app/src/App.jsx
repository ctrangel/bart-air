// src/App.jsx
import React, { useState } from "react";
import MapWithStations from "./components/MapWithStations";
import { calculateConcentration } from "./utils/graph";

const App = () => {
  const [selectedStation, setSelectedStation] = useState(null);

  const handleSelectStation = (stationName) => {
    const concentration = calculateConcentration(stationName); // Adjust this logic as needed
    setSelectedStation({ name: stationName, concentration });
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>BART Concentration Viewer</h1>
      <MapWithStations onSelectStation={handleSelectStation} />
      {selectedStation && (
        <div style={{ marginTop: "20px" }}>
          <p>
            <strong>Station:</strong> {selectedStation.name}
          </p>
          <p>
            <strong>Concentration:</strong> {selectedStation.concentration}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
