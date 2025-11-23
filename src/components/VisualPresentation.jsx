import styled from 'styled-components';
import FondoChica from "../assets/portada2.jpeg";
import { motion } from 'framer-motion';

const Container = styled.section`
  margin: 80px 0 0 0;
  position: relative;
  width: 100%;
  height: 800px;
  background-image: url(${FondoChica});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
 
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    height: 600px;
  }

  @media (max-width: 768px) {
    height: 500px;
    background-attachment: scroll;
  }

  @media (max-width: 480px) {
    height: 400px;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0);
    z-index: 0;
  }
`;

const BoxText = styled.div`
  position: relative;
  z-index: 1;
  width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const SubText = styled(motion.p)`
  color: #fff;
  font-size: 18px;
  letter-spacing: 1px;
  margin-bottom: 10px;
  font-weight: 700;
  padding: 10px 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Title1 = styled(motion.h1)`
  color: #fff;
  font-size: 56px;
  font-family: "Lato", sans-serif;
  font-weight: 100;
  line-height: 1.2;
  padding: 5px 0;

  @media (max-width: 1024px) {
    font-size: 42px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Title2 = styled(motion.h1)`
  color: #fff;
  font-size: 56px;
  font-family: "Lato", sans-serif;
  font-weight: 900;
  padding: 5px 0;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 42px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Button = styled(motion.button)`
  margin-top: 25px;
  background: #6ec5e7;
  color: white;
  font-weight: 200;
  border-radius: 30px;
  padding: 16px 30px;
  cursor: pointer;
  font-size: 16px;
  text-decoration:none;
  border: 2px solid rgba(255, 255, 255, 0);
  transition: all 0.3s;


  &:hover {
    background: transparent;
    border: 2px solid #fff;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 25px;
  }
`;

// --- Variantes de animación ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" }
  }),
};



function VisualPresentation() {

  const handleCotizacionesClick = (e) => {
    e.preventDefault();
    const section = document.getElementById("cotizaciones");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <Container>
      <BoxText>
        <SubText
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
        >
          Servicio profesional de limpieza
        </SubText>

        <Title1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1.2}
        >
          NUESTRO EQUIPO ES NUESTRO
        </Title1>

        <Title2
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1.7}
        >
          MEJOR RECURSO
        </Title2>

        <Button
          href="#cotizaciones" onClick={handleCotizacionesClick}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          
        >
          Solicitar presupuesto
        </Button>
      </BoxText>
    </Container>
  );
}

export default VisualPresentation;