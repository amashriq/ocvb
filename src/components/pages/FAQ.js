import React from "react";
import "../../App.css";
import Section from "../Section.js";
import Footer from "../Footer.js";
import Sec1Image from "../../assets/images/oc12edit.JPG";
import Sec2Image from "../../assets/images/oc15edit.JPG";
import Sec3Image from "../../assets/images/oc17.JPG";

export default function FAQ() {
  const Sec1Title = "Frequently Asked Questions - Tournaments";
  const TQuestions = [
    {
      subtitle: "Q: How do I sign up for a Tournament?",
      content: (
        <>
          A: To sign up for a tournament, message us on Instagram at
          <a
            className='link'
            href='https://www.instagram.com/ocvball'
            target='_blank'
            rel='noopener noreferrer'
          >
            @ocvball,
          </a>
          and include the names of all your friends and the positions they play.
        </>
      ),
    },
    {
      subtitle: "Q: How much does it cost to enter a Tournament?",
      content: "A: The cost to enter a tournament is usually $280 per team.",
    },
    {
      subtitle: "Q: What If I don't have a team?",
      content: (
        <>
          A: Whether you have a full team, a small group of friends, or are
          coming alone, send us a message, and we will do our best to find you a
          spot to play!
        </>
      ),
    },
  ];

  const Sec2Title = "Frequently Asked Questions - Open-Gyms";
  const OGQuestions1 = [
    {
      subtitle: "Q: How do I sign up for Open-Gyms?",
      content: (
        <>
          A: To sign up, message us on Instagram at
          <a
            className='link'
            href='https://www.instagram.com/ocvball'
            target='_blank'
            rel='noopener noreferrer'
          >
            @ocvball.
          </a>
          When messaging us, be sure to include the names of all your friends
          and the positions they play.
        </>
      ),
    },
    {
      subtitle: "Q: What if I don't have a team?",
      content: (
        <>
          A: Whether you have a full team, a small group of friends, or are
          coming alone, send us a message, and we will do our best to find you a
          spot to play!
        </>
      ),
    },
    {
      subtitle: "Q: Where are Open-Gyms held?",
      content: (
        <>
          A: Our open-gyms take place at various high schools around Montgomery
          County, with the specific location changing each week.
        </>
      ),
    },
  ];
  const Sec3Title = "Frequently Asked Questions - Open-Gyms";
  const OGQuestions2 = [
    {
      subtitle: "Q: When are Open-Gyms",
      content: (
        <>
          A: Generally Open-Gyms are in the afternoon or at night, but times
          vary so it's essential to check the schedule regularly.
        </>
      ),
    },
    {
      subtitle: "Q: How much does each Open-Gym cost",
      content: <>A: Each Open-Gym is $10 per person.</>,
    },
  ];

  return (
    <div className='FAQ'>
      <Section title={Sec1Title} sections={TQuestions} image={Sec1Image} />
      <Section title={Sec2Title} sections={OGQuestions1} image={Sec2Image} />
      <Section title={Sec3Title} sections={OGQuestions2} image={Sec3Image} />
      <Footer />
    </div>
  );
}
