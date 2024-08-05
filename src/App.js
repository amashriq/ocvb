import React from 'react';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Schedule from './components/pages/Schedule';
import Photos from './components/pages/Photos';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/ocvb' element={<Home />} />
          <Route path='/ocvb/schedule' element={<Schedule />} />
          <Route path='/ocvb/photos' element={<Photos />} />
          <Route path='/ocvb/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
