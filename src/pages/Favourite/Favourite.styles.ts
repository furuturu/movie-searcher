import styled from "styled-components";
import { device } from "../../utils/devices";

export const FavouriteGridContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  @media screen and ${device.tablet} {
    grid-template-columns: 50% 50%;
  }
  @media screen and ${device.mobileL} {
    grid-template-columns: 100%;
  }
`;
export const Title = styled.h1`
  color: #ffcc00;
  text-align: center;
  padding-top: 50px;
`;
export const FavouriteWrapper = styled.div`
  margin: 0;
  padding: 0;
`;
