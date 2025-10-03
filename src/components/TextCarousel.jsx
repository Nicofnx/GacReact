import React from "react";
import styled, { keyframes } from "styled-components";

// Animación del scroll infinito
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } /* solo se mueve la mitad */
`;

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  height: 30px;

  background: linear-gradient(270deg, #c8efff, #4fbae4);
  background-size: 200% 200%;
  animation: ${gradient} 5s ease infinite;

  display: flex;
  align-items: center;
`;

const CarouselTrack = styled.div`
  display: inline-flex;
  animation: ${scroll} 20s linear infinite;
`;

const CarouselGroup = styled.div`
  display: inline-flex;
  color: #fff;
  font-weight: 400;
  font-size: 16px;

  span {
    margin: 0 30px;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    white-space: nowrap;
  }
`;

export default function TextCarousel() {
  return (
    <CarouselWrapper>
      <CarouselTrack>
        {/* Primer grupo */}
        <CarouselGroup>
          <span>Oficinas en parques industriales</span>•
          <span>Galerías comerciales</span>•
          <span>Productoras</span>•
          <span>Gimnasios</span>•
          <span>Concesionarias</span>•
          <span>Instituciones educativas</span>•
        </CarouselGroup>

        {/* Segundo grupo duplicado */}
        <CarouselGroup>
          <span>Oficinas en parques industriales</span>•
          <span>Galerías comerciales</span>•
          <span>Productoras</span>•
          <span>Gimnasios</span>•
          <span>Concesionarias</span>•
          <span>Instituciones educativas</span>•
        </CarouselGroup>
      </CarouselTrack>
    </CarouselWrapper>
  );
}