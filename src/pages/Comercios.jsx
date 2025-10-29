import styled from "styled-components"
import React from "react"
import shoppingImg from "../assets/shopping.jpg" 

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
function LimpiezaComercial() {
  return (
    <PageWrapper>
      <Image src={shoppingImg} alt="Limpieza comercial profesional" />
      <Content>
        <Title>Limpieza comercial profesional</Title>

        <Text>
          La primera impresión de un cliente comienza con un espacio limpio,
          seguro y agradable. En <b>Grupo Aldo Cleaning SRL</b> brindamos un
          servicio de limpieza integral para locales, centros comerciales y
          negocios minoristas, adaptado a tus horarios y a las necesidades de tu
          actividad.
        </Text>

        <SubTitle>¿Qué hacemos?</SubTitle>
        <List>
          <li>
            Limpieza diaria y mantenimiento continuo de salones de venta,
            pasillos y depósitos.
          </li>
          <li>
            Higienización de vidrieras, mostradores, probadores y áreas comunes.
          </li>
          <li>Cuidado de baños y espacios de alto tránsito.</li>
          <li>Desinfección de superficies de contacto frecuente.</li>
        </List>

        <SubTitle>Beneficios para tu negocio</SubTitle>
        <CheckList>
          <li>
            Ambientes prolijos y presentables que transmiten confianza en tus
            clientes.
          </li>
          <li>Flexibilidad horaria para no interrumpir tu atención ni ventas.</li>
          <li>Personal capacitado y con supervisión constante.</li>
          <li>Resultados que se ven, todos los días.</li>
        </CheckList>

        <SubTitle>Nuestro equipo</SubTitle>
        <List>
          <li>Personal uniformado y fácilmente identificable.</li>
          <li>Uso de EPP adecuados según el tipo de tarea.</li>
          <li>Supervisión que asegura la calidad del servicio.</li>
        </List>
      </Content>
    </PageWrapper>
  )
}

export default LimpiezaComercial