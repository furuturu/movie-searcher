import styled from "styled-components";
import { device } from "../../../../utils/devices";

export const SeasonsTitle = styled.h1`
  color: #ffcc00;
  text-align: center;
`;
export const SeasonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  @media screen and ${device.tablet} {
    grid-template-columns: 50% 50%;
  }
  @media screen and ${device.mobileL} {
    grid-template-columns: 100%;
  }
  margin-bottom: 2rem;
  text-align: center;
`;
export const SeasonCard = styled.div`
  min-width: 1rem;
  color: white;
  width: 100%;
  z-index: 1;
  img {
    position: relative;
  }
`;
