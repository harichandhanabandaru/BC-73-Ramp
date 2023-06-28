import React from "react";
import { ButtonProps } from "./ButtonProps";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";
const StyledButton = styled(Button)({
  "&.Mui-disabled": {
    backgroundColor: "red",
    color: "white",
  },
  "&.MuiButton-root": {
    textTransform: "none",
  },
});
const MuiButton = ({ text, testId, ...props }: ButtonProps) => {
  return (
    <Box>
      <StyledButton {...props} data-testid={testId}>
        {text}
      </StyledButton>
    </Box>
  );
};

export default MuiButton;
