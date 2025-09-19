import React from "react";
import VisualPresentation from "../components/VisualPresentation";
import Cards from "../components/Cards";
import AboutSection from "../components/AboutSection";
import TipsBussine from "../components/TipsBussine";
import LogosCarousel from "../components/LogosCarousel";
import TextCarousel from "../components/TextCarousel";

const Home = () => {
  return (
    <div >
        <VisualPresentation/>
        <TextCarousel/>
        <TipsBussine/>
        <Cards/>
        <LogosCarousel/>
        <AboutSection/>
    </div>
  );
};

export default Home;