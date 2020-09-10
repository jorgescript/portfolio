/* IMPORTS */
import React from "react";
/* STYLES */
import { HeaderContainer, Menu, MenuItem, Logo, Me } from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <Menu>
      <Logo>&lt;JM/&gt;</Logo>
      <MenuItem>Sobre mi</MenuItem>
      <MenuItem>Proyectos</MenuItem>
    </Menu>
    <Me>
      <MenuItem green>Disponible</MenuItem>
    </Me>
  </HeaderContainer>
);

export default Header;
