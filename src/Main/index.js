import React from "react";
import { APIProvider } from "./context";
import styled from "@emotion/styled";
import Home from "./components/Home";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justifi-content: center;
`;

const Header = styled.h1`
  width: 100%;
  background-color: blue;
  text-align: center;
`;

function App() {
  return (
    <Body>
      <APIProvider>
        <Header>nice to meet you!</Header>
        <Home />
      </APIProvider>
    </Body>
  );
}

export default App;
