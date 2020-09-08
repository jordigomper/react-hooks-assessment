import React from "react";
import { ThemeProvider } from "emotion-theming";

import { Header } from "../views/layouts";
import { Main, RouterStyled } from "./elements";
import { Home, Profile } from "../views";

import { APIProvider } from "./context";

import { theme } from "./theme.js";

import "./global.css";

export default () => {
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
};
