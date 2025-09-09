import styled from "styled-components"
import React from "react"
import finalObraImg from "../assets/fin_de_obra.jpg" // 👈 Ajustá la ruta de tu imagen

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
function FinalDeObra() {
  return (
    <PageWrapper>
      <Image src={finalObraImg} alt="Limpieza de final de obra" />
      <Content>
        <Title>Limpieza de final de obra</Title>

        <Text>
          ¿Terminaste una obra, reforma o ampliación? Sabemos que el polvo y la
          suciedad parecen interminables. En <b>Grupo Aldo Cleaning SRL</b> nos
          especializamos en dejar cada superficie libre de residuos, con
          ambientes listos para usar y disfrutar.
        </Text>

        <SubTitle>¿Qué hacemos?</SubTitle>
        <List>
          <li>Remoción profunda de polvo, cemento y restos de materiales.</li>
          <li>Limpieza de pisos, vidrios, aberturas y mobiliario.</li>
          <li>Desinfección y desodorización de los espacios.</li>
        </List>

        <SubTitle>
          Beneficios de elegir un servicio de limpieza profesional
        </SubTitle>
        <Text>
          Al contratarnos, evitás el desgaste físico y el tiempo que implica
          limpiar después de una obra. Nos encargamos de todo para que tu espacio
          quede listo, prolijo y presentable.
        </Text>
        <CheckList>
          <li>Atención personalizada y cercana.</li>
          <li>Horarios y presupuestos según tus necesidades.</li>
          <li>Equipos capacitados y en constante actualización.</li>
          <li>Supervisión continua para garantizar calidad y eficiencia.</li>
        </CheckList>
      </Content>
    </PageWrapper>
  )
}

export default FinalDeObra

