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
      a: "Sí, todos nuestros operarios están en relación de dependencia con Grupo Aldo Cleaning, cumpliendo con todas las normativas laborales vigentes.",
    },
    {
      q: "¿El personal asignado es siempre el mismo?",
      a: "Priorizamos la continuidad del mismo equipo en cada servicio para mantener la confianza y la eficiencia en las tareas asignadas.",
    },
    {
      q: "¿Qué sucede en caso de ausencia del personal?",
      a: "Contamos con personal de respaldo para cubrir ausencias o licencias, garantizando que el servicio nunca se interrumpa.",
    },
    {
      q: "¿Los artículos de limpieza están incluidos?",
      a: "Podés elegir entre un servicio con insumos incluidos o sin ellos, según la modalidad de contratación que prefieras.",
    },
    {
      q: "¿Ofrecen presupuestos personalizados?",
      a: "Sí, realizamos un relevamiento previo y adaptamos cada propuesta según las necesidades y tamaño del espacio a limpiar.",
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