import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;

  label {
    margin-right: 15px;
  }

  @media (min-width: 950px) {
    font-size: 20px;
    input {
      font-size: 15px;
    }
  }
`;
