import React from "react";
import "./App.css";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import FooterOne from "./FooterOne";
import FooterTwo from "./FooterTwo";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <SectionOne />
      <SectionTwo />
      <FooterOne />
      <FooterTwo />
    </div>
  );
}

export default App;
