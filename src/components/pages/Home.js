import React from 'react'
import '../../App.css'
import Hero from '../Hero'
import Section from '../Section'
import SecImage from '../../assets/images/oc3.jpg'
import Footer from '../Footer'

function Home() {
  return (
    <div className='home'>
      <Hero />
      <Section 
      title='What is OC?'
      content="OC Volleyball started with one goal in mind: bringing back high level, consistent, 6v6 volleyball to the DMV.
      After hosting countless Open-Gyms and Tournaments, OC Volleyball, along with its wonderful community, was able to build a reputation.
      Now, when you think of the best way to play volleyball in Maryland, whether it's to practice or compete, you think OC."
      image = {SecImage}
      />
      <Footer />
    </div>
  );
}

export default Home;