import React from "react";
import Typography from "../../atoms/Typography";
import Icon from "../../atoms/Icon";
import { Box, TextField } from "@mui/material";
import theme from "../../../theme";
import { styled } from "@mui/material/styles";

export interface TypographyTextfieldIconProps {
  heading: string;
  alt: string;
  src: string;
  placeholder: string;
  padding: string;
  height?: string;
  width?: string;
  error?: boolean;
  handleTextChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
  onRemove: () => void;
}

const StyledGrid = styled(Box)(() => ({
  display: "flex",
  marginTop: "4px",
}));

const TypographyTextfieldIcon = (props: TypographyTextfieldIconProps) => {
  return (
    <>
      <Typography
        children={props.heading}
        variant={"body2"}
        color={theme.palette.other.mediumEmhasis}
      />
      <StyledGrid alignItems="center" style={{ cursor: "pointer" }}>
        <TextField
          size="small"
          placeholder={props.placeholder}
          InputProps={{
            style: {
              height: props.height,
              width: props.width,
              borderRadius: "8px",
              border: "1px solid " + `${theme.palette.other.stroke100}`,
              paddingLeft: "8px",
              fontSize: "14px",
              lineHeight: "18.62px",
              fontFamily: "Segoe UI",
              fontWeight: 400,
              color: theme.palette.other.merchantRuleText,
            },
            sx: {
              "& input": {
                padding: "6px 8px 6px 0px !important",
              },
            },
          }}
          value={props.text}
          onChange={props.handleTextChange}
          variant={"outlined"}
        />
        <Icon
          alt={props.alt}
          src={props.src}
          padding={props.padding}
          onClick={props.onRemove}
        />
      </StyledGrid>
    </>
  );
};

export default TypographyTextfieldIcon;
