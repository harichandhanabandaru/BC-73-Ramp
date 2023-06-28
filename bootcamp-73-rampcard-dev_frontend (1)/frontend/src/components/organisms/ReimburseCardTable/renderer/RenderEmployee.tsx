import { Box, Typography } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import React from "react";

export const RenderEmployee = (props: GridRenderCellParams) => {
  return (
    <Box sx={{ paddingTop: "5px", paddingBox: "5px" }}>
      {props.row.employees || "-"}
      <br />
      <Typography variant={"body3"}>{props.row.joining_date || "-"}</Typography>
    </Box>
  );
};
