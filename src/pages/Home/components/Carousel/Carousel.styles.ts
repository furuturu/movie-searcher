import styled from "styled-components";
import { device } from "../../../../utils/devices";

export const CarouselItem = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const CarouselWrapper = styled.div`
  padding-top: 50px;
  margin-bottom: 1rem;
`;
export const ShortDescription = styled.div`
  h1 {
    font-size: 2rem;
    font-weight: 600;
    text-shadow: 0.2rem 0 black;
    margin: 0;
  }
  h3 {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5rem;
    text-shadow: 0.1rem 0 black;
    @media screen and ${device.mobileL} {
      display: none;
    }
  }
  color: #fff;
  position: absolute;
  bottom: 20px;
  left: 20px; ;
`;
