import styled from "styled-components";
import imageBg from "../../assets/img/nomad.png";

export const PrincipalContainer = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${imageBg});
  background-size: 100vh;
  background-repeat: no-repeat;
  background-position: bottom right;
`;

export const CallToAction = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-left: 75px;
`;

export const ContenedorTitulo = styled.h1`
  font-size: 40px;
  margin-bottom: 25px;
`;

export const TituloPrincipal = styled.span`
  display: block;
  font-weight: ${(props) => (props.strong ? "700" : "300")};
`;

export const ContenedorBotones = styled.div`
  display: flex;
  button {
    margin-right: 30px;
  }
`;
