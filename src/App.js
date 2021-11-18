import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Tracker from './components/tracker';
import Details from './components/details';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Tracker />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;