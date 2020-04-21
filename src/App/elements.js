import styled from "@emotion/styled";
import { Router } from "@reach/router";

export const Main = styled.div`
  min-height: 100vh;
  background-color: #e9ebee;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const RouterStyled = styled(Router)`
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
