import React from "react";
import styled from "styled-components";
import Gacman from "../assets/gac_man.png"
import { Slide } from "react-awesome-reveal";

// Contenedor general de la sección
const Section = styled.section`
  width: 100%;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* en mobile se apila */
    text-align: center;
    padding: 1rem 0;
  }
`;

// Columna de la izquierda (imagen)
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 450px;
    border-radius: 12px;
  }
`;

// Columna de la derecha (contenido)
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1rem
  }

`;

const Title = styled.h2`
  color: #3586cb;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #444;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const SubTitle = styled.h3`
  color: #3586cb;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

const ContainerList = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
`

const List = styled.ul`
  display: flex;  
  flex-direction: column;
  justify-content:flex-start;
  align-items: flex-start;
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;

  li {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: #333;

    &::before {
      content: "🔹​";
      margin-right: 0.5rem;
      color: #009999;
    }
  }
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Button = styled.a`
  background: #72c8e9;
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background: #3586cb;
  }
`;

const AboutSection = () => {
  return (
    <Section>
      {/* Columna izquierda */}
      <Slide triggerOnce={true} direction="left">
        <Left>
          <img src={Gacman} alt="Limpieza profesional" />
        </Left>
      </Slide>

      {/* Columna derecha */}
      <Slide triggerOnce={true} direction="right">
        <Right>
          <Title>Un servicio de limpieza profesional es mucho más que “limpiar”</Title>
          <Paragraph>
          Significa estudiar cada espacio, entender las necesidades del cliente y adaptarse a sus tiempos. En <b>Grupo Aldo Cleaning SRL</b> planificamos la mejor estrategia para cada lugar, eligiendo los insumos adecuados según las superficies y organizando cada detalle con profesionalismo.
          </Paragraph>

          <SubTitle>¿Por qué elegirnos?</SubTitle>
          <Paragraph>
            Con más de <b>5 años de experiencia</b> en limpieza, hemos brindado nuestro servicio con profesionalismo y expertise en todo tipo de establecimientos:
          </Paragraph>

          <ContainerList>
              <List>
                <li>Institucional</li>
                <li>Hospitales, Sanatorios y Laboratorios</li>
                <li>Industrial y Fábricas</li>
                <li>Limpieza de Oficinas</li>
                <li>Hotelería</li>
                <li>Residencial y Consorcios</li>
              </List>
              <List>
                <li>Restaurantes</li>
                <li>Depósitos</li>
                <li>Final de Eventos</li>
                <li>Tratamiento de Pisos</li>
                <li>Limpieza de Alfombras</li>
                <li>Final de Obra</li>
              </List>
          </ContainerList>

          <ButtonsRow>
            <Button href="tel:0232312341234">Solicitá tu cotización</Button>
          </ButtonsRow>
        </Right>
      </Slide>
    </Section>
  );
};

export default AboutSection;
