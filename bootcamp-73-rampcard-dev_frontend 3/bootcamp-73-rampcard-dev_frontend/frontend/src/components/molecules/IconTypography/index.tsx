import { Grid } from "@mui/material";
import React from "react";
import Typography from "../../atoms/Typography";
import Icon from "../../atoms/Icon/index";

interface IconTypographyProps {
  content: string;
  color: string;
  icon: string;
  onClick: () => void;
}

const IconTypography = (props: IconTypographyProps) => {
  return (
    <Grid
      container
      direction="row"
      columnGap={1}
      alignItems="center"
      justifyContent="center"
      onClick={props.onClick}
      data-testid="IconTypography"
      style={{ cursor: "pointer" }}
    >
      <Grid item>
        <Icon alt={"icon"} src={props.icon} />
      </Grid>
      <Grid item>
        <Typography
          children={props.content}
          variant="body2"
          color={props.color}
        />
      </Grid>
    </Grid>
  );
};

export default IconTypography;
