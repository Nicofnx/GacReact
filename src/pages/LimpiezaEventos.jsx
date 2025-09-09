import styled from "styled-components"
import React from "react"
import eventosImg from "../assets/event.webp"

// --- Estilos ---
const PageWrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 60px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`

const Image = styled.img`
  flex: 1 1 400px;
  max-width: 500px;
  border-radius: 10px;
  object-fit: cover;
`

const Content = styled.div`
  flex: 1 1 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  color: #009fe3;
`

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  color: #333;
`

const Text = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #444;
`

const List = styled.ul`
  margin-top: 10px;
  padding-left: 20px;
  list-style: disc;
  color: #444;
  line-height: 1.6;
`

const CheckList = styled.ul`
  margin-top: 10px;
  padding-left: 20px;
  list-style: "✔ ";
  color: #444;
  line-height: 1.6;
`

// --- Componente principal ---
function LimpiezaEventos() {
  return (
    <PageWrapper>
      <Image src={eventosImg} alt="Limpieza después de eventos" />
      <Content>
        <Title>Limpieza después de eventos</Title>

        <Text>
          Al terminar un evento, lo importante es disfrutar del recuerdo, no
          preocuparse por el desorden. En <b>Grupo Aldo Cleaning SRL</b> nos
          ocupamos de dejar cada espacio en condiciones, de manera rápida,
          eficiente y sin complicaciones para vos.
        </Text>

        <SubTitle>¿Qué hacemos?</SubTitle>
        <List>
          <li>Recolección y gestión de residuos.</li>
          <li>Limpieza profunda de salones, baños y áreas comunes.</li>
          <li>Higienización de pisos, mobiliario y superficies de alto contacto.</li>
          <li>
            Desinfección y desodorización para devolver frescura a los ambientes.
          </li>
        </List>

        <SubTitle>Beneficios para vos</SubTitle>
        <CheckList>
          <li>
            Evitás el desgaste físico y el tiempo que implica limpiar después de
            un evento.
          </li>
          <li>
            Rapidez y eficiencia para que el lugar vuelva a estar disponible.
          </li>
          <li>
            Atención personalizada según el tipo de evento (social, corporativo,
            cultural).
          </li>
          <li>
            Resultados que se ven: espacios ordenados, limpios y listos para usar.
          </li>
        </CheckList>

        <SubTitle>Nuestro equipo</SubTitle>
        <List>
          <li>Personal capacitado en limpieza de grandes superficies.</li>
          <li>Uniformes e identificación clara para cada operario.</li>
          <li>
            Uso de EPP y productos certificados para garantizar seguridad.
          </li>
          <li>Supervisores para asegurar calidad y velocidad en la entrega.</li>
        </List>

        <SubTitle>Seguridad y confianza</SubTitle>
        <List>
          <li>Protocolos de higiene que cumplen con normativas locales.</li>
          <li>Flexibilidad horaria para trabajar apenas finaliza el evento.</li>
          <li>
            Compromiso con la discreción y el cuidado de las instalaciones.
          </li>
        </List>
      </Content>
    </PageWrapper>
  )
}

export default LimpiezaEventos