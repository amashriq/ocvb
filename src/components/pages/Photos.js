import React from "react";
import "../../App.css";
import Section from "../Section.js";
import Footer from "../Footer.js";
import PhotoCards from "../PhotoCards.js";
import SecImage from "../../assets/images/oc14edit.JPG";
import { Link } from "react-router-dom";
import "../Photos.css";

export default function Photos() {
  const Album = [
    {
      subtitle: (
        <div className='link-container'>
          <a
            className='photos-link'
            href='https://drive.google.com/drive/folders/1o1wJOK4LK_99Q2wCqMpzQcqUpmjt6rn4'
            target='_blank'
            rel='noopener noreferrer'
          >
            OC Mens Tournament 8/17/24.
          </a>{" "}
          <br />
          <a
            className='credit-link'
            href='https://www.instagram.com/ben.atu/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {" "}
            Photo credit: Benatu Vo
          </a>{" "}
          <br />
          <br />
          <a
            className='photos-link'
            href='https://drive.google.com/drive/folders/1GrPtO7mzzrM9kiUn_L3_G8D22-rIJtKK?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            OC Womens Tournament 10/22/23.
          </a>{" "}
          <br />
          <a
            className='credit-link'
            href='https://www.instagram.com/jsuss22/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {" "}
            Photo credit: Joey Sussman
          </a>{" "}
          <br />
          <br />
          <a
            className='photos-link'
            href='https://lightroom.adobe.com/shares/93ebbd86f662419ebedd494aa4919c83'
            target='_blank'
            rel='noopener noreferrer'
          >
            OC Mens Tournament 8/9/23.
          </a>{" "}
          <br />
          <a
            className='credit-link'
            href='https://www.instagram.com/traceys.jpg/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {" "}
            Photo credit: Tracey Tran
          </a>{" "}
          <br />
          <br />
          <a
            className='photos-link'
            href='https://lightroom.adobe.com/shares/05bc4106d8ea4edf91adfe60d2bf8be5'
            target='_blank'
            rel='noopener noreferrer'
          >
            OC Mens Tournament (1) 7/15/23.
          </a>{" "}
          <br />
          <a
            className='credit-link'
            href='https://www.instagram.com/traceys.jpg/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {" "}
            Photo credit: Tracey Tran
          </a>{" "}
          <br />
          <br />
          <a
            className='photos-link'
            href='https://drive.google.com/drive/folders/1-3DFvHRozPhoto credit:l_odq0EU2dfBo0v3OqC0i?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            OC Mens Tournament (2) 7/15/23.
          </a>{" "}
          <br />
          <a
            className='credit-link'
            href='https://www.instagram.com/moipponmedia/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {" "}
            Photo credit: Moippon Media
          </a>{" "}
          <br />
          <br />
          <a
            className='photos-link'
            href='https://lightroom.adobe.com/shares/3c60ce6714b74fe29c4247729c6d3bb8'
            target='_blank'
            rel='noopener noreferrer'
          >
            OC Mens Tournament.
          </a>{" "}
          <br />
          <a
            className='credit-link'
            href='https://www.instagram.com/bbop.on/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {" "}
            Photo credit: Brandon
          </a>{" "}
          <br />
          <br />
          <a
            className='photos-link'
            href='https://lightroom.adobe.com/shares/77662fc1319f4b9fb8c092ee1b2bbe12'
            target='_blank'
            rel='noopener noreferrer'
          >
            OC Mens Tournament 6/3/23.
          </a>{" "}
          <br />
          <a
            className='credit-link'
            href='https://www.instagram.com/bbop.on/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {" "}
            Photo credit: Brandon
          </a>{" "}
          <br />
        </div>
      ),
    },
    {
      content: (
        <div className='link-container'>
          <Link className='credit-link' to='/contact'>
            Interested in taking photos for OC? Reach out!
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className='photos'>
      <Section title='Photo Links' sections={Album} image={SecImage} />
      <Footer />
    </div>
  );
}
