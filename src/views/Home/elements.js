import styled from "@emotion/styled";

export const List = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 40% 40%;
  grid-column-gap: 8%;
  -webkit-transition: heigth 12s;
  transition: heigth 12s;

  @media (min-width: 950px) {
    margin: 30px 0 60px 0;
    grid-template-columns: 20% 20% 20%;
  }
`;

export const PaginatorPanel = styled.div`
  margin: 10px 5%;
  padding: 0 5%;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: flex-end;
  p {
    margin: 0 0 11px 0;
  }
`;

export const Icon = styled.img`
  cursor: pointer;
  width: 40px;
  background: #4267b273;
  border-radius: 100%;
  ${({ disabled }) =>
    disabled &&
    `
    cursor: initial;
    opacity: 0;
  `};
`;
