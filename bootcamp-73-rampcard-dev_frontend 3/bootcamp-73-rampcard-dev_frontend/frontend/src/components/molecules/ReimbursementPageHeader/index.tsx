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
          <Button
            sx={{
              width: "69px",
              minWidth: "71px",
              height: "32px",
              padding: "3px 8px 5px",
              textTransform: "none",
              border: "1px solid rgba(60, 66, 87, 0.12)",
              boxShadow:
                "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
            }}
            variant="outlined"
            onClick={props.handleOpenNewBill}
          >
            <Typography
              variant="body2"
              children={NEW_BILL}
              color={theme.palette.other.mediumEmphasis}
            />
          </Button>
        </Box>
      </WrapperBox>
    </WrapperBox>
  );
};

export default ReimbursementPageHeader;
