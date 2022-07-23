import React from "react";
import styled from "styled-components";
import { colors } from "./styles/colors";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <AppContainer>
      <Header />
      <Content />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${colors.whiteSmoke};
`;

export default App;
