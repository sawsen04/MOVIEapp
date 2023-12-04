import React from "react";
import { FaStar } from "react-icons/fa";
import "./styleSectionTwo.css";
function CardsSectionTwo({ img, ratingnum, title, duration, movietype }) {
  return (
    <div className="cart">
      <div className="image">
        <img src={img} alt="" width={250} />
      </div>
      <div className="rating">
        <FaStar color="yellow" size={25} />
        <p>{ratingnum}</p>
      </div>
      <h1>{title}</h1>
      <div className="description">
        <h2>{duration}</h2>
        <h3>{movietype}</h3>
      </div>
    </div>
  );
}

export default CardsSectionTwo;
