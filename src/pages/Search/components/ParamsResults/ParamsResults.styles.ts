import styled from "styled-components";
import { device } from "../../../../utils/devices";

export const ParamsResultsContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  @media screen and ${device.tablet} {
    grid-template-columns: 50% 50%;
  }
  @media screen and ${device.mobileL} {
    grid-template-columns: 100%;
  }
  margin-top: 2rem;
`;
export const Pages = styled.div`
  button {
    background-color: white;
    &:disabled {
      border: 1px solid transparent;
      background: #ffcc00;
      color: #000;
      cursor: not-allowed;
    }
  }
`;
