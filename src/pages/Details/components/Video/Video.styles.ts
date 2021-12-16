import styled from "styled-components";
import { device } from "../../../../utils/devices";

export const VideoContainer = styled.div`
  text-align: center;
  margin: 0 2rem 2rem 2rem;
  h1 {
    color: #ffcc00;
  }
`;
export const Iframe = styled.iframe`
  width: 70%;
  height: 30rem;
  @media screen and ${device.tablet} {
    height: 20rem;
  }
`;
