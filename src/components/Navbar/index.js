import React from 'react';
import {FaBars} from 'react-icons/fa'
import logo from '../../images/alplogo-01.png'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Img,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <Img src={logo}/>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">Nosotros</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="Discover">Politicas de Calidad</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="Services">Línea de productos</NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink to="Email">Contáctanos</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar