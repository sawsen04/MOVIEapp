import React from "react";
import "./styleSectionTwo.css";
function CardsSectionTwo({ img, ratingnum, title, duration, movietype }) {
  return (
    <div className="cart">
      <div className="image">
        <img src={img} alt="" width={250} />
      </div>
      <div className="rating">
        <p>{"⭐".repeat(ratingnum)}</p>
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
