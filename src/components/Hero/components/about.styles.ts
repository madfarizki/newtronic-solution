import Breakpoints from "@/consts/breakpoints";
import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 80px;
  height: 50vh;
  background: url("https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg");
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
