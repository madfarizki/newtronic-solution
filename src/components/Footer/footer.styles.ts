import Breakpoints from "@/consts/breakpoints";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.neutral.neutral10};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(LinkR)`
  color: ${({ theme }) => theme.colors.neutral.neutral10};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const Image = styled.img`
  width: 200px;

  @media screen and (max-width: ${Breakpoints.tablet}px) {
    width: 150px;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 10px;

  svg {
    font-size: 18px;
    cursor: pointer;
  }
`;

export const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
