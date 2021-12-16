import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../utils/devices";
import { ReactComponent as SearchIcon } from "../../assets/loupe.svg";
import { ReactComponent as HeartIcon } from "../../assets/heart.svg";

interface IAppTypeProps {
  appType: string;
  type: string;
}
export const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
export const SHeader = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  z-index: 10;
  background-color: rgb(21, 21, 21, 0.8);
  box-shadow: 0 1px 6px 2px rgba(0, 0, 0, 0.8);
`;
export const AppType = styled.div`
  color: ${(props: IAppTypeProps) =>
    props.appType === props.type ? "#ffcc00" : "white"};
  margin: 6px;
  &:hover {
    border-bottom: ${(props: IAppTypeProps) =>
      props.appType !== props.type ? "solid white" : ""};
    cursor: pointer;
  }
  padding: 6px;
  font-size: 20px;
  border-bottom: ${(props: IAppTypeProps) =>
    props.appType === props.type ? "solid #ffcc00" : "white"};
`;
export const AppTypesWrapper = styled.div`
  display: flex;
`;
export const ElseWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  padding: 10px;
  @media screen and ${device.mobileL} {
    margin-right: 5px;
    padding: 5px;
  }
`;
export const LangSelector = styled.select`
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 700;
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  margin: 0;
  border: 1px solid #aaa;
  border-radius: 0.5rem;
  appearance: none;
`;
export const Loupe = styled(SearchIcon)`
  width: 3rem;
  margin-right: 0.5rem;

  &:hover {
    fill: #ffcc00;
  }
  @media screen and ${device.mobileL} {
    margin-right: 0.1rem;
  }
`;
export const Heart = styled(HeartIcon)`
  width: 2.3rem;
  margin-right: 0.8rem;
  &:hover {
    fill: #ffcc00;
  }
  @media screen and ${device.mobileL} {
    margin-right: 0.3rem;
  } ;
`;
