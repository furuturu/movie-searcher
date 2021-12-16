import styled from "styled-components";

export const QueryBlock = styled.div`
  word-wrap: break-word;
  max-width: 20rem;
  padding: 3px;
  margin: 3px;
  color: black;
`;
export const LastQueries = styled.div`
  display: flex;
  max-width: 20rem;
  margin: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;
export const RemoveQuery = styled.div`
  cursor: pointer;
  padding: 3px;
  color: red;
`;
export const QueryWrapper = styled.div`
  display: flex;
  align-content: center;
  margin: 5px;
  align-items: center;
  background-color: #ffcc00;
  padding: 5px;
  border-radius: 15px;
`;
export const RemoveAll = styled.div`
  display: flex;
  align-items: center;
  background-color: gray;
  border-radius: 15px;
  cursor: pointer;
  color: black;
  padding: 3px;
  margin: 3px;
`;
export const Form = styled.form`
  width: 60%;
`;
