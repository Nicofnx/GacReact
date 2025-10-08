import React from "react";
import styled from "styled-components";
import Gacman from "../assets/gac_man.png"
import { Slide } from "react-awesome-reveal";

// Contenedor general de la sección

const Section1colum = styled.section`
  width: 100%;
  padding: 0rem 2rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  li{
    color:red
  }
`

const Section2Colums = styled.section`
  width: 100%;
  padding: 200px 1rem 100px 1rem;
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
  
`

const List = styled.ul`
  display: flex;  
  flex-direction: column;
  text-align: left;
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  
  li {
    font-size: 1rem;
    color: #444;
    line-height: 1.6;
    margin-bottom: 1rem;
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

const Nosotros = () => {
  return (
    <>
      <Section2Colums>
        {/* Columna izquierda */}
        <Slide triggerOnce={true} direction="left">
          <Left>
            <img src={Gacman} alt="Limpieza profesional" />
          </Left>
        </Slide>

        {/* Columna derecha */}
        <Slide triggerOnce={true} direction="right">
          <Right>
            <Title>Conocenos</Title>
            <Paragraph>
              En <b>GRUPO ALDO CLEANING SRL</b> somos una empresa familiar ubicada en la ciudad de Luján, dedicada a brindar el servicio de limpieza integral en distintos ámbitos de trabajo como fábricas, comercios, escuelas, hoteles, entidades financieras, etc. Con el objetivo de que nuestros clientes desempeñen su labor diario en un ambiente saludable.
            </Paragraph>
            <SubTitle>Nuestra Mision</SubTitle>
            <Paragraph>
              Nuestro objetivo es cuidar y mantener las instalaciones de los clientes proporcionando una limpieza profesional, sostenible y efectiva convirtiéndolas en un espacio óptimo que les permita concentrar todos sus esfuerzos en las actividades específicas de su organización.
            </Paragraph>
            <SubTitle>Nuestra Visión</SubTitle>
            <Paragraph>
            Ser reconocidos como la mejor empresa a nivel nacional por su eficiencia, honestidad, profesionalismo y calidad de servicio. Ofreciendo la mejor solución en el área de limpieza, con personal honrado y altamente capacitado, comprometidos con la mejora continua y con los objetivos e imagen de nuestros clientes.
            </Paragraph>
          </Right>
        </Slide>
      </Section2Colums>
      <Section1colum>
        <SubTitle>Nuestros Valores</SubTitle>
          <ContainerList>
            <List>
              <li><b>Calidad:</b> en nuestro servicio, tenemos capacidad de respuesta a las exigencias del cliente agregando valor a nuestras tareas.</li>
              <li><b>Transparencia:</b> somos respetuosos con las normas y leyes establecidas tanto por Grupo Aldo Cleaning, como por el cliente o las distintas organizaciones, que implican procedimientos honrados y totalmente claros que garanticen la legalidad de los mismos.</li>
              <li><b>Honestidad:</b> nos gusta y creemos en la honestidad como uno de los pilares fundamentales que rigen todas las actividades de cualquier empresa. Nos comportamos y expresamos con coherencia y sinceridad de acuerdo con los valores de verdad y justicia.</li>
              <li><b>Compromiso:</b> destacamos el valor del compromiso de cada integrante de la empresa con sus responsabilidades asumidas, creemos en el trabajo de cada uno y en su valor dentro de la empresa.</li>
              <li><b>Rentabilidad:</b> sabemos que la rentabilidad es una responsabilidad primordial en cualquier empresa, por lo que gestionamos de manera efectiva los recursos para obtener resultados económicos que beneficien a Grupo Aldo Cleaning SRL y a todos sus miembros, garantizando la permanencia de la misma a través de los años.</li>
              <li><b>Respeto:</b> es de suma importancia tener la capacidad de aceptar diferentes criterios y actitudes dentro de la filosofía de nuestra empresa, ya sea para nuestros compañeros como para la gente que se encuentra trabajando en las instalaciones.</li>
              <li><b>Trabajo en equipo:</b> sabemos que somos un grupo de personas con diferentes capacidades complementarias, comprometidas con un propósito y un objetivo de trabajo, guiadas por un planeamiento común con responsabilidades compartidas.</li>
            </List>
          </ContainerList>
          <ButtonsRow>
            <Button href="tel:0232312341234">Contactanos</Button>
          </ButtonsRow>
      </Section1colum>
    </>

    
  );
};

export default Nosotros;