import styled from "styled-components";
import { device } from "../../../../utils/devices";

export const RecommendedOrSimilar = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const ResultsContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  @media screen and ${device.tablet} {
    grid-template-columns: 50% 50%;
  }
  @media screen and ${device.mobileL} {
    grid-template-columns: 100%;
  }
`;
export const TypesWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const RelButton = styled.h1`
  color: ${(props: { isActive: boolean }) =>
    props.isActive ? "#ffcc00" : "#fff"};
  cursor: pointer;
  margin: 0.5rem;
  @media screen and ${device.mobileL} {
    font-size: 1.5rem;
  }
`;
