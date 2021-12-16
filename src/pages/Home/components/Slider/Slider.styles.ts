import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 82%;
  display: flex;
  justify-content: center;
`;
export const SliderItem = styled.div`
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    transition: transform ease-in-out 0.25s;
  }
`;
