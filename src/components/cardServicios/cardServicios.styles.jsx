import styled from "styled-components";
import { colors } from "../../assets/variablesCSS";

export const ContenedorCard = styled.div`
  background-image: linear-gradient(
    to bottom left,
    ${colors.colorVerde} 0%,
    ${colors.colorVerde} 25%,
    ${colors.colorBlanco} 25%,
    ${colors.colorBlanco} 75%,
    ${colors.colorVerde} 75%,
    ${colors.colorVerde} 100%
  );

  &::before {
    content: "";
    display: block;
    background-color: red;
    grid-column: 1 / 3;
    grid-row: 1 / 4;
    width: 105%;
    height: 300px;
  }
`;

export const TituloCardServicios = styled.h1``;
