import React from "react";
import "../../App.css";
import Footer from "../Footer.js";
import SchedCards from "../SchedCards.js";

export default function Schedule() {
  /* const Sec1Title = "Upcoming Tournaments";
  const TourneySchedule = [
    {
      subtitle: "Mens 6s Tournament - Oct 20th, 2024 | $280 per team",
      content:
        "2 Divisions: AA & BB | Location: UMD Reckord Armory | Start Time: 9am",
    },
    {
      subtitle: "Mens 6s Tournament - Nov 9th, 2024 | $280 per team",
      content:
        "2 Divisions: AA & BB | Location: UMD Reckord Armory | Start Time: 9am",
    },
    {
      subtitle: "Mens 6s Tournament - Dec 8th, 2024 | $280 per team",
      content:
        "2 Divisions: AA & BB | Location: UMD Reckord Armory | Start Time: 9am",
    },
    {
      subtitle: "Mens 6s Tournament - Jan 11th, 2025 | $280 per team",
      content:
        "2 Divisions: AA & BB | Location: UMD Reckord Armory | Start Time: 9am",
    },
  ]; */

  /* const Sec2Title = "Open-Gym Schedule";
   const OpenGymSchedule = [
    {
      subtitle: "Sundays and Tuesdays",
    },
  ]; */

  return (
    <div className='schedule'>
      <SchedCards />
      <Footer />
    </div>
  );
}
