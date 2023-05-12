import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Timer from './Timer';
import Stamps from './Stamps';
import './Stamps.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Timer />} />
          <Route path="/Stamps" element={<Stamps />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
