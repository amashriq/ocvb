import React from 'react';
import './Section.css';

function Section({ title, date, content, image }) {

  return (
    <section className='section'>
      <div className='section-background' style={{ backgroundImage: `url(${image})` }}></div>
      <div className='section-content'>
        <h1>{title}</h1>
        {date && <h2>{date}</h2>}
        <p>{content}</p>
      </div>
    </section>
  );
}

export default Section;
