import React from "react";
import styled from "styled-components";
import Gacman from "../assets/gac_man.png"
import { Slide } from "react-awesome-reveal";
import Valores from "../assets/valores.png"

// Contenedor general de la sección

const Section1colum = styled.section`
  position: relative;
  width: 100%;
  padding: 2rem 2rem 2rem 2rem;
  max-width: 1200px;
  margin: 20px auto;
  overflow: visible;

  &::before {
    content: "";
    position: absolute;
    
    width: 130%; 
    height: 140%;
    
    
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    background-repeat: no-repeat;
    background-image: url(${Valores});
    
    background-position: center;
    opacity: 0.1;
    z-index: 0; 
  }

  border-radius: 20px;

`

const Section2Colums = styled.section`
  width: 100%;
  padding: 200px 1rem 50px 1rem;
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* en mobile se apila */
    text-align: center;
    padding: 1rem 0;
  }
`;

const StyleSlide = styled(Slide)`
  margin: auto;
`

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
  margin:auto;
  
`;

const Title = styled.h2`
  color: #3586cb;
  font-size: 2.4rem;
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
  font-size: 1.8rem;
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




const Nosotros = () => {
  return (
    <>
      <Section2Colums>
        {/* Columna izquierda */}
        <StyleSlide triggerOnce={true} direction="left">
          <Left>
            <img src={Gacman} alt="Limpieza profesional" />
          </Left>
        </StyleSlide>

        {/* Columna derecha */}
        <StyleSlide triggerOnce={true} direction="right">
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
        </StyleSlide>
      </Section2Colums>
      <Section1colum>
        <SubTitle>Nuestros Valores</SubTitle>
          <ContainerList>
            <List>
              <li><b>Calidad:</b> Nos enfocamos en ofrecer un servicio de limpieza profesional, eficiente y adaptable a las necesidades de cada cliente, asegurando resultados visibles y sostenidos en el tiempo.</li>
              <li><b>Transparencia:</b> Cumplimos con todas las normas legales y laborales vigentes, trabajando con procedimientos claros y documentación respaldatoria. Creemos que la confianza se construye con transparencia y coherencia en cada acción.</li>
              <li><b>Honestidad:</b> Actuamos con integridad en todas nuestras relaciones. La honestidad guía nuestras decisiones, nuestra comunicación y la forma en que representamos a nuestros clientes.</li>
              <li><b>Compromiso:</b> Nos comprometemos con la excelencia en cada tarea. Valoramos la responsabilidad individual y colectiva, y trabajamos con dedicación para superar las expectativas de quienes confían en nosotros.</li>
              <li><b>Respeto:</b> Promovemos un ambiente laboral basado en el respeto mutuo, tanto entre nuestros colaboradores como hacia los espacios y personas donde brindamos servicio. Creemos que el respeto es la base de todo vínculo duradero.</li>
              <li><b>Trabajo en equipo:</b> Sabemos que el éxito se logra trabajando juntos. Fomentamos la colaboración, la comunicación y la ayuda mutua entre nuestros equipos para garantizar resultados de calidad y un clima laboral positivo.</li>
              <li><b>Sostenibilidad y crecimiento:</b> Buscamos la mejora continua de nuestros procesos, apostando a la innovación, la capacitación y el uso responsable de los recursos. Creemos en una empresa que crece junto a sus clientes y su equipo de trabajo.</li>

            </List>
          </ContainerList>

      </Section1colum>
    </>

    
  );
};

export default Nosotros;