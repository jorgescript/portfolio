import React from "react";
/* Componentes */
import TituloSecccion from "../tituloSeccion/tituloSeccion.component";
/* Styles */
import { colors } from "../../assets/variablesCSS";
import {
  ContenedorTituloSobreMi,
  TituloSobreMi,
  ImgSobreMi,
  ParrafoSobreMi,
} from "./sobreMi.styles";
import { DosColumnas } from "../contenedores/Contenedores.styles";
import ImgMe from "../../assets/img/meImagen.png";

const SobreMi = () => {
  return (
    <section>
      <TituloSecccion>Sobre mi</TituloSecccion>
      <DosColumnas>
        <div>
          <ContenedorTituloSobreMi>
            <TituloSobreMi>Soy Jorge tu proximo</TituloSobreMi>
            <TituloSobreMi strong color={colors.colorVerde}>
              Desarrollador web
            </TituloSobreMi>
          </ContenedorTituloSobreMi>
          <ParrafoSobreMi>
            Donec tincidunt at nunc vel commodo. Pellentesque nec sapien luctus,
            tincidunt enim id, ornare dolor. Donec volutpat quis nisl non
            accumsan. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Nam vulputate luctus ultricies.
          </ParrafoSobreMi>
          <ParrafoSobreMi>
            Donec tincidunt at nunc vel commodo. Pellentesque nec sapien luctus,
            tincidunt enim id, ornare dolor. Donec volutpat quis nisl non
            accumsan. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Nam vulputate luctus ultricies.
          </ParrafoSobreMi>
        </div>
        <ImgSobreMi src={ImgMe} alt="Jorge Mosqueda Desarrollador web" />
      </DosColumnas>
    </section>
  );
};

export default SobreMi;
