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

// --- Componente principal ---
function FinalDeObra() {
  return (
    <PageWrapper>
      <Image src={finalObraImg} alt="Limpieza de final de obra" />
      <Content>
        <Title>LIMPIEZA DE FINAL DE OBRA</Title>

        <SubTitle>¿Qué es un servicio de limpieza de final de obra?</SubTitle>
        <Text>
          La <b>limpieza de final de obra</b> es un servicio que se ofrece con el fin de 
          eliminar todo tipo de suciedad que se obtiene durante y después de una 
          reforma. Esta suciedad y polvo que se acumula suele ser compleja de quitar 
          si no se cuenta con un equipo de profesionales que se dediquen 
          exclusivamente a removerlo a la perfección.
        </Text>

        <SubTitle>¡Que la limpieza de final de obra no sea una preocupación!</SubTitle>
        <Text>
          Luego de una renovación o una construcción desde cero, uno puede notar 
          una película de tierra y polvo cubriendo las superficies y que parece 
          imposible de remover. Para nosotros, esto no es problema: nuestros 
          equipos están altamente capacitados para abordar estas necesidades tan 
          específicas.
        </Text>
        <Text>
          Nos enfocamos en remover a la perfección toda capa de suciedad con la 
          que cuenta el ambiente, dejando el lugar en perfectas condiciones y con 
          un aroma agradable.
        </Text>

        <SubTitle>Podemos con la limpieza de todas las superficies</SubTitle>
        <Text>
          Prestamos servicio de limpieza profesional e integral para distintos 
          tipos de trabajo de obra, entre ellos:
        </Text>
        <List>
          <li>Remodelaciones de propiedades particulares e instituciones.</li>
          <li>Ampliaciones.</li>
          <li>Construcciones desde los cimientos.</li>
        </List>

        <SubTitle>
          ¿Qué beneficios diferenciales tiene contratar un servicio de limpieza profesional?
        </SubTitle>
        <Text>
          Contratar profesionales para llevar a cabo limpiezas te ahorra una 
          preocupación mientras nos encargamos de dejar tu lugar espléndido, listo 
          para utilizar y disfrutar.
        </Text>
        <Text>
          A su vez, cuenta con los siguientes beneficios:
        </Text>
        <List>
          <li>Nuestra atención es personalizada.</li>
          <li>Los horarios y presupuestos se adaptan a tus necesidades y a tu bolsillo.</li>
          <li>Nuestros equipos cuentan con capacitaciones constantes para brindar el mejor servicio de limpieza.</li>
          <li>Nuestros supervisores se encargan de hacer un trabajo continuo para asegurar el buen rendimiento de cada equipo.</li>
          <li>Contamos con planes estandarizados Limpiar + Proteger si necesitás una limpieza integral.</li>
        </List>
      </Content>
    </PageWrapper>
  )
}

export default FinalDeObra
