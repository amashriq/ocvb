import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Route path='/' exact Component={Home} />
        <Route path='/schedule' Component={Schedule} />
        <Route path='/photos' Component={Photos} />
        <Route path='/contact' Component={Contact} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
