import { Grid } from "@mui/material";
import React from "react";
import CheckboxComponent from "../../atoms/Checkbox";
import Typography from "../../atoms/Typography";
import theme from "../../../theme";

interface Props{
    text: string;
}

const CheckboxTypography = (props: Props) => {
    return (
      <Grid
        container
        direction="row"
        columnGap={1}
        alignItems="stretch"
        data-testid="checkbox-typo"
      >
        <Grid item>
          <CheckboxComponent />
        </Grid>
        <Grid item>
          <Typography
            variant="body2"
            color={theme.palette.text.secondary}
            children={props.text}
          />
        </Grid>
      </Grid>
    );
}

export default CheckboxTypography;
