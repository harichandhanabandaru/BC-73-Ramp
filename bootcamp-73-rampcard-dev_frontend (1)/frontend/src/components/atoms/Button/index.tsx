import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";
export interface Props extends ButtonProps {
  width?: string;
  backgroundColor?: string;
  textColor?: string;
  bordercolor?: string;
}

const Button = (props: Props) => {
  const { onClick } = props;
  return (
    <MuiButton
      style={{
        backgroundColor: `${props.backgroundColor}`,
        border: `1px solid ${props.bordercolor}`,
        color: `${props.textColor}`,
        borderRadius: "4px",
        textTransform: "none",
      }}
      width={props.width}
      backgroundColor={props.backgroundColor}
      data-testid="Button"
      onClick={onClick}
      {...props}
    />
  );
};

export default Button;
