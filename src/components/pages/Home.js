import React from "react";
import "../../App.css";
import Hero from "../Hero";
import Section from "../Section";
import SecImage from "../../assets/images/oc3.jpg";
import Footer from "../Footer";

export default function Home() {
  const AboutUs = [
    {
      content: (
        <>
          OC Volleyball started with one goal in mind: bringing back high level,
          consistent, 6v6 volleyball to the DMV. After hosting countless
          Open-Gyms and Tournaments, OC Volleyball, along with its wonderful
          community, was able to build a reputation. Now, when you think of the
          best way to access top level volleyball in Maryland, whether it’s to
          practice or compete, you think OC.
        </>
      ),
    },
  ];

  return (
    <div className='home'>
      <Hero />
      <Section title='What is OC?' sections={AboutUs} image={SecImage} />
      <Footer />
    </div>
  );
}
