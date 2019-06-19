import React from "react";
import { Router } from "@reach/router";
import { APIProvider } from "./context";
import Home from "./components/Home";
import Profile from "./components/Profile";
import styled from "@emotion/styled";

const Header = styled.h1`
  width: 100%;
  margin: 0;
  background-color: blue;
  text-align: center;
`;

const Main = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

function App() {
  return (
    <Main>
      <Header>nice to meet you!</Header>
      <APIProvider>
        <Router>
          <Home exact path="/" />
          <Profile exact path="/profile/:id" />
        </Router>
      </APIProvider>
    </Main>
  );
}

export default App;
