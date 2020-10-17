import styled from "styled-components";
import { colors, breakPoints } from "../../assets/variablesCSS";

export const ContenedorTituloSobreMi = styled.h2`
  font-size: 40px;
  @media (max-width: ${breakPoints.mediano}) {
    font-size: 35px;
  }
  @media (max-width: ${breakPoints.pequenio}) {
    font-size: 25px;
  }
  &::after {
    content: "";
    display: block;
    width: 15%;
    height: 5px;
    margin-top: 20px;
    background-color: ${colors.colorVerde};
  }
`;

export const TituloSobreMi = styled.span`
  display: block;
  font-weight: ${(props) => (props.strong ? "700" : "300")};
  color: ${(props) => (props.color ? props.color : colors.colorObscuro)};
`;

export const ParrafoSobreMi = styled.p`
  font-size: 18px;
  margin: 50px 0;
  @media (max-width: ${breakPoints.pequenio}) {
    font-size: 15px;
  }
`;

export const ImgSobreMi = styled.img`
  justify-self: end;
  height: 700px;
  @media (max-width: ${breakPoints.mediano}) {
    justify-self: center;
    width: 70%;
    height: auto;
  }
`;
