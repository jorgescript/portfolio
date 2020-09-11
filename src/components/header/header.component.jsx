/* IMPORTS */
import React from "react";
import { ReactComponent as Consola } from "./../../assets/img/consola.svg";
/* STYLES */
import {
  HeaderContainer,
  Menu,
  MenuItem,
  Logo,
  Me,
  MeIcon,
} from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <Menu>
      <Logo>&lt;JM/&gt;</Logo>
      <MenuItem>Sobre mi</MenuItem>
      <MenuItem>Proyectos</MenuItem>
    </Menu>
    <Me>
      <MenuItem green>Disponible</MenuItem>
      <MeIcon>
        <Consola />
      </MeIcon>
    </Me>
  </HeaderContainer>
);

export default Header;
