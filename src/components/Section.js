import React from "react";
import "./Section.css";

function Section({ title, sections = [], image }) {
  return (
    <section className='section'>
      <div
        className='section-background'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className='section-content'>
        <h1>{title}</h1>
        {sections.map(({ subtitle, content }, index) => (
          <div key={index} className='section-item'>
            <div className='subtitle-item'>{subtitle}</div>
            {content && <div className='content-item'>{content}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section;
