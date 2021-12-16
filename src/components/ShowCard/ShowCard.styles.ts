import styled from "styled-components";
import { ReactComponent as Heart } from "../../assets/red_heart.svg";

export const StyledShowCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
  color: white;
`;
export const CardPoster = styled.img`
  max-height: 15rem;
`;
export const CardHeartIcon = styled(Heart)`
  position: relative;
  width: 2rem;
  top: 3rem;
  left: 3rem;
  cursor: pointer;
  &:hover {
    fill: #ff0000;
  }
`;
