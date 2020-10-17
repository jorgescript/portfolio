import React from "react";
/* Componentes */
import TituloSeccion from "../tituloSeccion/tituloSeccion.component";
import Card from "../card/card.component";
import { DosColumnas } from "../contenedores/Contenedores.styles";
/* Estilos */
import SVGFrontEnd from "../../assets/img/imac.svg";
import SVGBackEnd from "../../assets/img/laptop-2.svg";

const Servicios = () => (
  <section>
    <TituloSeccion>Servicios</TituloSeccion>
    <DosColumnas>
      <Card
        type="bordes"
        titulo="Front End Developer"
        info="Donec tincidunt at nunc vel commodo. Tincidunt enim id, ornare dolor."
        icono={SVGFrontEnd}
      />
      <Card
        type="bordes"
        titulo="Back End Developer"
        info="Donec tincidunt at nunc vel commodo. Tincidunt enim id, ornare dolor."
        icono={SVGBackEnd}
      />
    </DosColumnas>
  </section>
);

export default Servicios;
