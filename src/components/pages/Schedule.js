import React from "react";
import "../../App.css";
import Section from "../Section.js";
import Footer from "../Footer.js";
import Sec1Image from "../../assets/images/oc2edit.jpg";
import Sec2Image from "../../assets/images/collage1.jpg";

export default function Schedule() {
  const Sec1Title = "Upcoming Tournaments";
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
  ];

  const Sec2Title = "Open-Gym Schedule";
  const OpenGymSchedule = [
    {
      subtitle: "Sundays and Mondays",
    },
  ];

  return (
    <div className='schedule'>
      <Section title={Sec1Title} sections={TourneySchedule} image={Sec1Image} />
      <Section title={Sec2Title} sections={OpenGymSchedule} image={Sec2Image} />
      <Footer />
    </div>
  );
}
