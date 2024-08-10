// File: src/components/IncidentReports.js
import React, { useEffect, useState } from 'react';
import './IncidentReports.css';

function IncidentReports() {
  const [data, setData] = useState([]); // State for holding data

  useEffect(() => {
    // Example of fetching data
    fetch('/api/incident-data') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="incident-reports">
      <h1>Incident Reports Data</h1>
      <div className="visualization">
        {data.length > 0 ? (
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
}

export default IncidentReports;
