import { useState } from "react";
import styled from "styled-components";
import { Plus, Minus } from "lucide-react";
import FAQ from "../assets/faq.jpg"


const Section = styled.section`
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
`;

const Image = styled.img`
  width: 420px;
  height: 500px;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    width: 100%;
    max-width: 500px;
  }
`;

const FAQContainer = styled.div`
  margin: auto 0;
  background-color: #e0f2fe;
  border-radius: 16px;
  padding: 40px;
  flex: 1 1 500px;
  max-width: 600px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    padding: 25px;
  }
`;

const Title = styled.h2`
  color: #1e3a8a;
  font-size: 2rem;
  margin-bottom: 10px;
  font-weight: 700;
`;

const Subtitle = styled.p`
  color: #334155;
  font-size: 1rem;
  margin-bottom: 25px;
`;

const Question = styled.div`
  border-top: 1px solid #bae6fd;
  padding: 16px 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: 1px solid #bae6fd;
  }
`;

const QuestionText = styled.h4`
  font-size: 1rem;
  color: #0f172a;
  font-weight: 600;
  margin: 0;
`;

const IconWrapper = styled.div`
  color: #0c4a6e;
  transition: transform 0.2s ease;
`;

const Answer = styled.div`
  max-height: ${({ open }) => (open ? "500px" : "0")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
  color: #334155;
  line-height: 1.6;
  font-size: 0.95rem;
  margin-top: ${({ open }) => (open ? "10px" : "0")};
`;

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "¿El personal está en relación de dependencia con la empresa?",
      a: "Sí. Todo nuestro personal se encuentra en relación de dependencia directa con Grupo Aldo Cleaning SRL, cumpliendo con las normas laborales vigentes, seguros, ART y cobertura médica. Esto garantiza un servicio responsable y seguro.",
    },
    {
      q: "¿El personal asignado es siempre el mismo?",
      a: "Nuestro objetivo es mantener la continuidad del equipo, ya que entendemos la importancia de la confianza y la familiaridad en cada espacio. Sin embargo, en caso de vacaciones, licencias o ausencias justificadas, contamos con personal de reemplazo.",
    },
    {
      q: "¿Qué sucede en caso de ausencia del personal?",
      a: "Nos ocupamos de reemplazar al operario de forma inmediata, asegurando la continuidad del servicio.",
    },
    {
      q: "¿Los artículos de limpieza están incluidos?",
      a: "Podés elegir entre un servicio con insumos incluidos o sin ellos, según la modalidad de contratación que prefieras.",
    },
    {
      q: "¿Ofrecen presupuestos personalizados?",
      a: "Por supuesto. Elaboramos presupuestos a medida, adaptados a las necesidades de cada cliente según el tipo de establecimiento, frecuencia del servicio, horario y superficie a limpiar, con un mínimo de 4 horas por día de lunes a viernes. También realizamos visitas técnicas sin costo para evaluar el espacio y definir la propuesta más conveniente.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section>
      <Image src={FAQ} alt="Equipo de limpieza trabajando" />
      <FAQContainer>
        <Title>Preguntas frecuentes</Title>
        <Subtitle>
          Encontrá las respuestas a las dudas más comunes sobre nuestros servicios.
        </Subtitle>
        {faqs.map((item, index) => (
          <div key={index}>
            <Question onClick={() => toggleFAQ(index)}>
              <QuestionText>{item.q}</QuestionText>
              <IconWrapper>
                {activeIndex === index ? <Minus /> : <Plus />}
              </IconWrapper>
            </Question>
            <Answer open={activeIndex === index}>{item.a}</Answer>
          </div>
        ))}
      </FAQContainer>
    </Section>
  );
}

export default FAQSection;