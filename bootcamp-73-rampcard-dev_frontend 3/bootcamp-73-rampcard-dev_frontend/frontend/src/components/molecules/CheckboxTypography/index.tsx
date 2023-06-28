import { Grid } from "@mui/material";
import React from "react";
import CheckboxComponent from "../../atoms/Checkbox";
import Typography from "../../atoms/Typography";

interface Props {
  text: string;
}

const CheckboxTypography = (props: Props) => {
  return (
    <Grid
      container
      direction="row"
      columnGap={1}
      alignItems="center"
      data-testid="checkbox-typo"
      sx={{ gap: "0px" }}
    >
      <Grid item>
        <CheckboxComponent />
      </Grid>
      <Grid item sx={{ paddingLeft: "3px" }}>
        <Typography
          variant="body2"
          color="rgba(64, 68, 82, 1)"
          children={props.text}
        />
      </Grid>
    </Grid>
  );
};

export default CheckboxTypography;
