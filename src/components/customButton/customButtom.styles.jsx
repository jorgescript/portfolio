import styled, { css } from "styled-components";
import { breakPoints, colors } from "../../assets/variablesCSS";

const BorderBlack = css`
  border: 2px solid #000000;
  background-color: transparent;
  color: #000000;
`;
const FullWidth = css`
  width: 100%;
  &:hover {
    background-color: ${colors.colorAzul};
    transform: scale(1);
  }
`;

const customizeButton = ({ borderBlack, fullWidth }) => {
  if (borderBlack) return BorderBlack;
  if (fullWidth) return FullWidth;
};

export const CustomButton = styled.button`
  border: 2px solid transparent;
  cursor: pointer;
  padding: 10px 20px;
  font-family: inherit;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.colorVerde};
  color: ${colors.colorBlanco};
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: ${breakPoints.pequenio}) {
    font-size: 12px;
    padding: 5px 10px;
    font-weight: 400;
  }
  @media (max-width: ${breakPoints.muyPequenio}) {
    font-size: 10px;
    padding: 5px;
  }
  ${customizeButton}
`;
