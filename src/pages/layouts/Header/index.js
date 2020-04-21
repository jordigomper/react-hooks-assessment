import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Container } from "./elements";

export const Header = ({ children }) => {
  return <Container>{children}</Container>;
};
