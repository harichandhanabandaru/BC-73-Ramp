import React from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface Props {
  content: string;
  icon: string | JSX.Element;
  color?: string;
  backgroundColor?: string;
}

const StyledGrid = styled(Grid)((props: Props) => ({
  width: "fit-content",
  height: "1.5rem",
  borderRadius: "2.5rem",
  color: props.color,
  backgroundColor: props.backgroundColor,
  fontSize: "0.875rem",
}));

const ChipSet = (props: Props) => {
  return (
    <StyledGrid
      container
      direction="row"
      columnGap={1}
      px={1.25}
      data-testid="ChipSet"
      color={props.color}
      backgroundColor={props.backgroundColor}
      content={props.content}
      icon={props.icon}
    >
      <Grid item>
        <Typography variant="body2" sx={{ textTransform: "none" }}>
          {props.content}
        </Typography>
      </Grid>
      <Grid item>{props.icon}</Grid>
    </StyledGrid>
  );
};

export default ChipSet;
