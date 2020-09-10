/* IMPORTS */
import React from "react";
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
        <Button borderBlack>Conoce más sobre mi</Button>
        <Button>Contactame</Button>
      </ContenedorBotones>
    </CallToAction>
  </PrincipalContainer>
);

export default Principal;
