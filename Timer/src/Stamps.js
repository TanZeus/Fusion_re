import React,{ useState, useEffect } from 'react';
import './Stamps.css';

function Stamps() {
  const [timestamps, setTimestamps] = useState([]);

  useEffect(() => {
    const storedTimestamps = localStorage.getItem('timestamp');
    const parsedTimestamps = storedTimestamps ? JSON.parse(storedTimestamps) : [];
    setTimestamps(parsedTimestamps);
  }, []);

  return (
    <div className="Stamps" style={{ backgroundColor: 'red' }}>
      <h1>Timestamps:</h1>
      <ul>
        {timestamps.map((timestamp, index) => (
          <li key={index}>{timestamp}</li>
        ))}
      </ul>
    </div>
  );
}

export default Stamps;
