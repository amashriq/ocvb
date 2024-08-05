import React from "react";
import "./Hero.css";
import "../App.css";

function Hero() {
  return (
    <div className='hero-container'>
      <div className='hero-overlay'>
        <h1>
          Outta <br />
          Control <br />
          Volleyball
        </h1>
        <p>Play in the best Open-Gyms and Tournaments in Maryland!</p>
      </div>
    </div>
  );
}

export default Hero;
