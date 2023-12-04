import React from "react";
import "./styleSectionTwo.css";
import CardsSectionTwo from "./CardsSectionTwo";
import { data } from "./data";

function SectionTwo() {
  return (
    <div className="Border-cards-container">
      <div className="cards-container">
        {data.map((card, index) => (
          <CardsSectionTwo
            key={index}
            {...card}
            //img={card.img}
            //ratingnum={card.ratingnum}
            //title={card.title}
            //duration={card.duration}
            //movietype={card.movietype}
          />
        ))}
        {/*<CardsSectionTwo
        img={""}
        ratingnum={}
        title={""}
        duration={""}
        movietype={""}
  />*/}
      </div>
    </div>
  );
}

export default SectionTwo;
