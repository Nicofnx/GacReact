import React from "react";
import Header from "../components/Header";
import VisualPresentation from "../components/VisualPresentation";
import Cards from "../components/Cards";
import AboutSection from "../components/AboutSection";

const Home = () => {
  return (
    <div style={{ padding: "2rem" }}>
        <Header/>
        <VisualPresentation/>
        <Cards/>
        <AboutSection/>

    </div>
  );
};

export default Home;