import { Box, Typography } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import React from "react";
import Bank from "../../../../../public/assets/icons/bank.svg";
import Icon from "../../../atoms/Icon";

export const RenderEmployee = (props: GridRenderCellParams) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          paddingTop: "8px",
          paddingBottom: "8px",
          paddingBox: "5px",
          width: "120px",
        }}
      >
        {props.row.employees || "-"}
        <br />
        <Typography variant={"body3"}>{props.row.amount || "-"}</Typography>
      </Box>
      <Icon alt="icon" src={Bank} />
    </Box>
  );
};
