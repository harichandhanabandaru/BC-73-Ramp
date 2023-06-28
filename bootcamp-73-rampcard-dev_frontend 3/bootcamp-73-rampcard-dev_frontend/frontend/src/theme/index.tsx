import { createTheme } from "@mui/material";
import React from "react";

declare module "@mui/material/styles" {
  interface PaletteColor {
    300: string;
    500: string;
    700: string;
  }

  interface CustomPalette {
    other: {
      stroke50: string;
      stroke100: string;
      icon: string;
      skipprifilling: string;
      highEmphasis: string;
      mediumEmphasis: string;
      red100: string;
      merchantRuleText: string;
      merchantRuleTitle: string;
    };
    structural: {
      50: string;
      100: string;
    };
    accent: {
      blue100: string;
      red100: string;
      green100: string;
      green50: string;
      white: string;
    };
  }

  interface CustomTypography {
    body3: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    subtitle3: React.CSSProperties;
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
  interface TypographyVariants extends CustomTypography {}
  interface TypographyVariantsOptions extends CustomTypography {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    caption1: true;
    caption2: true;
    body3: true;
    subtitle3: true;
  }
}

export let theme = createTheme({
  palette: {
    primary: {
      "300": "#CFF5F6",
      "500": "#625AFA",
      "700": "#0055BC",
    },
    text: {
      primary: "#1b1925",
      secondary: "#414152",
      disabled: "#677085",
    },
    other: {
      stroke50: "#EBEEF1",
      stroke100: "#C0C8D2",
      icon: "#545969",
      skipprifilling: "#E0E6EB",
      highEmphasis: "#1A1B25",
      mediumEmphasis: "#404452",
      red100: "#ED6704",
      merchantRuleText: "#687385",
      merchantRuleTitle: "#30313D",
    },
    structural: {
      50: "#F6F8FA",
      100: "#EBEEF1",
    },
    accent: {
      blue100: "#0196ED",
      red100: "#ff5200",
      green100: "#007811",
      green50: "#c5ffc3",
      white: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Segoe UI",
    h1: {
      fontStyle: "bold",
      fontSize: "28px",
      lineHeight: "40px",
      fontWeight: 700,
    },
    h2: {
      fontStyle: "normal",
      fontSize: "24px",
      lineHeight: "40px",
      fontWeight: 700,
    },
    body1: {
      fontStyle: "bold",
      fontSize: "14px",
      lineHeight: "18.62px",
      fontWeight: 700,
    },
    body2: {
      fontStyle: "normal",
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: 600,
    },
    body3: {
      fontStyle: "normal",
      fontSize: "14px",
      lineHeight: "18.62px",
      fontWeight: 400,
    },
    caption1: {
      fontStyle: "normal",
      fontSize: "12px",
      lineHeight: "15.96px",
      fontWeight: 600,
    },
    caption2: {
      fontStyle: "normal",
      fontSize: "12px",
      lineHeight: "15.96px",
      fontWeight: 400,
    },
    subtitle1: {
      fontStyle: "bold",
      fontSize: "16px",
      lineHeight: "21.28px",
      fontWeight: 700,
    },
    subtitle2: {
      fontStyle: "semibold",
      fontSize: "16px",
      lineHeight: "21.28px",
      fontWeight: 600,
    },
    subtitle3: {
      fontStyle: "normal",
      fontSize: "16px",
      lineHeight: "20px",
      fontWeight: 400,
    },
  },
});

export default theme;
