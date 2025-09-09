import styled from "styled-components"
import React from "react"
import officeImg from "../assets/office.webp" // 👈 Ajustá la ruta de tu imagen

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
function LimpiezaOficinas() {
  return (
    <PageWrapper>
      <Image src={officeImg} alt="Limpieza profesional de oficinas" />
      <Content>
        <Title>Limpieza profesional de oficinas</Title>

        <Text>
          Un entorno de trabajo limpio y ordenado no solo mejora la imagen de tu
          empresa, también favorece la productividad y el bienestar de tus
          empleados. En <b>Grupo Aldo Cleaning SRL</b> ofrecemos un servicio
          integral y confiable, diseñado para mantener tus oficinas siempre
          presentables y seguras.
        </Text>

        <SubTitle>¿Qué hacemos?</SubTitle>
        <List>
          <li>
            Limpieza diaria y mantenimiento de escritorios, salas de reuniones y
            áreas comunes.
          </li>
          <li>Higienización de sanitarios, cocinas y espacios de descanso.</li>
          <li>
            Desinfección de superficies de alto contacto: teclados, teléfonos,
            picaportes.
          </li>
          <li>Limpieza de vidrios, ventanales y mobiliario.</li>
        </List>

        <SubTitle>Beneficios para tu empresa</SubTitle>
        <CheckList>
          <li>Oficinas prolijas que refuerzan tu imagen corporativa.</li>
          <li>Ambientes más saludables y seguros para tu equipo.</li>
          <li>Flexibilidad horaria para no interrumpir tu jornada laboral.</li>
          <li>Supervisión para garantizar la calidad del servicio.</li>
          <li>Resultados que se ven, todos los días.</li>
        </CheckList>

        <SubTitle>Nuestro equipo</SubTitle>
        <List>
          <li>Personal capacitado y discreto, con uniforme e identificación.</li>
          <li>
            Uso de EPP y productos certificados para la seguridad de tu personal.
          </li>
          <li>
            Procedimientos de higiene adaptados a cada espacio de oficina.
          </li>
          <li>Supervisores asignados para el seguimiento del servicio.</li>
        </List>

        <SubTitle>Seguridad y confianza</SubTitle>
        <List>
          <li>Protocolos que cumplen con normativas de seguridad e higiene.</li>
          <li>
            Respeto por la confidencialidad y cuidado de los espacios de trabajo.
          </li>
          <li>
            Adaptación a planes de emergencia y políticas internas de cada
            cliente.
          </li>
        </List>
      </Content>
    </PageWrapper>
  )
}

export default LimpiezaOficinas