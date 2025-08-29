import React from "react";
import styled from "styled-components";
import Gacman from "../assets/gac_man.png"

// Contenedor general de la sección
const Section = styled.section`
  width: 100%;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* en mobile se apila */
    text-align: center;
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
`;

const Title = styled.h2`
  color: #009999;
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
  color: #009999;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

const ContainerList = styled.div`
  display: flex;
  justify-content: center;
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
  background: #00a5a5;
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background: #008080;
  }
`;

const AboutSection = () => {
  return (
    <Section>
      {/* Columna izquierda */}
      <Left>
        <img src={Gacman} alt="Limpieza profesional" />
      </Left>

      {/* Columna derecha */}
      <Right>
        <Title>¿Qué es un servicio de limpieza profesional?</Title>
        <Paragraph>
          Un <b>servicio de limpieza profesional</b> consiste en realizar limpiezas meticulosas llevadas a cabo por profesionales capacitados en el área para limpiar, desinfectar e higienizar de manera adecuada. En Grupo Aldo Cleaning SRL, te aseguramos un servicio profesional mientras te garantizamos que tu espacio esté limpio y en buenas condiciones.
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
          <Button href="tel:0232312341234">(02323) 1234-1234</Button>
          <Button href="tel:0232345674567">(02323) 4567-4567</Button>
        </ButtonsRow>
      </Right>
    </Section>
  );
};

export default AboutSection;
