import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

const Header = () => {
  return (
    <HeaderContainer>
      <Title>BOOSTOCK</Title>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 10px;
`;

const Title = styled.h1`
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
