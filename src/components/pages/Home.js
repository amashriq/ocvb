import React from "react";
import "../../App.css";
import Hero from "../Hero";
import Section from "../Section";
import Cards from "../HomeCards";
import SecImage from "../../assets/images/oc16edit.JPG";
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
      <Cards />
      <Section title='What is OC?' sections={AboutUs} image={SecImage} />
      <Footer />
    </div>
  );
}
