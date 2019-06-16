import React from "react";
import styled from "@emotion/styled";
import { APIProvider } from "./context";
import Home from "./components/Home";

const Header = styled.h1`
  width: 100%;
  margin: 0;
  background-color: blue;
  text-align: center;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justifi-content: center;
  align-self: center;
`;

function App() {
  return (
    <Main>
      <APIProvider>
        <Header>nice to meet you!</Header>
        <Home />
      </APIProvider>
    </Main>
  );
}

export default App;
