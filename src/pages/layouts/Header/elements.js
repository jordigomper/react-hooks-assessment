import styled from "@emotion/styled";

export const Container = styled.h1`
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
