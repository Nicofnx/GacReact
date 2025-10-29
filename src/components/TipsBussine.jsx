import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import { ShieldCheck, UserCheck, Users2, ClipboardList, DollarSign } from "lucide-react";

const Section = styled.section`
  padding: 80px 20px;
  text-align: center;
  background-color: #f8fafc;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const Title = styled.h2`
  font-size: 2.6rem;
  margin-bottom: 10px;
  color: #0f3057;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Subtitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 50px;
  color: #475569;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CardGrid = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 2500;

  @media (max-width: 768px) {
    grid-template-columns: 300px;
    justify-content: center
  }

`;

const Card = styled.div`
  background: #ffffff;  
  border-radius: 16px;
  padding: 40px 20px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;  

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
  }
`;

const IconWrapper = styled.div`
  background-color: #e0f2fe;
  color: #0369a1;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  margin: 0 auto 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #0f3057;
  margin-bottom: 12px;
  font-weight: 600;
`;

const CardText = styled.p`
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.5;
`;

function TipsBussine() {
  const tips = [
    {
      icon: <ShieldCheck size={36} />,
      title: "Satisfacción Garantizada",
      text: "Resultados medibles y de calidad que superan tus expectativas.",
    },
    {
      icon: <UserCheck size={36} />,
      title: "Atención Personalizada",
      text: "Trato cercano y seguimiento constante en cada servicio.",
    },
    {
      icon: <Users2 size={36} />,
      title: "Equipo Profesional",
      text: "Personal capacitado, confiable y comprometido con la excelencia.",
    },
    {
      icon: <ClipboardList size={36} />,
      title: "Presupuestos a Medida",
      text: "Adaptamos nuestros servicios a las necesidades de tu empresa.",
    },
    {
      icon: <DollarSign size={36} />,
      title: "Optimización de Costos",
      text: "Procesos eficientes que reducen gastos sin perder calidad.",
    },
    
  ];

  return (
    <Section>
      <Title>Tu lugar, siempre impecable</Title>
      <Subtitle>
        En Grupo Aldo Cleaning cuidamos cada detalle para ofrecerte un servicio eficiente, confiable y profesional.
      </Subtitle>
      <CardGrid>
        <Slide triggerOnce={true} direction="up" cascade damping={0.2}>
          {tips.map((tip, index) => (
            <Card key={index}>
              <IconWrapper>{tip.icon}</IconWrapper>
              <CardTitle>{tip.title}</CardTitle>
              <CardText>{tip.text}</CardText>
            </Card>
          ))}
        </Slide>
      </CardGrid>
    </Section>
  );
}

export default TipsBussine;