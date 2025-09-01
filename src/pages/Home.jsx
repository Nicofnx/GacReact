import React from "react";
import Header from "../components/Header";
import VisualPresentation from "../components/VisualPresentation";
import Cards from "../components/Cards";
import AboutSection from "../components/AboutSection";
import TipsBussine from "../components/TipsBussine";

const Home = () => {
  return (
    <div >
        <VisualPresentation/>
        <Cards/>
        <AboutSection/>
        <TipsBussine/>

    </div>
  );
};

export default Home;