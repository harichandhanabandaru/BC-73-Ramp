import React from "react";
import { Typography as MuiTypography, TypographyProps } from "@mui/material";

export interface Props extends TypographyProps {}

const Typography = (props: Props) => {
  return (
    <>
      <MuiTypography {...props} data-testid="Typography" />
    </>
  );
};

export default Typography;
