import React, {useState} from "react";
import "./styleSectionTwo.css";
import CardsSectionTwo from "./CardsSectionTwo";
import { data } from "../data";
function SectionTwo({search,rate}) {
  const [movies, setMovies] = useState(data) ;
  const [newMovie, setNewMovie] = useState({}) ;
  console.log(newMovie)
  const handleAddMovie = ()=> {
    setMovies ([...movies, newMovie])
  }
  return (
    <div className="Border-cards-container">
      <div className="add-movie">
        <div className="inputs">
     <input type="text" placeholder="Image Url"  onChange={(e)=> {
      setNewMovie({...newMovie,img: e.target.value})
      }}/>
     <input type="text" placeholder="Tiltle" onChange={(e)=> {
      setNewMovie({...newMovie, title: e.target.value})
      }}/>
     <input type="number" placeholder="Rating" min={1} max={5} onChange={(e)=> {
      setNewMovie({...newMovie,ratingnum: e.target.value})
      }}/>
     <input type="text" placeholder="Duration" onChange={(e)=> {
      setNewMovie({...newMovie,duration: e.target.value})
      }}/>
     <input type="text" placeholder="Movie Type" onChange={(e)=> {
      setNewMovie({...newMovie,movietype: e.target.value})
      }}/>
     </div>
      <button className="btn-add" onClick={()=> {
        handleAddMovie()
      }}> Add Movie</button>
      </div>
      <div className="cards-container">
        {movies.filter((card) => card.title.toLowerCase().includes(search.toLowerCase())
        ).filter((card)=> (rate? card.ratingnum === rate : card))
        .reverse()
        .map((card, index) => (
          <CardsSectionTwo
            key={index}
            {...card}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionTwo;
