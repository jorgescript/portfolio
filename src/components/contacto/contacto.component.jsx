import React from "react";
import Titulo from "../tituloSeccion/tituloSeccion.component";
/* Components */
import { DosColumnas } from "../contenedores/Contenedores.styles";
import Button from "./../customButton/customButtom.component";
/* Estilos */
import {
  ImgContacto,
  ContenedorFormContacto,
  TituloContacto,
  ContenedorInput,
  Input,
  Label,
} from "./contacto.styles";
import SVGContacto from "../../assets/img/desk-illustration.svg";

const Contacto = () => (
  <section id="contacto">
    <Titulo>Contacta conmigo</Titulo>
    <DosColumnas>
      <ImgContacto src={SVGContacto} alt="Imagen de contacto" />
      <ContenedorFormContacto>
        <TituloContacto>Yo te ayudare a cumplir tu idea</TituloContacto>
        <form>
          <ContenedorInput>
            <Input type="text" id="nombre"></Input>
            <Label htmlFor="nombre">Nombre Completo</Label>
          </ContenedorInput>
          <ContenedorInput>
            <Input type="text" id="correo"></Input>
            <Label htmlFor="correo">Correo electronico</Label>
          </ContenedorInput>
          <ContenedorInput>
            <Input type="text" id="telefono"></Input>
            <Label htmlFor="telefono">Telefono</Label>
          </ContenedorInput>
          <Button fullWidth>Comencemos con tu proyecto</Button>
        </form>
      </ContenedorFormContacto>
    </DosColumnas>
  </section>
);

export default Contacto;
