import Breakpoints from "./breakpoints";

type FontSizing = {
  [key: string]: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    "h-s": string;
    "h-m": string;
    "h-l": string;
    "h-xl": string;
  };
};

export const fontSizing: FontSizing = {
  [Breakpoints.desktop4]: {
    xs: "10px",
    s: "12px",
    m: "14px",
    l: "16px",
    xl: "18px",
    "h-s": "20px",
    "h-m": "24px",
    "h-l": "32px",
    "h-xl": "48px",
  },
  [Breakpoints.tablet]: {
    xs: "9px",
    s: "11px",
    m: "13px",
    l: "15px",
    xl: "16px",
    "h-s": "18px",
    "h-m": "22px",
    "h-l": "28px",
    "h-xl": "42px",
  },
  [Breakpoints.mobile3]: {
    xs: "8px",
    s: "10px",
    m: "12px",
    l: "14px",
    xl: "14px",
    "h-s": "16px",
    "h-m": "20px",
    "h-l": "24px",
    "h-xl": "32px",
  },
};
