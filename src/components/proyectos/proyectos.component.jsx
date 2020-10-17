import React from "react";
/* Componentes */
import TituloSeccion from "../tituloSeccion/tituloSeccion.component";
import Card from "../card/card.component";
import { DosColumnas } from "../contenedores/Contenedores.styles";

const Proyectos = () => (
  <section>
    <TituloSeccion>Proyectos</TituloSeccion>
    <DosColumnas>
      <Card
        type="degradado"
        titulo="Front End Developer"
        info="Donec tincidunt at nunc vel commodo. Tincidunt enim id, ornare dolor."
      />
      <Card
        type="degradado"
        titulo="Back End Developer"
        info="Donec tincidunt at nunc vel commodo. Tincidunt enim id, ornare dolor."
      />
    </DosColumnas>
  </section>
);

export default Proyectos;
