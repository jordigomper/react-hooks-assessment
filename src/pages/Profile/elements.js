import styled from "@emotion/styled";

export const Content = styled.div`
  margin: 5% 0 0 0;
  display: flex;
  flex-wrap: wrap;
  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  p {
    margin: 2% 5%;
    display: inline;
  }
`;

export const ButtonBack = styled.div`
  cursor: pointer;
  margin: 15px;
  padding: 5px 10px;
  border-radius: 25px;
  background-color: red;
  font-weight: bold;
  @media (min-width: 950px) {
    left: 150px;
  }
`;
