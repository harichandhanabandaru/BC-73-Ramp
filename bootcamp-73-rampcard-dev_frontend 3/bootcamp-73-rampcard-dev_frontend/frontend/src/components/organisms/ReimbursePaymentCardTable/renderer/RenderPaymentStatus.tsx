import { Box, Typography } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import React from "react";
import Check from "../../../../../public/assets/icons/check.svg";
import Icon from "../../../atoms/Icon";

export const RenderPaymentStatus = (props: GridRenderCellParams) => {
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
        {props.row.ach || "-"}
        <br />
        <Typography variant={"body3"}>
          {props.row.payment_status || "-"}
        </Typography>
      </Box>
      <Icon alt="icon" src={Check} />
    </Box>
  );
};
