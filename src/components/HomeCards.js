import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import Sched from "../assets/images/MSched5.png";

function Cards() {
  return (
    <div className='Homecards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Sched}
              text='Click here for more links!'
              path='https://linktr.ee/ocvball?utm_source=linktree_profile_share&ltsid=9c0113e6-46ab-401a-b48a-583bc80c3df0'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
