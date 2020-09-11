import styled from "styled-components";
import { ReactComponent as Consola } from "./../../assets/img/consola.svg";

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 36px;
  height: 20vh;
`;
export const Menu = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    & :not(:first-child) {
      display: none;
    }
  }
`;
export const Logo = styled.a`
  cursor: pointer;
  font-family: "Lato", sans-serif;
  font-size: 50px;
  font-weight: 100;
  margin-right: 40px;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
export const MenuItem = styled.a`
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  font-size: 25px;
  font-weight: 400;
  margin-right: 40px;
  @media (max-width: 768px) {
    font-size: 15px;
    margin-right: 15px;
  }
  color: ${(props) => (props.green ? "#00f5d4" : "#000000")};
  &::after {
    display: block;
    content: "";
    width: 0;
    height: 3px;
    background-color: #00f5d4;
    transition: width 0.3s;
  }
  &:hover::after {
    width: 100%;
  }
`;
export const Me = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

/* export const  = styled.div`
  height: 100%;
  width: 60px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 50px;
  }
`; */
export const MeIcon = styled(Consola)`
  width: 60px;
  height: 60px;
  @media (max-width: 768px) {
    width: 50px;
  }
`;
