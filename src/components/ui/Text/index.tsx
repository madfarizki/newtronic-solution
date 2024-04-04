import React, { forwardRef, HTMLProps } from "react";
import { CSSProperties } from "styled-components";
import { TextStyled, TextType } from "./text.styles";

type Props = TextType &
  Omit<HTMLProps<HTMLParagraphElement>, "size"> & {
    href?: string;
    children?: React.ReactNode;
    style?: CSSProperties;
    fontFamily?: string;
    dangerouslySetInnerHTML?: {
      __html: string;
    };
  };

export const Text = forwardRef<HTMLParagraphElement, Props>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <TextStyled ref={ref} {...rest}>
      {children}
    </TextStyled>
  );
});

export const TextBold = forwardRef<HTMLParagraphElement, Props>((props, ref) => {
  return <Text fontFamily="Poppins-Bold" ref={ref} {...props} />;
});

export const TextSemibold = forwardRef<HTMLParagraphElement, Props>((props, ref) => {
  return <Text fontFamily="Poppins-SemiBold" ref={ref} {...props} />;
});
