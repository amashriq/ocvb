import React from "react";
import Navbar from "./components/Navbar";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Schedule from "./components/pages/Schedule";
import Photos from "./components/pages/Photos";
import Contact from "./components/pages/Contact";
import FAQ from "./components/pages/FAQ";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/tournaments' exact element={<Schedule />} />
          <Route path='/photos' exact element={<Photos />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/FAQ' exact element={<FAQ />} />
          <Route path='/' exact element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
