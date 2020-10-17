import styled from "styled-components";
import { breakPoints } from "../../assets/variablesCSS";

export const DosColumnas = styled.div`
  width: 85%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: ${breakPoints.mediano}) {
    grid-template-columns: 1fr;
  }
`;

export const TresColumnas = styled.div`
  width: 85%;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: ${breakPoints.mediano}) {
    grid-template-columns: 1fr;
  }
`;
