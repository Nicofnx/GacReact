import gotaLogo from "../assets/logo-empresa-con nombre.png";
import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ModalCV from "./ModalCV";
import CloseButtom from "./CloseButtom";

const HeaderContainer = styled.header`
  position: ${(props) => (props.isFixed ? "sticky" : "static")};
  top: 0;
  width: 100%;
  color: white;
  padding: 5px 0;
  text-align: center;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease, visibility 0.5s ease;
  transform: ${(props) => (props.hidden ? "translateY(-100%)" : "translateY(0)")};
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-shadow: ${(props) => (props.isFixed ? "0 2px 5px rgba(0, 0, 0, 0.1)" : "none")};
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
  opacity: ${(props) => (props.hidden ? 0 : 1)};
`;

const ContainerBox = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

const Logo = styled.div``;

const Nav = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(RouterLink)`
  color: #6ec5e7;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #0077cc;
  }

  &.active {
    color: #0077ff;
  }
`;

const LinkModal = styled.span`
  display: block;
  cursor: pointer;
  color: #6ec5e7;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #005fa3;
  }
`;

export const Buttom = styled(RouterLink)`
  background: #6ec5e7;
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

const Burger = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;
  color: #6ec5e7;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: ${(props) => (props.open ? "flex" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  background: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease-in-out;
  padding: 20px;
  border-radius: 5px;
  flex-direction: column;
  gap: 20px;
  z-index: 2000;
`;

function Header() {
  const [hidden, setHidden] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsFixed(true);
      setHidden(false);
      return;
    }
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > 200 && currentScrollTop < 600) {
        setHidden(true);
      } else if (currentScrollTop >= 600) {
        setHidden(false);
        setIsFixed(true);
      } else {
        setHidden(false);
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <>
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
            <LinkModal onClick={() => setIsModalOpen(true)}>TRABAJA CON NOSOTROS</LinkModal>
            <Buttom to="/contacto">CONTACTO</Buttom>
          </Nav>
          <Burger onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </Burger>
        </ContainerBox>
        <MobileMenu open={menuOpen}>
          <NavLink to="/limpieza-profesional" onClick={() => setMenuOpen(false)}>
            LIMPIEZA PROFESIONAL
          </NavLink>
          <NavLink to="/planes" onClick={() => setMenuOpen(false)}>
            PLANES
          </NavLink>
          <NavLink to="/nosotros" onClick={() => setMenuOpen(false)}>
            NOSOTROS
          </NavLink>
          <NavLink to="/cobertura" onClick={() => setMenuOpen(false)}>
            COBERTURA
          </NavLink>
          <LinkModal
            onClick={() => {
              setIsModalOpen(true);
              setMenuOpen(false);
            }}
          >
            TRABAJA CON NOSOTROS
          </LinkModal>
          <Buttom to="/contacto" onClick={() => setMenuOpen(false)}>
            CONTACTO
          </Buttom>
          <CloseButtom onClick={() => setMenuOpen(false)} />
        </MobileMenu>
      </HeaderContainer>

      {/* Modal */}
      {isModalOpen && (
        <ModalCV onClose={() => setIsModalOpen(false)} isOpen={isModalOpen} />
      )}
    </>
  );
}

export default Header;