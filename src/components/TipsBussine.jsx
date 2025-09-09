import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import Satisfaccion from "../assets/tips/satisfaccion.png"
import Atencion from "../assets/tips/atencion.png"
import Personal from "../assets/tips/personal.png"
import Presupuesto from "../assets/tips/presupuesto.png"
import Costo from "../assets/tips/costo.png"

const Section = styled.section`
  padding: 60px 20px;
  text-align: center;
  background-color: #f5f5f5;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 20px;
  color: #3586cb;
`;

const Subtitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 20px;
  color: #3586cb;
`

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
  height: 240px;
  object-fit: cover;

  @media (max-width: 768px){
    height: 180px;
    object-fit: contain;
  }
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
      <Title>Tu lugar, siempre impecable</Title>
      <Subtitle>En Grupo Aldo Cleaning nos ocupamos de cada detalle, vos disfrutás los resultados.</Subtitle>
      <CardGrid>
        <Slide triggerOnce={true} direction="up" cascade damping={0.4}>
          <Card>
            <CardImage src={Satisfaccion} alt="Satisfacción Garantizada" />
            <CardContent>
              <CardTitle>Satisfacción Garantizada</CardTitle>
              <CardText>
              Resultados de calidad que superan tus expectativas.
              </CardText>
            </CardContent>
          </Card>

          <Card>
            <CardImage src={Atencion} alt="Atención Personalizada" />
            <CardContent>
              <CardTitle>Atención Personalizada</CardTitle>
              <CardText>
                Un trato cercano, ágil y adaptado a lo que necesitas.
              </CardText>
            </CardContent>
          </Card>

          <Card>
            <CardImage src={Personal} alt="Personal Capacitado" />
            <CardContent>
              <CardTitle>Equipo Profesional</CardTitle>
              <CardText>
                Personas confiables y capacitadas. 
              </CardText>
            </CardContent>
          </Card>

          <Card>
            <CardImage src={Presupuesto} alt="Presupuesto Personalizado" />
            <CardContent>
              <CardTitle>Presupuesto a medida</CardTitle>
              <CardText>
                Soluciones que se ajustan a las necesidades de tu empresa.
              </CardText>
            </CardContent>
          </Card>
          <Card>
            <CardImage src={Costo} alt="Presupuesto Personalizado" />
            <CardContent>
              <CardTitle>Menores costos</CardTitle>
              <CardText>
                Optimizamos la limpieza reduciendo tus gastos.
              </CardText>
            </CardContent>
          </Card>
        </Slide>
      </CardGrid>
    </Section>
  );
}

export default TipsBussine