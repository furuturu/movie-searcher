import styled from "styled-components";
import { device } from "../../../../utils/devices";
import { ReactComponent as Heart } from "../../../../assets/red_heart.svg";

export const SOverview = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  padding-top: 50px;
`;
export const Genre = styled.div`
  background-color: white;
  padding: 3px;
  margin: 3px;
  color: black;
  border-radius: 5px;
`;
export const GenreWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Background = styled.img`
  position: relative;
  width: 100%;
  opacity: 0.5;
  height: 100%;
`;
export const OverviewText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  bottom: 3rem;
  text-align: justify;
  color: white;
  left: 5rem;
  right: 5rem;
  hyphens: auto;
  height: 100%;
  @media screen and ${device.tablet} {
    bottom: 0;
    h3 {
      display: none;
    }
    h4 {
      font-size: 1rem;
    }
  }
  @media screen and ${device.laptop} {
    bottom: 0;
    h3 {
      font-size: 1rem;
    }
  }
  @media screen and ${device.mobileM} {
    h1 {
      font-size: 1rem;
    }
  }
`;
export const HeartIcon = styled(Heart)`
  position: relative;
  width: 2rem;
  cursor: pointer;
  margin: 1rem;
  &:hover {
    fill: red;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
`;
