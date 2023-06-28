import { Checkbox, CheckboxProps, styled } from "@mui/material";
import React from "react";
import theme from "../../../theme";

interface Props extends CheckboxProps {}

const StyledCheckBox = styled(Checkbox)({
  width: "14px",
  height: "14px",
  border: `1px solid ${theme.palette.other.stroke100}`,
  boxShadow:
    "0px 2px 5px rgba(60, 66, 87, 0.08), 0px 1px 1px rgba(0, 0, 0, 0.12)",
  borderRadius: "4px",
});

const CheckboxComponent = (props: Props) => {
  return (
    <Checkbox
      data-testid="checkbox"
      onChange={props.onChange}
      checked={props.checked}
      sx={{
        width: "14px",
        height: "14px",
        boxShadow:
          "0px 2px 5px rgba(60, 66, 87, 0.08), 0px 1px 1px rgba(0, 0, 0, 0.12)",
        borderRadius: "4px",
        color: theme.palette.other.stroke100,
        "&.Mui-checked": {
          color: theme.palette.primary[500],
        },
      }}
    />
  );
};

export default CheckboxComponent;
