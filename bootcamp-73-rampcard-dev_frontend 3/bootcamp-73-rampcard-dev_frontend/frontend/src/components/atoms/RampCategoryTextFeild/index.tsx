import InputAdornment from "@mui/material/InputAdornment";
import { TextField } from "@mui/material";
import React from "react";
interface TextfieldProps {
  placeholder?: string;
  iconStart?: React.ReactNode;
  name?: string;
  value?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  sx?: object;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  type?: string;
  testId?: string;
  size?: "small" | "medium";
}

export default function MuiTextfield({
  placeholder,
  size,
  iconStart,
  name,
  value,
  onChange,
  type,
  sx,
  onClick,
  testId,
}: TextfieldProps) {
  return (
    <TextField
      data-testId={name}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      size={size}
      fullWidth
      onClick={onClick}
      InputProps={{
        style: {
          width: "360px",
          height: "28px",
          borderRadius: "8px",
          paddingLeft: "2px",
          fontSize: "14px",
          lineHeight: "18px",
          fontFamily: "Segoe UI",
          fontWeight: 400,
        },
        sx: {
          "& input": {
            padding: "6px 8px !important",
          },
        },
        startAdornment: (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ),
      }}
      variant={"outlined"}
      data-testid={testId}
      sx={sx}
    />
  );
}
