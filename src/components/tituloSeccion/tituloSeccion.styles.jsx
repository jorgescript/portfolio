import styled from "styled-components";
import { colors, breakPoints } from "../../assets/variablesCSS";

export const ContenedorTitulo = styled.div`
  text-align: center;
  margin: 100px 0;
  @media (max-width: ${breakPoints.mediano}) {
    margin: 50px 0;
  }
`;

export const TituloSeccion = styled.h3`
  font-size: 45px;
  font-weight: 400;
  position: relative;
  display: inline;
  @media (max-width: ${breakPoints.mediano}) {
    font-size: 40px;
  }
  @media (max-width: ${breakPoints.pequenio}) {
    font-size: 25px;
  }
  &::before {
    content: "";
    display: inline;
    position: absolute;
    bottom: 13%;
    left: 50%;
    z-index: -1;
    transform: translateX(-50%);
    width: 130%;
    height: 20px;
    background-color: ${colors.colorVerde};
    @media (max-width: ${breakPoints.mediano}) {
      height: 15px;
    }
    @media (max-width: ${breakPoints.mediano}) {
      height: 8px;
    }
  }
`;
