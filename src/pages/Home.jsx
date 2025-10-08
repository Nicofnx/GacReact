import VisualPresentation from "../components/VisualPresentation";
import Cards from "../components/Cards";
import AboutSection from "../components/AboutSection";
import TipsBussine from "../components/TipsBussine";
import LogosCarousel from "../components/LogosCarousel";
import TextCarousel from "../components/TextCarousel";
import FAQSection from "../components/FAQSection";
import CotizacionSection from "../components/Cotizaciones";
import styled from "styled-components";

import React, { useEffect } from "react";

const MainContainer = styled.div`
  padding: 110px 0 0 0;
`

const Home = () => {

  useEffect(() => {
    const sectionId = localStorage.getItem("scrollToSection");
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 300); 
      }
      localStorage.removeItem("scrollToSection");
    }
  }, []);


  return (
    <MainContainer >
        <VisualPresentation/>
        <TextCarousel/>
        <TipsBussine/>
        <Cards/>
        <LogosCarousel/>
        <AboutSection/>
        <CotizacionSection/>
        <FAQSection/>
    </MainContainer>
  );
};

export default Home;