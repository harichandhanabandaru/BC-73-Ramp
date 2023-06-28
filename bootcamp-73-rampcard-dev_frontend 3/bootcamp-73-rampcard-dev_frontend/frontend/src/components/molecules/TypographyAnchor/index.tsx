import React from "react";
import Typography from "../../atoms/Typography";
import Anchor from "../../atoms/Anchor";
import { Box } from "@mui/material";
import theme from "../../../theme";

export interface TypographyAnchor {
  text: string;
  value: string;
}

const TypographyAnchor = (props: TypographyAnchor) => {
  return (
    <Box sx={{ display: "flex" }} columnGap={1}>
      <Typography
        children={props.value}
        variant={"body2"}
        color={theme.palette.other.merchantRuleText}
      />
      <Anchor text={props.text} />
    </Box>
  );
};

export default TypographyAnchor;
