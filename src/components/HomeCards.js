import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import Sched from "../assets/images/MSched1.jpg";

function Cards() {
  return (
    <div className='Homecards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Sched}
              text='Click here for the full schedule!'
              path='/schedule'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
