import { Grid, styled, TextField } from "@mui/material";
import React from "react";
import Typography from "../../atoms/Typography";
import theme from "../../../theme";
import "./index.css";
import Icon from "../../atoms/Icon";
import { Box } from "@mui/material";
import "./index.css";
import Line from "../../../../public/assets/icons/Line.svg";
import Vector from "../../../../public/assets/icons/Vector.svg";
import Banner from "../../../../public/assets/icons/Banner.svg";

const StyledTextFieldDate = styled(TextField)({
  "& .MuiInputBase-root": {
    borderRadius: "12px",
    width: "170px",
    height: "28px",
    paddingLeft: "10px",
    fontWeight: "normal",
  },
});

const StyledTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    borderRadius: "8px",
    width: "350px",
    height: "28px",
    paddingRight: "2px",
    fontWeight: "normal",
  },
});

export interface DropDownProps {
  sendDateText: string;
  sendDate: string;
  deliveryTime: string;
  deliveryTimeDescription: string;
  VendorReceiveDate: string;
  VendorReceiveDateText: string;
}

const DropDownText = (props: DropDownProps) => {
  return (
    <>
      <Box sx={{ marginTop: "25px" }}>
        <Typography
          children={props.sendDateText}
          variant="body2"
          color={theme.palette.text.secondary}
          sx={{ marginBottom: "4px" }}
        />
        <StyledTextFieldDate value={"09/12/23"} onChange={() => {}} />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "12px",
          padding: "16px",
          flexDirection: "column",
        }}
      >
        <Grid item>
          <Icon alt={""} src={Line} />
        </Grid>
        <Typography
          children={props.deliveryTime}
          variant="body2"
          color={theme.palette.text.secondary}
          sx={{ marginBottom: "1px" }}
        />
        <Typography
          children={props.deliveryTimeDescription}
          variant="caption1"
          color={theme.palette.text.secondary}
          sx={{ marginBottom: "4px" }}
        />
        <Grid item>
          <Icon alt={""} src={Vector} />
        </Grid>
      </Box>

      <Box>
        <Typography
          children={props.VendorReceiveDateText}
          variant="body2"
          color={theme.palette.text.secondary}
          sx={{ marginBottom: "4px" }}
        />
        <StyledTextFieldDate value={"09/12/23"} onChange={() => {}} />
      </Box>
      <Grid item>
        <Typography
          variant="body2"
          color={theme.palette.text.secondary}
          children={"Pay from account"}
        />
      </Grid>
      <Grid item>
        <StyledTextField value={"Manual Account (1873)"} />
      </Grid>
      <Grid item>
        <Typography
          variant="body2"
          color={theme.palette.text.secondary}
          children={"Send payment to"}
        />
      </Grid>
      <Grid item>
        <StyledTextField value={"Gold Mining Outfitters (8532)"} />
      </Grid>
      <Grid item>
        <Typography
          variant="body2"
          color={theme.palette.text.secondary}
          children={"To be approved by"}
        />
      </Grid>
      <Grid item>
        <Icon alt={""} src={Banner} />
      </Grid>
    </>
  );
};

export default DropDownText;
