import { HeaderContainer, ContainerBox, Logo, Nav, NavLink, Buttom, GotaLogo } from "./Header.styled"
import gotaLogo from "../assets/logo-empresa-con nombre.png";

function Header(){
    return(
        <HeaderContainer>
            <ContainerBox>
                <NavLink href="/">
                    <Logo>
                        <GotaLogo src={gotaLogo} alt="" />
                    </Logo>
                </NavLink>            
                <Nav>
                    <NavLink href="#cv">LIMPIEZA PROFESIONAL</NavLink>
                    <NavLink href="#contacto">PLANES</NavLink>
                    <NavLink href="#contacto">NOSOTROS</NavLink>
                    <NavLink href="#contacto">COBERTURA</NavLink>
                    <NavLink href="#contacto">TRABAJA CON NOSOTROS</NavLink>
                    <Buttom href="#contacto">CONTACTO</Buttom>
                </Nav>
            </ContainerBox>
      </HeaderContainer>
    )
}

export default Header