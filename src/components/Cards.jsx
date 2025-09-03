import React from "react";
import styled from "styled-components";
import Industry from "../assets/industria.png"
import ObraEnd from "../assets/fin_de_obra.jpg"
import Shopping from "../assets/shopping.jpg"
import Oficce from "../assets/office.webp"
import Deposit from "../assets/depo.jpg"
import Event from "../assets/event.webp"
import { Fade } from "react-awesome-reveal";

const Section = styled.section`
  background-color: #a3def5;
  width: 100%;
  padding: 2rem 0;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 100' preserveAspectRatio='none'><circle cx='75' cy='10' r='10' fill='rgba(255,255,255,0.3)'/><circle cx='120' cy='90' r='45' fill='rgba(255,255,255,0.3)'/><circle cx='90' cy='60' r='40' fill='rgba(255,255,255,0.3)'/><circle cx='120' cy='90' r='45' fill='rgba(255,255,255,0.3)'/><circle cx='160' cy='75' r='25' fill='rgba(255,255,255,0.3)'/><circle cx='200' cy='90' r='45' fill='rgba(255,255,255,0.3)'/><circle cx='220' cy='65' r='35' fill='rgba(255,255,255,0.3)'/><circle cx='270' cy='90' r='45' fill='rgba(255,255,255,0.3)'/><circle cx='300' cy='80' r='30' fill='rgba(255,255,255,0.3)'/><circle cx='340' cy='90' r='45' fill='rgba(255,255,255,0.3)'/><circle cx='370' cy='70' r='40' fill='rgba(255,255,255,0.3)'/><circle cx='400' cy='90' r='45' fill='rgba(255,255,255,0.3)'/><circle cx='450' cy='75' r='35' fill='rgba(255,255,255,0.3)'/><circle cx='490' cy='90' r='45' fill='rgba(255,255,255,0.3)'/><circle cx='520' cy='65' r='45' fill='rgba(255,255,255,0.3)'/><circle cx='580' cy='90' r='45' fill='rgba(255,255,255,0.3)'/><circle cx='600' cy='80' r='30' fill='rgba(255,255,255,0.3)'/><circle cx='680' cy='90' r='45' fill='rgba(255,255,255,0.3)'/><circle cx='670' cy='70' r='40' fill='rgba(255,255,255,0.3)'/><circle cx='710' cy='90' r='45' fill='rgba(255,255,255,0.3)'/><circle cx='740' cy='75' r='35' fill='rgba(255,255,255,0.3)'/><circle cx='790' cy='90' r='45' fill='rgba(255,255,255,0.3)'/><circle cx='820' cy='65' r='45' fill='rgba(255,255,255,0.3)'/><circle cx='870' cy='90' r='45' fill='rgba(255,255,255,0.3)'/><circle cx='900' cy='80' r='30' fill='rgba(255,255,255,0.3)'/><circle cx='940' cy='90' r='45' fill='rgba(255,255,255,0.3)'/><circle cx='980' cy='70' r='40' fill='rgba(255,255,255,0.3)'/><circle cx='1050' cy='90' r='45' fill='rgba(255,255,255,0.3)'/><circle cx='1060' cy='75' r='35' fill='rgba(255,255,255,0.3)'/><circle cx='1110' cy='90' r='45' fill='rgba(255,255,255,0.3)'/><circle cx='1140' cy='65' r='45' fill='rgba(255,255,255,0.3)'/><circle cx='1180' cy='90' r='45' fill='rgba(255,255,255,0.3)'/><circle cx='1220' cy='80' r='30' fill='rgba(255,255,255,0.3)'/><circle cx='1270' cy='90' r='45' fill='rgba(255,255,255,0.3)'/><circle cx='1300' cy='70' r='40' fill='rgba(255,255,255,0.3)'/><circle cx='1350' cy='90' r='45' fill='rgba(255,255,255,0.3)'/><circle cx='1380' cy='75' r='35' fill='rgba(255,255,255,0.3)'/><circle cx='1500' cy='90' r='45' fill='rgba(255,255,255,0.3)'/></svg>") repeat-x;
    background-size: cover;
  }
`;

const TitleSeccionCards = styled.h2`
  padding: 0rem 0 2rem 0;
  color: #fff;
  font-size: 34px;
`

const CardsContainer = styled.div`
  position: relative;
  z-index:15;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;    
  padding: 0 1rem;  
`;

const Card = styled.div`
  z-index:20;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 450px;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

const CardContent = styled.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: #555;
  //margin-bottom: 1.5rem;
  flex: 1;
`;

const CardButton = styled.button`
  background: #72c8e9;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background: #3586cb;
  }
`;

const Cards = () => {
  const data = [
    {
        img: ObraEnd,
        title: "Final de obra",
        desc: "Garantizamos satisfacción y eficacia para la limpieza."
    },
    {
        img: Industry,
        title: "Industrias y fábricas",
        desc: "Ofrecemos un servicio personalizado para tu establecimiento."
    },
    {
        img: Shopping,
        title: "Establecimientos comerciales y retail",
        desc: "Seguridad y limpieza integral y continua del local en manos de profesionales."
    },
    {
        img: Oficce,
        title: "Limpieza de oficinas",
        desc: "Garantizamos satisfacción y eficacia para la limpieza."
    },
     {
        img: Deposit,
        title: "Depositos",
        desc: "Garantizamos satisfacción y eficacia para la limpieza."
    },
    {
        img: Event,
        title: "Final de eventos",
        desc: "Garantizamos satisfacción y eficacia para la limpieza."
    }
  ];

  return (
    <Section>
        <TitleSeccionCards>
          Conoce los detalles de nuestros servicios y consultanos por tu necesidad!
        </TitleSeccionCards>
        <CardsContainer>
        <Fade triggerOnce={true} cascade damping={0.3} >
            {data.map((item, index) => (
                
                  <Card key={index}>
                      <CardImage src={item.img} alt={item.title} />
                      <CardContent>
                          <CardTitle>{item.title}</CardTitle>
                          <CardDescription>{item.desc}</CardDescription>
                          <CardButton>Más información</CardButton>
                      </CardContent>
                  </Card>
                
            ))}
        </Fade>
      </CardsContainer>
    </Section>
  );
};

export default Cards;