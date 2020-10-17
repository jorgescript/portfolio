/* IMPORTS */
import React from "react";
/* COMPONENTS */
import Enlace from "../customEnlace/customEnlace.component";
/* STYLES */
import { HeaderContainer, Menu, Logo, Me, MeIcon } from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <Menu>
      <Logo>&lt;JS/&gt;</Logo>
      <Enlace>Sobre mi</Enlace>
      <Enlace>Proyectos</Enlace>
    </Menu>
    <Me>
      <Enlace green>Disponible</Enlace>
      <MeIcon />
    </Me>
  </HeaderContainer>
);

export default Header;
