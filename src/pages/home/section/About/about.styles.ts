import Breakpoints from "@/consts/breakpoints";
import styled from "styled-components";

export const Container = styled.section<{ background: string }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 120px;
  height: 50vh;
  background: ${({ background }) => `url(${background})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9);
  }

  @media screen and (max-width: ${Breakpoints.tablet}px) {
    padding: 40px 0;
    text-align: center;
    height: auto;
  }
`;
