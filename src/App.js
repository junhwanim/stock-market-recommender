import React from "react";
import Header from "./components/Header";
import Content from "./components/Main";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <Header />
      <Content />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
