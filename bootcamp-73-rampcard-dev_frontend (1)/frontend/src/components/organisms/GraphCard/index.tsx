import React from "react";
import GraphImg from "../../../../public/assets/icons/graph.svg";
import { Grid } from "@mui/material";
import Icon from "../../atoms/Icon";

const Graph = () => {
  return (
    <Grid item data-testid="graph">
      <Icon src={GraphImg} alt="graph" width="100%"/>
    </Grid>
  );
};
export default Graph;
