import React, { CSSProperties } from "react";
import { Container } from "./flex-container.styles";

export type Props = {
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "stretch" | "center" | "start" | "end" | "flex-start" | "flex-end" | "unset";
  flexGrow?: number | string;
  children?: React.ReactNode;
  flexWrap?: boolean;
  flexShrink?: string;
  id?: string;
  position?: string;
  width?: string;
  maxWidth?: string;
  onClick?: () => void;
  gap?: number;
  columnGap?: number;
  rowGap?: number;
  background?: string;
  backgroundImage?: string;
  border?: string;
  borderBottom?: string;
  borderTop?: string;
  borderLeft?: string;
  borderRight?: string;
  borderRadius?: number | string;
  overflow?: string;
  overflowX?: string;
  overflowY?: string;
  className?: string;
  minWidth?: string;
  zIndex?: number;
  height?: string;
  maxHeight?: string;
  minHeight?: string;
  cursor?: string;
  style?: CSSProperties;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
};

const FlexContainer = React.forwardRef<any, Props>((props, ref) => {
  const { flexDirection, justifyContent, alignItems, flexGrow, children, onClick, ...rest } = props;

  return (
    <Container
      className="flex-container"
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexGrow={flexGrow}
      ref={ref}
      onClick={onClick}
      {...rest}>
      {children}
    </Container>
  );
});

FlexContainer.displayName = "FlexContainer";

FlexContainer.defaultProps = {
  flexDirection: "row",
  justifyContent: "flex-start",
  flexWrap: true,
};

export default FlexContainer;
