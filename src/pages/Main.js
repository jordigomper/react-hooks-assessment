import React from "react";
import { Router } from "@reach/router";
import { ThemeProvider } from "emotion-theming";
import styled from "@emotion/styled";

// import Header from "./layouts/Header";
import { Header } from "./layouts";
import Home from "./Home";
import Profile from "./Profile";

import { APIProvider } from "../context";

import { theme } from "../theme.js";

const Main = styled.div`
  min-height: 100vh;
  background-color: #e9ebee;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const RouterStyled = styled(Router)`
  background-color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  ${({ theme: { breakPoints } }) => `
    @media (min-width: ${breakPoints.tablet}px) {
      margin: 0 15%;
      padding: 0 15px;
      border: 1px solid #dddfe2;
      border-radius: 3px;
    }
  `}
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
