import React from "react";
import "../../App.css";
import "../Contact.css";
import Section from "../Section.js";
import Footer from "../Footer.js";
import BG from "../../assets/images/oc8edit.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const ContactInfo = [
    {
      subtitle: "Have any questions or concerns? Feel free to reach out!",
      content: (
        <div className='contact-link-container'>
          <a
            className='contact-link-insta'
            href='https://www.instagram.com/ocvball'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size='2x'
              className='Insta-Icon'
            />
            @ocvball
          </a>
          <a
            className='contact-link-fb'
            href='https://www.facebook.com/p/OC-Volleyball-100093042030850/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faFacebook} size='2x' className='Fb-Icon' />
            OC Volleyball
          </a>
          <div
            className='contact-link-email'
            href='mailto:nickjhingory'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              size='2x'
              className='Email-Icon'
            />
            nickjhingory@gmail.com
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className='contact'>
      <Section title='Contact Us' sections={ContactInfo} image={BG} />
      <Footer />
    </div>
  );
}
