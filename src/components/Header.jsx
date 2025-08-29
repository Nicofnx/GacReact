
import gotaLogo from "../assets/logo-empresa-con nombre.png";
import styled from 'styled-components';
import { NavLink as RouterLink } from "react-router-dom";

const HeaderContainer = styled.header`
  //max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  //padding: 10px 20px;
  background: #fff;
  //background: linear-gradient(90deg,rgba(42, 123, 155, 0.53) 0%, rgba(87, 199, 133, 0.73) 100%);
  
  
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
    width: 140px;
    opacity: 0.8;
`;

function Header() {
    return (
      <HeaderContainer>
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