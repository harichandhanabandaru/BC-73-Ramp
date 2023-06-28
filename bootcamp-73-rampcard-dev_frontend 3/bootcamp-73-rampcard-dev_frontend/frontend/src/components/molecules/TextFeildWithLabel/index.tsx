import React, { ChangeEvent } from "react";
import MuiTextfield from "../../atoms/RampCategoryTextFeild";
import MuiTypography from "../../atoms/RampCardTypography";
import { Stack, Box } from "@mui/material";
import { styled } from "@mui/system";

interface TextFieldWithLabelProps {
  label: string;
  placeholder: string;
  icon?: React.ReactNode;
  sx?: object;
  name?: string;
  value?: string;
  iconStart?: React.ReactNode;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const StyleBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flext-start",
  gap: "4px",
});
const StyleStack = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  alignItems: "center",
});

const TextFieldWithLabel = ({
  label,
  placeholder,
  icon,
  name,
  onChange,
  value,
  sx,
  iconStart,
}: TextFieldWithLabelProps) => {
  return (
    <StyleBox>
      <MuiTypography text={label} variant="body2" sx={{ color: "#404452" }} />
      <StyleStack>
        <MuiTextfield
          placeholder={placeholder}
          name={name}
          size="small"
          onChange={onChange}
          sx={{ cursor: "pointer", ...sx }}
          value={value}
          iconStart={iconStart}
        />
        {icon}
      </StyleStack>
    </StyleBox>
  );
};

export default TextFieldWithLabel;
