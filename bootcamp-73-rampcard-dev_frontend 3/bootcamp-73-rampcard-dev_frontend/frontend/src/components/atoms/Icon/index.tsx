import { IconProps, styled } from "@mui/material";
import React from "react";

interface Props extends IconProps{
  alt: string;
  src: string;
  width?: string;
  height?: string;
  padding?: string;
  onClick?: () => void;
}

const StyledIcon = styled("img")((props: Props) => ({
  height: props.height,
  width: props.width,
  padding: props.padding,
  alt: props.alt,
}));

const Icon = (props: Props) => {
  const { src, width, height, padding, alt, onClick } = props;
  return (
    <StyledIcon
      src={src}
      width={width}
      height={height}
      padding={padding}
      alt={alt}
      onClick={onClick}
      data-testid="icon"
    />
  );
};

export default Icon;
