import { Button, Grid } from "@mui/material";
import React from "react";
import { HEADERNAMES, RAMP_PERKS } from "../../../utils/constants";
import ChipSet from "../../atoms/Chip";
import theme from "../../../theme";

interface Props {
  data: HEADERNAMES[];
  index: number;
  icon: string | JSX.Element;
  handleChange: (
    index: number,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  value: number;
}

const Header = (props: Props) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      data-testid="header"
      style={{ cursor: "pointer" }}
    >
      <Grid item>
        <Grid container>
          {props.data.map((header, index) => (
            <Button
              key={header.id}
              onClick={(event) => props.handleChange(index, event)}
              disableRipple={true}
            >
              {props.value === index && (
                <ChipSet
                  content={header.text}
                  icon={props.icon}
                  backgroundColor={theme.palette.primary[500]}
                  color="white"
                />
              )}
              {props.value !== index && (
                <ChipSet
                  content={header.text}
                  color={theme.palette.other.icon}
                  icon={props.icon}
                />
              )}
            </Button>
          ))}
        </Grid>
      </Grid>

      <Grid item paddingTop="7px">
        <ChipSet
          content={RAMP_PERKS}
          icon={props.icon}
          color={theme.palette.text.disabled}
        />
      </Grid>
    </Grid>
  );
};

export default Header;
