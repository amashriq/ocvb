import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import TourneySched1 from "../assets/images/TCard.jpg";
import TourneySched2 from "../assets/images/TCard2.jpg";
import TourneySched3 from "../assets/images/TCard3.jpg";
import TourneySched4 from "../assets/images/TCard4.jpg";

function Cards() {
  return (
    <div className='Schedcards'>
      <h1 className='cards__title'>Upcoming Tournaments</h1>
      <h2 className='cards__subtitle'>Scroll down for past tournaments</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={TourneySched3}
              text='Click here to navigate to registration form'
              path='https://linktr.ee/ocvball?utm_source=linktree_profile_share&ltsid=9c0113e6-46ab-401a-b48a-583bc80c3df0'
            />
          </ul>
        </div>
      </div>
      <h1 className='cards__title'>Previous Tournaments</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={TourneySched4}
              text='Click here to navigate to registration form'
              path='https://linktr.ee/ocvball?utm_source=linktree_profile_share&ltsid=9c0113e6-46ab-401a-b48a-583bc80c3df0'
            />
            <CardItem
              src={TourneySched2}
              text='Click here to navigate to registration form'
              path='https://linktr.ee/ocvball?utm_source=linktree_profile_share&ltsid=9c0113e6-46ab-401a-b48a-583bc80c3df0'
            />
            <CardItem
              src={TourneySched1}
              text='Click here to navigate to registration form'
              path='https://linktr.ee/ocvball?utm_source=linktree_profile_share&ltsid=9c0113e6-46ab-401a-b48a-583bc80c3df0'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
