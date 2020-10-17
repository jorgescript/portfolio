import React from "react";
/* Estilos */
import { ContenedorTitulo, TituloSeccion } from "./tituloSeccion.styles";

const Titulo = ({ children }) => (
  <ContenedorTitulo>
    <TituloSeccion>{children}</TituloSeccion>
  </ContenedorTitulo>
);

export default Titulo;
