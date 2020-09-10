import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  padding: 36px;
  height: 20vh;
`;
export const Menu = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Logo = styled.a`
  cursor: pointer;
  font-family: "Lato", sans-serif;
  font-size: 50px;
  font-weight: 100;
  margin-right: 40px;
  color: #000000;
`;
export const MenuItem = styled.a`
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  font-size: 25px;
  font-weight: 400;
  margin-right: 40px;
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
  justify-content: end;
`;
