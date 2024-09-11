import React from "react";
import "../../App.css";
import Section from "../Section.js";
import Footer from "../Footer.js";
import Sec1Image from "../../assets/images/oc2edit.jpg";
import Sec2Image from "../../assets/images/collage1.jpg";

export default function Schedule() {
  const Sec1Title = "Open-Gym Schedule";
  const Sec1Date = (
    <>
      No upcoming Open-Gyms <br />
      How it works:
    </>
  );
  const Sec1Content = (
    <>
      Our open-gyms take place at various high schools around Montgomery County,
      with the specific location changing each week. Similarly, the times vary,
      so it’s essential to check the schedule regularly. During open-gyms, we
      limit the number of teams to about three per court to ensure everyone gets
      ample playing time. They fill up fast, so it is best to sign up as soon as
      possible! To sign up, message us on Instagram at
      <a
        className='link'
        href='https://www.instagram.com/ocvball'
        target='_blank'
        rel='noopener noreferrer'
      >
        @ocvball,
      </a>
      whether you have a full team, a small group of friends, or are coming
      alone; we will do our best to find you a spot to play. When messaging us,
      be sure to include the names of all your friends and the positions they
      play. Each open-gym costs $10 per player.
    </>
  );

  const Sec2Title = "Upcoming Tournaments";
  const Sec2Date = (
    <>
      Mens 6s Tournament - Oct 20th, 2024 | $280 per team <br />
      Mens 6s Tournament - Nov 9th, 2024 | $280 per team
    </>
  );
  const Sec2Content = (
    <>
      Hello everyone! OC Volleyball will be hosting tournaments on October 20th
      and November 9th at the
      <a
        className='link'
        href='https://g.co/kgs/w6bVbXz'
        target='_blank'
        rel='noopener noreferrer'
      >
        UMD Reckord Armory.
      </a>
      These tournaments will feature two divisions, AA & BB, both with cash
      prizes and soon to be revealed merch. Anyone wanting to play but not able
      to make a team, send us a message at
      <a
        className='link'
        href='https://www.instagram.com/ocvball'
        target='_blank'
        rel='noopener noreferrer'
      >
        @ocvball
      </a>
      on Instagram!
    </>
  );

  return (
    <div className='schedule'>
      <Section
        title={Sec1Title}
        date={Sec1Date}
        content={Sec1Content}
        image={Sec1Image}
      />
      <Section
        title={Sec2Title}
        content={Sec2Content}
        date={Sec2Date}
        image={Sec2Image}
      />
      <Footer />
    </div>
  );
}
