import styled from "styled-components";
import { Props } from ".";

export const Container = styled.div<Props>`
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "initial")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "initial")};
  width: ${({ width }) => (width ? width : "100%")};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  position: ${({ position }) => (position ? position : "relative")};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? "wrap" : "nowrap")};
  height: ${({ height }) => height || "auto"};
  max-height: ${({ maxHeight }) => maxHeight || "none"};
  min-height: ${({ minHeight }) => minHeight};
  cursor: ${({ onClick }) => onClick && "pointer"};
  gap: ${({ gap }) => `${gap || 0}px`};
  column-gap: ${({ columnGap }) => (columnGap ? `${columnGap}px` : "none")};
  row-gap: ${({ rowGap }) => (rowGap ? `${rowGap}px` : "none")};
  background: ${({ background }) => background ?? "none"};
  display: flex;
  border: ${({ border }) => border ?? "none"};
  border-bottom: ${({ borderBottom, border }) => (borderBottom || border) ?? "initial"};
  border-top: ${({ borderTop, border }) => (borderTop || border) ?? "initial"};
  border-left: ${({ borderLeft, border }) => (borderLeft || border) ?? "initial"};
  border-right: ${({ borderRight, border }) => (borderRight || border) ?? "initial"};
  overflow: ${({ overflow }) => overflow ?? "unset"};
  overflow-x: ${({ overflowX }) => overflowX};
  overflow-y: ${({ overflowY }) => overflowY};
  z-index: ${({ zIndex }) => zIndex};
  cursor: ${({ cursor }) => cursor ?? "unset"};
`;
