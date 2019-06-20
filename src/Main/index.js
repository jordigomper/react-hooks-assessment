import React from "react";
import { Router } from "@reach/router";
import { APIProvider } from "./context";
import { ThemeProvider } from "emotion-theming";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { theme } from "./theme.js";
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

const RouterStyled = styled(Router)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Main>
      <ThemeProvider theme={theme}>
        <Header>nice to meet you!</Header>
        <APIProvider>
          <RouterStyled>
            <Home exact path="/" />
            <Profile exact path="/profile/:id" />
          </RouterStyled>
        </APIProvider>
      </ThemeProvider>
    </Main>
  );
}

export default App;
