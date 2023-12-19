import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import "./Movie.css"
function Movie() {
  let { id } = useParams();
  let Movie = data.find((Movie) => Movie.id === id);
  return (
    <div className="extra-info">
      {Movie.trailer}
      <p className="desc">Description: {Movie.description}</p>
    </div>
  );
}

export default Movie;
