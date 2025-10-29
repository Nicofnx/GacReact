import styled from "styled-components"
import React from "react"
import depositoImg from "../assets/depo.jpg"

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
function LimpiezaDepositos() {
  return (
    <PageWrapper>
      <Image src={depositoImg} alt="Limpieza profesional de depósitos" />
      <Content>
        <Title>Limpieza profesional de depósitos</Title>

        <Text>
          En los depósitos, la limpieza es fundamental para garantizar la
          seguridad de la mercadería, la eficiencia operativa y el cumplimiento
          de normas de higiene. En <b>Grupo Aldo Cleaning SRL</b> brindamos un
          servicio integral y planificado que se adapta a la dinámica de tu
          centro logístico.
        </Text>

        <SubTitle>¿Qué hacemos?</SubTitle>
        <List>
          <li>
            Limpieza profunda y mantenimiento de pisos, pasillos y áreas de
            carga y descarga.
          </li>
          <li>
            Higienización de estanterías, racks y sectores de almacenamiento.
          </li>
          <li>
            Eliminación de polvo y residuos que puedan afectar la mercadería.
          </li>
          <li>
            Desinfección de superficies de contacto frecuente y áreas comunes.
          </li>
        </List>

        <SubTitle>Beneficios para tu operación</SubTitle>
        <CheckList>
          <li>
            Depósitos más seguros y organizados para proteger tu mercadería.
          </li>
          <li>
            Reducción de riesgos laborales y accidentes por suciedad o desorden.
          </li>
          <li>
            Flexibilidad horaria para adaptarnos a tus tiempos de carga y
            descarga.
          </li>
          <li>Supervisión para asegurar calidad y continuidad del servicio.</li>
          <li>Resultados que se ven en tu operativa diaria.</li>
        </CheckList>

        <SubTitle>Nuestro equipo</SubTitle>
        <List>
          <li>
            Personal capacitado con formación en seguridad e higiene industrial.
          </li>
          <li>Uso de EPP y uniformes identificables.</li>
          <li>
            Procedimientos adaptados a cada depósito según tipo de mercadería.
          </li>
          <li>
            Coordinación con responsables logísticos para no interrumpir
            procesos.
          </li>
        </List>

        <SubTitle>Seguridad y confianza</SubTitle>
        <List>
          <li>
            Protocolos que cumplen con normativas de higiene y seguridad
            laboral.
          </li>
          <li>
            Control de accesos y trazabilidad del personal de limpieza.
          </li>
          <li>
            Planificación preventiva para minimizar riesgos y mantener la
            continuidad operativa.
          </li>
        </List>
      </Content>
    </PageWrapper>
  )
}

export default LimpiezaDepositos