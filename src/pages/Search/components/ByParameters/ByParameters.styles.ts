import styled from "styled-components";
import { device } from "../../../../utils/devices";

export const LabelCheckbox = styled.div`
  display: flex;
  color: #fff;
  padding: 0.2rem;
`;
export const GridCheckbox = styled.div`
  display: grid;
  grid-template-columns: 11rem 11rem 11rem 11rem;
  @media screen and ${device.tablet} {
    grid-template-columns: 50% 50%;
  }
  @media screen and ${device.mobileL} {
    grid-template-columns: 100%;
  }
  margin-top: 2rem;
`;
