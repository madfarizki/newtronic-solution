import Breakpoints from "@/consts/breakpoints";
import styled from "styled-components";

export const Background = styled.div`
  background: rgb(236, 244, 255);
  background: radial-gradient(
    circle,
    rgba(236, 244, 255, 1) 45%,
    rgba(207, 231, 255, 1) 100%,
    rgba(247, 254, 255, 1) 100%
  );
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  max-width: 1024px;
  height: 100vh;
  position: relative;
  margin: auto;
  z-index: 1;
  padding: 40px 0 0;

  @media screen and (max-width: ${Breakpoints.tablet}px) {
    padding: 80px 20px 0;
    justify-content: start;
    height: calc(100vh - 80px);
  }
`;

export const Chip = styled.div`
  width: fit-content;
  margin: 0 auto;
  border: 2px solid ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.primary.default};
  background-color: ${({ theme }) => theme.colors.primary.surface};
  font-size: 16px;
  font-weight: bold;
  border-radius: 50px;
  padding: 4px 20px;
`;

export const TextWrapper = styled.div`
  @media screen and (min-width: ${Breakpoints.desktop}px) {
    padding: 0 58px;
  }
`;

export const Image = styled.img`
  margin: 30px auto 0;
  width: 50%;

  @media screen and (max-width: ${Breakpoints.desktop}px) {
    width: 100%;
  }
`;
