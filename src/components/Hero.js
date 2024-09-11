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
        <p>
          Make sure to follow our Socials for all the most up to date
          information!
        </p>
      </div>
    </div>
  );
}

export default Hero;
