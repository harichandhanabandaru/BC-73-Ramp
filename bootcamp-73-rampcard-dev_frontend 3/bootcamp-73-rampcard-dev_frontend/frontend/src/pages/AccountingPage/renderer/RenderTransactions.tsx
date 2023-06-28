import { Box, Typography } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import React from "react";
import Eye from "../../../../public/assets/icons/eye.svg";
import Icon from "../../../components/atoms/Icon";

export const RenderTransactions = (props: GridRenderCellParams) => {
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
        {props.value || "-"}
        <br />
        <Typography variant={"body3"}>{props.row.productName || "-"}</Typography>
      </Box>
      <Icon alt="icon" src={Eye} />
    </Box>
  );
};
