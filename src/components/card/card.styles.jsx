import styled, { css } from "styled-components";
import { colors, breakPoints } from "../../assets/variablesCSS";

const Bordes = css`
  border: 5px solid ${colors.colorVerde};
  a {
    color: ${colors.colorVerde};
  }
`;
const Degradado = css`
  border-radius: 20px;
  background-image: linear-gradient(
    to top right,
    ${colors.colorAzul},
    ${colors.colorVerde}
  );
  color: ${colors.colorBlanco};
  a {
    color: ${colors.colorBlanco};
  }
`;

const tipoCard = (props) => {
  if (props.type === "bordes") return Bordes;
  if (props.type === "degradado") return Degradado;
};

export const ContenedorCard = styled.div`
  width: 80%;
  padding: 46px;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: repeat(3, auto);
  a {
    font-size: 18px;
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
  @media (max-width: ${breakPoints.mediano}) {
    margin-bottom: 50px;
    a {
      font-size: 15px;
    }
  }
  ${tipoCard}
`;

export const TituloCard = styled.h3`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  font-size: 40px;
  font-weight: 400;
  letter-spacing: 0.05em;
  @media (max-width: ${breakPoints.pequenio}) {
    font-size: 25px;
  }
`;

export const IconoCard = styled.img`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  align-self: start;
  justify-self: end;
  width: 80px;
  @media (max-width: ${breakPoints.pequenio}) {
    width: 55px;
  }
`;

export const ParrafoCard = styled.p`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  font-size: 18px;
  margin-top: 16px;
  margin-bottom: 7px;
  @media (max-width: ${breakPoints.pequenio}) {
    font-size: 15px;
  }
`;
