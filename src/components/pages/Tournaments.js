import React from "react";
import "../../App.css";
import Footer from "../Footer.js";
import SchedCards from "../SchedCards.js";

export default function Schedule() {
  return (
    <div className='schedule'>
      <SchedCards />
      <Footer />
    </div>
  );
}
