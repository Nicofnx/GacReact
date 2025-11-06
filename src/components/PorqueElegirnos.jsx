import styled from "styled-components";
import Valores from "../assets/valores.png"; // cambia el nombre según tu imagen real
import { ShieldCheck, UserCheck, Users2, ClipboardList, DollarSign } from "lucide-react";
import { NavLink as RouterLink } from "react-router-dom";

const Section = styled.section`
  background: #fff;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 2px;
    background: #6ec5e7;
    margin: 10px auto 0;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 16px;
  max-width: 700px;
  margin: 15px auto 60px;
  line-height: 1.6;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
`;

const ContentDown = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
`;

const ImageCircle = styled.div`
  width: 340px;
  height: 340px;
  border-radius: 50%;
  overflow: hidden;
  border: 8px solid #f3f3f3;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 260px;
    height: 260px;
  }
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  width: 260px;

  p {
    color: #666;
    font-size: 14px;
    line-height: 1.6;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    margin: 10px 0;
    color: #333;
  }

  svg {
    font-size: 30px;
    color: #6ec5e7;
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const NavLink = styled(RouterLink)`
  display: inline-block; /* 👈 agrega esto */
  background: #6ec5e7;
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 30px;
  color: white;
  padding: 14px 34px;
  font-size: 16px;
  margin: 40px 0 0 0;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;

  &:hover {
    background: transparent;
    border: 2px solid #6ec5e7;
    color: #6ec5e7;
  }
`;

function PorqueElegirnos() {
  return (
    <Section id="why-us">
      <Title>POR QUE ELEGIRNOS</Title>
      <Subtitle>
        En Grupo Aldo Cleaning cuidamos cada detalle para ofrecerte un servicio eficiente, confiable y profesional. Elíjanos por nuestra reputación de excelencia.
      </Subtitle>

      <Content>
        <InfoGroup>
          <div>
            <ShieldCheck size={36} />
            <h3>SATISFACCIÓN GARANTIZADA</h3>
            <p>
                Resultados medibles y de calidad que superan tus expectativas. 
            </p>
          </div>
          <div>
            <UserCheck size={36} />
            <h3>ATENCIÓN PERZONALIZADA</h3>
            <p>
              Trato cercano y seguimiento constante en cada servicio para atender todos los detalles requeridos.  
            </p>
          </div>
        </InfoGroup>

        <ImageCircle>
          <img src={Valores} alt="simbolos de valores de la empresa" />
        </ImageCircle>

        <InfoGroup>
          <div>
            <Users2 size={36} />
            <h3>EQUIPO PROFESIONAL</h3>
            <p>
                Personal capacitado, confiable y comprometido con la excelencia.
            </p>
          </div>
          <div>
            <ClipboardList size={36} />
            <h3>PRESUPUESTO A MEDIDA</h3>
            <p>
                Adaptamos nuestros servicios a las necesidades de tu empresa. 
            </p>
          </div>
        </InfoGroup>        
      </Content>
       <ContentDown>
        <InfoGroup>
          <div>
            <DollarSign size={36} />
            <h3>OPTIMIZACIÓN DE COSTOS</h3>
            <p>
                Procesos eficientes que reducen gastos sin perder calidad.
            </p>
          </div>
        </InfoGroup>
       </ContentDown>
      <NavLink
        to="/nosotros"
      >
        Saber más de nosotros
      </NavLink>
    </Section>
  );
}

export default PorqueElegirnos;