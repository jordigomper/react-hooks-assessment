import React from "react";
import { ThemeProvider } from "emotion-theming";

import { Header } from "../pages/layouts";
import { Main, RouterStyled } from "./elements";
import { Home, Profile } from "../pages";

import { APIProvider } from "./context";

import { theme } from "./theme.js";

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
