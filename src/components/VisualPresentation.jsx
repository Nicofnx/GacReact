import styled from 'styled-components';
import FondoChica from "../assets/Chica de Limpieza.png"

const Container = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${FondoChica});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-origin: content-box;
  background-attachment: fixed;

  @media (max-width: 1024px) {
    height: 500px;
  }

  @media (max-width: 768px) {
    height: 400px;
    background-attachment: scroll; /* evita problemas en mobile */
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;

const BoxText = styled.div`
  width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 1280px) {
    width: 90%;
  }
`;

const Text1 = styled.h2`
  color: #fff;
  margin-top: 100px;
  padding-left: 200px;
  font-size: 48px;
  font-weight: 800;

  @media (max-width: 1024px) {
    padding-left: 100px;
    font-size: 36px;
    margin-top: 80px;
  }

  @media (max-width: 768px) {
    padding-left: 50px;
    font-size: 28px;
    margin-top: 60px;
  }

  @media (max-width: 480px) {
    padding-left: 20px;
    font-size: 22px;
    margin-top: 40px;
  }
`;

const Text2 = styled.h2`
  color: #fff;
  padding-left: 200px;
  font-size: 48px;
  font-weight: 800;

  @media (max-width: 1024px) {
    padding-left: 100px;
    font-size: 36px;
  }

  @media (max-width: 768px) {
    padding-left: 50px;
    font-size: 28px;
  }

  @media (max-width: 480px) {
    padding-left: 20px;
    font-size: 22px;
  }
`;

function VisualPresentation() {
  return (
    <Container>
      <BoxText>
        <Text1>EMPRESA DE LIMPIEZA</Text1>
        <Text2>PROFESIONAL</Text2>
      </BoxText>
    </Container>
  )
}

export default VisualPresentation