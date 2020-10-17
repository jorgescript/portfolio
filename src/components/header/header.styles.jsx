import styled from "styled-components";
import { colors, breakPoints } from "./../../assets/variablesCSS";
import MeLight from "./../../assets/img/me_light.png";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 30px;
  @media (max-width: ${breakPoints.pequenio}) {
    padding: 10px;
  }
`;

export const Menu = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media (max-width: ${breakPoints.pequenio}) {
    & :not(:first-child) {
      display: none;
    }
  }
`;

export const Logo = styled.a`
  cursor: pointer;
  font-family: "Lato", sans-serif;
  font-size: 60px;
  font-weight: 100;
  margin-right: 40px;
  color: ${colors.colorObscuro};
  @media (max-width: ${breakPoints.pequenio}) {
    font-size: 50px;
  }
`;

export const Me = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MeIcon = styled.div`
  background-image: url(${MeLight});
  background-size: cover;
  background-position: center center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 3px solid ${colors.colorVerde};
  @media (max-width: ${breakPoints.pequenio}) {
    display: none;
  }
`;
