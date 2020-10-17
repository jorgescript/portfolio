import React from "react";
/* Estilos */
import {
  ContenedorCard,
  IconoCard,
  ParrafoCard,
  TituloCard,
} from "./card.styles";

const Card = ({ type, titulo, info, icono }) => (
  <ContenedorCard type={type}>
    <TituloCard>{titulo}</TituloCard>
    {icono ? <IconoCard src={icono} /> : ""}
    <ParrafoCard>{info}</ParrafoCard>
    <a href="#contacto">Necesito ayuda</a>
  </ContenedorCard>
);

export default Card;
