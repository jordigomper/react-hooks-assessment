import React from "react";
import styled from "@emotion/styled";

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
      <Header>nice to meet you!</Header>
      <div className="App">Hola Mundo!</div>
    </Body>
  );
}

export default App;
