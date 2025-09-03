import styled from "styled-components";
import { Slide } from "react-awesome-reveal";

const Section = styled.section`
  padding: 60px 20px;
  text-align: center;
  background-color: #f5f5f5;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 40px;
  color: #3586cb;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-size: 0.95rem;
  color: #555;
`;

function TipsBussine() {
  return (
    <Section>
      <Title>¿Buscás una empresa de limpieza en confiable, profesional y con amplia trayectoria?</Title>
      <Title>Grupo Aldo Cleaning SRL te brinda</Title>
      <CardGrid>
        <Slide triggerOnce={true} direction="up" cascade damping={0.4}>
          <Card>
            <CardImage src="/img/satisfaccion.jpg" alt="Satisfacción Garantizada" />
            <CardContent>
              <CardTitle>Satisfacción Garantizada</CardTitle>
              <CardText>
                Aseguramos resultados óptimos y sumamente profesionales que superan todas tus expectativas.
              </CardText>
            </CardContent>
          </Card>

          <Card>
            <CardImage src="/img/atencion.jpg" alt="Atención Personalizada" />
            <CardContent>
              <CardTitle>Atención Personalizada</CardTitle>
              <CardText>
                Ofrecemos un trato directo y horarios flexibles, nos adaptamos a todas tus necesidades.
              </CardText>
            </CardContent>
          </Card>

          <Card>
            <CardImage src="/img/personal.jpg" alt="Personal Capacitado" />
            <CardContent>
              <CardTitle>Personal Capacitado</CardTitle>
              <CardText>
                Profesionales altamente capacitados en diversas técnicas de limpieza para brindar un servicio de máxima calidad.
              </CardText>
            </CardContent>
          </Card>

          <Card>
            <CardImage src="/img/presupuesto.jpg" alt="Presupuesto Personalizado" />
            <CardContent>
              <CardTitle>Presupuesto Personalizado</CardTitle>
              <CardText>
                Proveemos un servicio que se adapta a tus expectativas y necesidades.
              </CardText>
            </CardContent>
          </Card>
          <Card>
            <CardImage src="/img/presupuesto.jpg" alt="Presupuesto Personalizado" />
            <CardContent>
              <CardTitle>Costos</CardTitle>
              <CardText>
                reducimos tus costos operativos.
              </CardText>
            </CardContent>
          </Card>
        </Slide>
      </CardGrid>
    </Section>
  );
}

export default TipsBussine