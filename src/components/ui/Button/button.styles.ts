import styled from "styled-components";
import { ButtonProps, ButtonVariant, ButtonSize } from ".";

export const ButtonStyle = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 24px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  width: ${({ width }) => width || "fit-content"};
  height: ${({ height }) => height || "fit-content"};
  font-size: ${({ size }) => getSizeFontSize(size)};
  font-family: Poppins, sans-serif;
  padding: ${({ size }) => getSizePadding(size)};

  &:focus {
    outline: none;
  }

  ${({ variant, theme }) => getVariantStyles(variant, theme)}
`;

const getSizePadding = (size: ButtonSize) => {
  switch (size) {
    case "s":
      return "4px 16px";
    case "m":
      return "4px 16px";
    case "l":
      return "6px 16px";
    case "xl":
      return "10px 30px";
    case "auto":
    default:
      return "4px 16px";
  }
};

const getSizeFontSize = (size: ButtonSize) => {
  switch (size) {
    case "s":
      return "12px";
    case "m":
      return "14px";
    case "l":
      return "16px";
    case "xl":
      return "18px";
    case "auto":
    default:
      return "16px";
  }
};

const getVariantStyles = (variant: ButtonVariant, theme: any) => {
  switch (variant) {
    case ButtonVariant.PRIMARY:
      return `
        color: ${theme.colors.neutral.neutral10};
        background-color: ${theme.colors.primary.default};

        &:hover {
          background-color: ${theme.colors.primary.hover};
        }

        &:focus {
          background-color: ${theme.colors.primary.focus};
          border: 1px solid ${theme.colors.primary.focus};
        }
      `;
    default:
      return "";
  }
};
