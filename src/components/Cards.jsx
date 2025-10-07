import React from "react";
import styled from "styled-components";
import Industry from "../assets/industria.png"
import ObraEnd from "../assets/fin_de_obra.jpg"
import Shopping from "../assets/shopping.jpg"
import Oficce from "../assets/office.webp"
import Deposit from "../assets/depo.jpg"
import Event from "../assets/event.webp"
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";



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

const data = [
  {
    img: ObraEnd,
    title: "Final de obras",
    desc: "Dejamos tu obra lista para usar, con espacios ordenados y prolijos.",
    path: "/finaldeobra",
  },
  {
    img: Industry,
    title: "Industrias y fábricas",
    desc: "Limpieza confiable, lista para cumplir y superar auditorías.",
    path: "/limpiezaindustrial",
  },
  {
    img: Shopping,
    title: "Establecimientos comerciales",
    desc: "Presentación cuidada y espacios ordenados que suman valor a tu negocio.",
    path: "/comercios",
  },
  {
    img: Oficce,
    title: "Oficinas",
    desc: "Ambientes limpios y cuidados para un entorno laboral cómodo y productivo.",
    path: "/oficinas",
  },
  {
    img: Deposit,
    title: "Depósitos",
    desc: "Espacios organizados para proteger tu mercadería y optimizar tu operación.",
    path: "/depositos",
  },
  {
    img: Event,
    title: "Eventos",
    desc: "Aseguramos el orden y la higiene a tus espacios, para que solo quede el buen recuerdo.",
    path: "/eventos",
  },
];

const Cards = () => {
  return (
    <Section>
      <TitleSeccionCards>
        Descubrí todo lo que podemos hacer por tu empresa:
      </TitleSeccionCards>
      <CardsContainer>
        <Fade triggerOnce={true} cascade damping={0.1}>
          {data.map((item, index) => (
            <Card key={index}>
              <CardImage src={item.img} alt={item.title} />
              <CardContent>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
                <Link to={item.path}>
                  <CardButton>Más información</CardButton>
                </Link>
              </CardContent>
            </Card>
          ))}
        </Fade>
      </CardsContainer>
    </Section>
  );
};

export default Cards;