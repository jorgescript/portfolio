import styled from "styled-components";
import { colors, breakPoints } from "../../assets/variablesCSS";

export const EnlaceCustom = styled.a`
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  font-size: 25px;
  font-weight: 400;
  margin-right: 40px;
  color: ${colors.colorObscuro};
  @media (max-width: ${breakPoints.mediano}) {
    font-size: 18px;
    margin-right: 15px;
  }
  color: ${(props) => (props.green ? colors.colorVerde : colors.colorNegro)};
  &::after {
    display: block;
    content: "";
    width: 0;
    height: 3px;
    background-color: ${colors.colorVerde};
    transition: width 0.3s;
  }
  &:hover::after {
    width: 100%;
  }
`;
