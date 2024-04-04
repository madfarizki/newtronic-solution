import styled, { css } from "styled-components";
import { Breakpoints } from "@/consts/index";
import { fontSizing } from "@/consts/sizing";
import { HTMLProps } from "react";

export type TextType = {
  size?: number | string | "xs" | "s" | "m" | "l" | "h-s" | "h-m" | "h-l" | "h-xl";
  textAlign?: string;
  whiteSpace?: string;
  fontStyle?: string;
  fontFamily?: string;
  lineClamp?: number;
  textTransform?: string;
  borderRadius?: string;
  color?: string;
};

export const TextStyled = styled.p<TextType & HTMLProps<HTMLParagraphElement>>`
  font-family: ${({ fontFamily }) => fontFamily || "Poppins"};
  font-size: ${({ size = "m" }) =>
    typeof size === "string" ? fontSizing[Breakpoints.desktop4]?.[size] : `${size || 14}px`};
  text-align: ${({ textAlign }) => textAlign || "inherit"};
  white-space: ${({ whiteSpace }) => whiteSpace || "normal"};
  font-style: ${({ fontStyle }) => fontStyle || "normal"};
  text-transform: ${({ textTransform }) => textTransform || "unset"};
  border-radius: ${({ borderRadius }) => borderRadius};
  margin: 0;
  color: ${({ color, theme }) => color ?? theme?.colors?.neutral.neutral90};

  @media screen and (max-width: ${Breakpoints.tablet}px) {
    font-size: ${({ size = "m" }) =>
      typeof size === "string" ? fontSizing[Breakpoints.tablet]?.[size] : `${size || 14}px`};
  }

  @media screen and (max-width: ${Breakpoints.mobile3}px) {
    font-size: ${({ size = "m" }) =>
      typeof size === "string" ? fontSizing[Breakpoints.mobile3]?.[size] : `${size || 14}px`};
  }
`;
