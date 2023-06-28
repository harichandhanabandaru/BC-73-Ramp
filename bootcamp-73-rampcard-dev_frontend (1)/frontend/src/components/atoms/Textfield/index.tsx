import React from "react";
import {
  TextField as MuiTextField,
  OutlinedTextFieldProps,
} from "@mui/material";
export interface TextFieldProps extends OutlinedTextFieldProps {
  label?: string;
  type?: string;
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  value?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  height?: string;
  width?: string;
  borderRadius?: string;
}

export const TextField = (props: TextFieldProps) => {
  const InputPropsStyle = {
    height: props.height,
    width: props.width,
    borderRadius: props.borderRadius,
    label: {
      fontFamily: "Segoe UI, sans-serif",
      fontSize: "14px",
      fontWeight: 500,
    },
    input: {
      fontFamily: "Segoe UI, sans-serif",
      fontSize: "14px",
      fontWeight: 400,
      variant: "body3",
    },
  };
  return (
    <MuiTextField
      variant={props.variant}
      color={props.color}
      type={props.type}
      id={props.id}
      fullWidth={props.fullWidth}
      placeholder={props.placeholder}
      size={props.size}
      label={props.label}
      value={props.value}
      autoFocus={props.autoFocus}
      InputProps={{
        startAdornment: props.startAdornment,
        endAdornment: props.endAdornment,
        style: InputPropsStyle,
      }}
      onChange={props.handleChange}
      inputProps={{ "data-testid": "text-field" }}
      {...props}
    ></MuiTextField>
  );
};
