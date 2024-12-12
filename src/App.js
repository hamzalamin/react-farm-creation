import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import CreateFarm from './components/createFarm'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-farm" element={<CreateFarm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
