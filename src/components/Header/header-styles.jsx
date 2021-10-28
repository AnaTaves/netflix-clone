import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 999;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  transition: all ease 0.5s;
  background: ${(props) => (props.black ? "#141414" : "transparent")};
`;

export const HeaderLogo = styled.div`
  height: 25px;
  color: #b7181e;
  letter-spacing: 4px;
  font-weight: 800;
  font-size: 35px;
`;

export const HeaderUser = styled.div`
  height: 35px;
`;

export const HeaderUserImg = styled.img`
  height: 100%;
  border-radius: 3px;
  cursor: pointer;
`;
