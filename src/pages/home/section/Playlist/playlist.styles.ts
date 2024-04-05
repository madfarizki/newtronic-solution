import Breakpoints from "@/consts/breakpoints";
import styled from "styled-components";

export const Container = styled.section`
  padding: 100px 120px;

  @media screen and (max-width: ${Breakpoints.tablet}px) {
    padding: 40px 0;
    text-align: center;
  }
`;
