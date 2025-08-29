import React from "react";
import styled from "styled-components";
import Industry from "../assets/industria.png"
import ObraEnd from "../assets/fin_de_obra.jpg"
import Shopping from "../assets/shopping.jpg"
import Oficce from "../assets/office.webp"
import Deposit from "../assets/depo.jpg"
import Event from "../assets/event.webp"

const Section = styled.section`
  background-color: #009999;
  width: 100%; 
  padding: 4rem 0;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;    
  padding: 0 1rem;  
`;

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
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
  margin-bottom: 1.5rem;
  flex: 1;
`;

const CardButton = styled.button`
  background: #00a5a5;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background: #008080;
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
        <CardsContainer>
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
      </CardsContainer>
    </Section>
  );
};

export default Cards;