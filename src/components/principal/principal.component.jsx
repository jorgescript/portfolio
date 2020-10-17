/* IMPORTS */
import React from "react";
import { Link } from "react-scroll";
/* COMPONENTES */
import Button from "./../customButton/customButtom.component";
/* STYLES */
import {
  PrincipalContainer,
  CallToAction,
  ContenedorTitulo,
  TituloPrincipal,
  ContenedorBotones,
} from "./principal.styles";

const Principal = () => (
  <PrincipalContainer>
    <CallToAction>
      <ContenedorTitulo>
        <TituloPrincipal>Un sitio web</TituloPrincipal>
        <TituloPrincipal>hace más real tu proyecto</TituloPrincipal>
        <TituloPrincipal strong>Yo te puedo ayudar.</TituloPrincipal>
      </ContenedorTitulo>
      <ContenedorBotones>
        <Button
          as={Link}
          to="sobre-mi"
          smooth={true}
          duration={1000}
          borderBlack
        >
          Conoce más sobre mi
        </Button>
        <Button as={Link} to="contacto" smooth={true} duration={1000}>
          Contactame
        </Button>
      </ContenedorBotones>
    </CallToAction>
  </PrincipalContainer>
);

export default Principal;
