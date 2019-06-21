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
  padding: 20px;
  background-color: #4267b2;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme: { breakPoints } }) => `
    @media (min-width: ${breakPoints.tablet}px) {
      font-size: 80px;
    }
  `}
`;

const Main = styled.div`
  min-height: 100vh;
  background-color: #e9ebee;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const RouterStyled = styled(Router)`
  border: 1px solid #dddfe2;
  border-radius: 3px;
  background-color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  ${({ theme: { breakPoints } }) => `
    @media (min-width: ${breakPoints.tablet}px) {
      margin: 0 15%;
      padding: 0 15px;
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
