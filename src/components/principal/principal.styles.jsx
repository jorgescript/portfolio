import styled from "styled-components";
import { breakPoints } from "../../assets/variablesCSS";
import imageBg from "../../assets/img/nomad.png";

export const PrincipalContainer = styled.section`
  width: 100%;
  margin-top: 45px;
  height: 80vh;
  background-image: url(${imageBg});
  background-size: 100vh;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0.5) 100%
    ),
    url(${imageBg});
`;

export const CallToAction = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-left: 75px;
  @media (max-width: ${breakPoints.mediano}) {
    justify-content: flex-end;
    padding-left: 100px;
    padding-bottom: 50px;
  }
  @media (max-width: ${breakPoints.pequenio}) {
    padding-left: 20px;
    padding-bottom: 30px;
  }
`;

export const ContenedorTitulo = styled.h1`
  font-size: 50px;
  margin-bottom: 25px;
  @media (max-width: ${breakPoints.mediano}) {
    font-size: 40px;
  }
  @media (max-width: ${breakPoints.pequenio}) {
    font-size: 25px;
  }
`;

export const TituloPrincipal = styled.span`
  display: block;
  letter-spacing: 5px;
  font-weight: ${(props) => (props.strong ? "700" : "300")};
  @media (max-width: 1030px) {
    letter-spacing: 4px;
  }
`;

export const ContenedorBotones = styled.div`
  display: flex;
  button {
    margin-right: 30px;
  }
`;
