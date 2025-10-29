import React from "react"
import styled from "styled-components"
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import gotaLogo from "../assets/logo-empresa-con nombre.png";

const FooterWrapper = styled.footer`
  position:relative;
  background: #0f3057;
  color: #fff;
  padding: 40px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 10px 20px;
    max-width: 300px;
    align-items: center;
    flex: 1;
    margin: 10px 20px;
    max-width: 300px;
`

const Logo = styled.img`
  height: 50px;
  margin-bottom: 15px;
`

const Title = styled.h4`
  font-size: 18px;
  margin-bottom: 12px;
  font-weight: bold;
`

const Text = styled.p`
  font-size: 14px;
  line-height: 1.6;
`

const Link = styled.a`
  display: block;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  margin-bottom: 8px;

  &:hover {
    text-decoration: underline;
  }
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 8px;

  svg {
    margin-right: 8px;
    color: #00ff95;
  }
`

const BottomBar = styled.div`
  background: #082642;
  color: #ccc;
  font-size: 12px;
  text-align: center;
  padding: 10px;
  margin-top: 10px;
`

function Footer() {
  return (
    <>
      <FooterWrapper>
        <Column>
          <Logo src={gotaLogo} alt="Logo" />
          <Text>
            <b>Servicio de limpieza profesional.</b><br/>Resultados que se ven, tranquilidad que disfrutás.
          </Text>
        </Column>

        <Column>
          <Title>Contacto</Title>
          <ContactItem>
            <FaWhatsapp /> +54 (2323) 1234-1234
          </ContactItem>
          <ContactItem>
            <FaPhone /> +54 (2323) 4567-4567
          </ContactItem>
          <ContactItem>
            <FaEnvelope /> info@empresa.com
          </ContactItem>
          <ContactItem>
            <FaMapMarkerAlt /> Luján, Bs As, Argentina
          </ContactItem>
        </Column>

        <Column>
          <Title>Compañía</Title>
          <Link href="#">Inicio</Link>
          <Link href="#">Servicios</Link>
          <Link href="#">Nosotros</Link>
          <Link href="#">Contacto</Link>
        </Column>
      </FooterWrapper>

      <BottomBar>
        © {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.
        &nbsp; | &nbsp;
        <a href="#" style={{ color: "#ccc" }}>
          Privacidad
        </a>{" "}
        |{" "}
        <a href="#" style={{ color: "#ccc" }}>
          Cookies
        </a>
      </BottomBar>
    </>
  )
}

export default Footer