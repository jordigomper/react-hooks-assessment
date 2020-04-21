import styled from "@emotion/styled";

export const Container = styled.div`
  cursor: pointer;
  width: 100%;
  margin: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  p {
    height: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    padding: 0 6%;
  }
`;
