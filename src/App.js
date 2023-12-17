import React, {useState} from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import FooterOne from "./components/FooterOne";
import FooterTwo from "./components/FooterTwo";

function App() {
  const [search, setSearch] = useState ("");
  const [rate, ratingChanged] = useState (0);
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <SectionOne setSearch= {setSearch} ratingChanged= {ratingChanged}/>
      <SectionTwo  search={search} rate= {rate}/>
      <FooterOne />
      <FooterTwo />
    </div>
  );
}

export default App;
