/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import theme from "../../../theme";

interface AnchorProps {
  text: string;
  onClick?: () => void;
}

const Anchor = (props: AnchorProps) => {
  return (
    <Box onClick={props.onClick} data-testid="Anchor">
      <Link
        href="#"
        underline="none"
        color={theme.palette.primary[500]}
        variant="body2"
      >
        {props.text}
      </Link>
    </Box>
  );
};

export default Anchor;
