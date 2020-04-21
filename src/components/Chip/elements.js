import styled from "@emotion/styled";

export const Container = styled.div`
  cursor: pointer;
  margin: 0 5px 5px 0;
  padding: 5px 10px;
  background-color: ${({ isActive }) => (isActive ? "#ffc800a8" : `#80808026`)};
  border-radius: 15px;
`;
