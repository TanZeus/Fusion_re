import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function Timer() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [nArr, setNArr] = useState([]);

  useEffect(() => {
    const storedTimestamps = localStorage.getItem('timestamp');
    const parsedTimestamps = storedTimestamps ? JSON.parse(storedTimestamps) : [];
    setNArr(parsedTimestamps);
  }, []);

  useEffect(() => {
    const trimmedArr = nArr.slice(-5);
    localStorage.setItem('timestamp', JSON.stringify(trimmedArr));
  }, [nArr]);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Adjust the format based on your requirements
  };

  const handleStart = () => {
    setIsRunning(true);
    setNArr(prevNArr => [...prevNArr, formatDateTime(Date.now())]);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  return (
    <div>
      <h1>{elapsedTime} seconds</h1>
      {isRunning ? (
        <button onClick={handleStop}>Stop</button>
      ) : (
        <button onClick={handleStart}>Start</button>
      )}
      <button onClick={handleReset}>Reset</button>
      <Link href="/stamps">
        <a>Stamps</a>
      </Link>
    </div>
  );
}

export default Timer;
