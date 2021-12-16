import styled, { keyframes } from "styled-components";

const runningProgress = keyframes`
  0% {
    margin-left: 0;
    margin-right: 100%;
  }
  50% {
    margin-left: 25%;
    margin-right: 0;
  }
  100% {
    margin-left: 100%;
    margin-right: 0;
  }
`;

export const Loader = styled.div`
  position: fixed;
  top: 0;
  z-index: 20;
  height: 3px;
  width: 100%;
  background-color: #151515;
  display: flex;
  &:before {
    height: 3px;
    width: 80%;
    background-color: #ffcc00;
    content: "";
    animation: ${runningProgress} 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;
