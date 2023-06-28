import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import theme from "../../../theme";
import Glyph from "../../../../public/assets/icons/glyph.svg";
import Icon from "../../atoms/Icon";
import { NEW_BILL } from "../../../utils/constants";

export type ReimbursementPageHeaderProps = {
  handleOpenNewBill: () => void;
  heading: string;
};

const WrapperBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  margin: "30px 40px",
});

const CustomButton = styled(Button)({
  height: "2rem",
  width: "6.5rem",
  border: "1px solid rgba(60, 66, 87, 0.12)",
  borderRadius: "4px",
  color: theme.palette.text.secondary,
  boxShadow:
    "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
});

const ReimbursementPageHeader = (props: ReimbursementPageHeaderProps) => {
  return (
    <WrapperBox>
      <Box>
        <Typography
          variant="h1"
          color={theme.palette.text.primary}
          children={props.heading}
        />
      </Box>
      <WrapperBox>
        <Box sx={{ marginRight: "20px" }}>
          <Icon alt="icon" src={Glyph} padding="5px" />
        </Box>
        <Box>
          <CustomButton
            children={NEW_BILL}
            variant="outlined"
            onClick={props.handleOpenNewBill}
          />
        </Box>
      </WrapperBox>
    </WrapperBox>
  );
};

export default ReimbursementPageHeader;
