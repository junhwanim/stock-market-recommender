import React from "react";
import { colors } from "../styles/colors";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <AppTitle>BOOSTOCK</AppTitle>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 10px;
  background-color: ${colors.whiteSmoke};
  z-index: 10;
`;

const AppTitle = styled.h1`
  background-image: linear-gradient(
    180deg,
    ${colors.primary},
    ${colors.secondary}
  );
  background-clip: text;
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

export default Header;
