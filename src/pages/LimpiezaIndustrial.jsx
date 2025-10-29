import styled from "styled-components"
import React from "react"
import industryImg from "../assets/industria.png"

// --- Estilos ---
const PageWrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 200px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`

const Image = styled.img`
  margin: auto;
  height:100%;
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
function LimpiezaIndustrial() {
  return (
    <PageWrapper>
      <Image src={industryImg} alt="Limpieza industrial profesional" />
      <Content>
        <Title>Limpieza industrial profesional</Title>

        <Text>
          En <b>Grupo Aldo Cleaning SRL</b> entendemos que la limpieza en plantas
          industriales y fábricas no es solo una cuestión de orden: es un
          requisito clave para la seguridad, la productividad y el cumplimiento
          de auditorías. Por eso ofrecemos un servicio especializado que se
          adapta a cada área de tu establecimiento.
        </Text>

        <SubTitle>¿Qué hacemos?</SubTitle>
        <List>
          <li>Higienización de líneas de producción y áreas de trabajo.</li>
          <li>
            Limpieza profunda de pisos industriales, depósitos y sectores de
            tránsito.
          </li>
          <li>
            Cuidado especial de superficies en contacto con alimentos o insumos
            sensibles.
          </li>
          <li>Gestión de residuos según protocolos de cada cliente.</li>
        </List>

        <SubTitle>Beneficios para tu empresa</SubTitle>
        <CheckList>
          <li>
            Servicios planificados que cumplen con exigencias de auditorías
            internas y externas.
          </li>
          <li>Protocolos adaptados a normas de seguridad e higiene.</li>
          <li>
            Personal capacitado en Buenas Prácticas de Manufactura (BPM) y
            procedimientos específicos.
          </li>
          <li>Supervisión constante para asegurar calidad y trazabilidad.</li>
          <li>Flexibilidad horaria para adaptarnos a tus turnos de producción.</li>
        </CheckList>

        <SubTitle>Nuestro equipo</SubTitle>
        <List>
          <li>
            Personal capacitado y en formación continua en limpieza industrial.
          </li>
          <li>
            Uso de EPP (equipos de protección personal) adecuados: cofias,
            guantes, protectores auditivos, arneses, etc.
          </li>
          <li>Uniformes con logo y ropa de trabajo diferenciada.</li>
          <li>Planificación anual y supervisión de Seguridad e Higiene.</li>
        </List>

        <SubTitle>Seguridad y confianza</SubTitle>
        <List>
          <li>Garantizar espacios seguros y controlados.</li>
          <li>Respetar los planes de emergencia y protocolos de cada cliente.</li>
          <li>Minimizar riesgos y asegurar la continuidad de tus operaciones.</li>
          <li>Atención 24/7.</li>
        </List>
      </Content>
    </PageWrapper>
  )
}

export default LimpiezaIndustrial
