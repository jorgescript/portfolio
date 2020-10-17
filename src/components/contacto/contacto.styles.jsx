import styled from "styled-components";
import { breakPoints, colors } from "../../assets/variablesCSS";

export const ImgContacto = styled.img`
  width: 100%;
`;
export const ContenedorFormContacto = styled.div`
  text-align: center;
  @media (max-width: ${breakPoints.mediano}) {
    grid-row: 1 / 2;
    margin-bottom: 30px;
  }
`;

export const TituloContacto = styled.h3`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 30px;
  @media (max-width: ${breakPoints.pequenio}) {
    font-size: 25px;
  }
`;

export const ContenedorInput = styled.div`
  position: relative;
  height: 50px;
  margin-bottom: 20px;
  @media (max-width: ${breakPoints.pequenio}) {
    height: 35px;
  }
`;

export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 10px;
  font-size: 15px;
  border: 2px solid ${colors.colorObscuro};
  border-radius: 5px;
  background-color: ${colors.colorBlanco};
  outline: none;
  transition: 0.2s ease-in;
  &:focus {
    border: 2px solid ${colors.colorVerde};
  }
  &:focus ~ label {
    top: 0;
    transform: translateY(-50%);
  }
  @media (max-width: ${breakPoints.pequenio}) {
    font-size: 12px;
    padding: 5px;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  height: 50%;
  padding: 5px;
  display: flex;
  color: ${colors.colorGris};
  justify-content: center;
  align-items: center;
  background-color: ${colors.colorBlanco};
  transition: 0.2s ease-in;
  font-size: 16px;
  @media (max-width: ${breakPoints.pequenio}) {
    font-size: 13px;
  }
`;
