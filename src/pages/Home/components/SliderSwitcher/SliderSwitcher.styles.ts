import styled from "styled-components";

interface IButtonProps {
  name: string;
  type: string;
}
export const SwitcherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
export const SwitcherContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: solid white;
  align-content: space-evenly;
  margin-bottom: 1rem;
  width: 83%;
`;
export const TypesWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
`;
export const TypeSelector = styled.div`
  font-size: 2rem;
  padding: 1rem;
  color: ${(props: IButtonProps) =>
    props.type === props.name ? "#ffcc00" : "white"};
  &:hover {
    cursor: pointer;
    color: #ffeb99;
  }
`;
