import styled, { css } from "styled-components";

const BorderBlack = css`
  border: 2px solid #000000;
  background-color: transparent;
  color: #000000;
`;

const customizeButton = ({ borderBlack }) => {
  if (borderBlack) return BorderBlack;
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
  background-color: #00f5d4;
  color: #ffffff;
  font-size: 12px;
  border-radius: 2px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
  ${customizeButton}
`;
