import React from "react";
import VisualPresentation from "../components/VisualPresentation";
import Cards from "../components/Cards";
import AboutSection from "../components/AboutSection";
import TipsBussine from "../components/TipsBussine";
import LogosCarousel from "../components/LogosCarousel";
import TextCarousel from "../components/TextCarousel";
import FAQSection from "../components/FAQSection";
import CotizacionSection from "../components/Cotizaciones";

const Home = () => {
  return (
    <div >
        <VisualPresentation/>
        <TextCarousel/>
        <TipsBussine/>
        <Cards/>
        <LogosCarousel/>
        <AboutSection/>
        <CotizacionSection/>
        <FAQSection/>
    </div>
  );
};

export default Home;