
import gotaLogo from "../assets/logo-empresa-con nombre.png";
import styled from 'styled-components';
import { NavLink as RouterLink } from "react-router-dom";
import React, { useState, useEffect } from "react"

const HeaderContainer = styled.header`
  position: ${props => (props.isFixed ? "sticky" : "static")};
  top: ${props => (props.isFixed ? "0" : "auto")};
  width: 100%;
  background-color: #333;
  color: white;
  padding: 10px 0;
  text-align: center;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease, visibility 0.5s ease;
  transform: ${props =>
    props.hidden ? "translateY(-100%)" : "translateY(0)"};
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-shadow: ${props => (props.isFixed ? "0 2px 5px rgba(0, 0, 0, 0.1)" : "none")};
  
  visibility: ${props => props.hidden ? 'hidden' : 'visible'};
  opacity: ${props => props.hidden ? 0 : 1};
  
`;

const ContainerBox = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;

`
const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #00aaff;
`;
const Nav = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const NavLink = styled(RouterLink)`
  color: #6EC5E7;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #0077cc;
  }

  &.active {
    color: #0077ff; /* estilo cuando está en la ruta activa */
  }
`;
export const Buttom = styled(RouterLink)`
  background: #6EC5E7;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    background: #005fa3;
  }
`;
const GotaLogo = styled.img`
    width: 80px;
    opacity: 0.8;
`;

function Header() {

  const [hidden, setHidden] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > 200 && currentScrollTop < 600) {
        setHidden(true);
      } else if (currentScrollTop >= 600) {
        setHidden(false);
        setIsFixed(true); // a partir de 600px, el header se vuelve fijo
      } else {
        setHidden(false);
        setIsFixed(false); // antes de 600px, es estático
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




    return (
      <HeaderContainer hidden={hidden} isFixed={isFixed}>
        <ContainerBox>
          <RouterLink to="/">
            <Logo>
              <GotaLogo src={gotaLogo} alt="Logo" />
            </Logo>
          </RouterLink>            
          <Nav>
            <NavLink to="/limpieza-profesional">LIMPIEZA PROFESIONAL</NavLink>
            <NavLink to="/planes">PLANES</NavLink>
            <NavLink to="/nosotros">NOSOTROS</NavLink>
            <NavLink to="/cobertura">COBERTURA</NavLink>
            <NavLink to="/trabaja-con-nosotros">TRABAJA CON NOSOTROS</NavLink>
            <Buttom as={RouterLink} to="/contacto">CONTACTO</Buttom>
          </Nav>
        </ContainerBox>
      </HeaderContainer>
    )
  }

  export default Header;