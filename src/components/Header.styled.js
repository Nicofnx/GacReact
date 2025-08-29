import styled from 'styled-components';

export const HeaderContainer = styled.header`
  //max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  //padding: 10px 20px;
  background: #fff;
  //background: linear-gradient(90deg,rgba(42, 123, 155, 0.53) 0%, rgba(87, 199, 133, 0.73) 100%);
  
  
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const ContainerBox = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;

`

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #00aaff;
`;

export const Nav = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #58c4e7;
  font-size: 16px;
  //font-family: ;

  &:hover {
    color: #00aaff;
  }
`;

export const Buttom = styled.a`
  background-color: #58c4e7;
  text-decoration: none;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  transition: 0.5s;

  &:hover {
    background-color: #3587cb;
  }
`

export const GotaLogo = styled.img`
    width: 140px;
    opacity: 0.8;
`;
