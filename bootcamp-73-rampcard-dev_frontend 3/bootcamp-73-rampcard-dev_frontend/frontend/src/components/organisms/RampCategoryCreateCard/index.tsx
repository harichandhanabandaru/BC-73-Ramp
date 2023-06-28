import * as React from "react";
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import {
  CREATE_RAMP_CATEGORY_CARD_BODY,
  CREATE_RAMP_CATEGORY_CARD_TEXT,
} from "../../../utils/constants";
import theme from "../../../theme";
import { Box, SnackbarContent, Snackbar } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";
import CreateRampCategoryBody from "../CreateRampCategoryBody/index";
import { createRampCategories } from "../../apis/Api";

export interface Props {
  cancelbtntext: string;
  submitbtntext: string;
  addbtntext: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpen: () => void;
}

interface FormValues {
  [key: string]: string;
}

export const ComponentStack = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  paddingLeft: "20px",
  paddingBottom: "101px",
});
const RampCategoryCreateCard = (props: Props) => {
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");
  const [snackbar, setSnackbar] = useState(false);

  const handleSubmit = () => {
    const storedFormValues = localStorage.getItem("formValues");
    const formValues = JSON.parse(storedFormValues);

    for (const key in formValues) {
      const value = formValues[key];
      createRampCategories(value);
    }
    props.handleOpen();
    handleOpenSnackbar();
  };

  const handleOpenSnackbar = () => {
    setSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbar(false);
  };

  const handleClose = () => {
    props.handleOpen();
  };

  const WapperBox = styled(Box)({
    width: "516px",
    height: "56px",
  });

  const BodyBox = styled(DialogContent)({
    width: "516px",
    height: "550px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    padding: "16px 20px !important",
  });

  const [bool, setBool] = useState(true);

  return (
    <>
      <Dialog open={props.open} onClose={handleClose}>
        <WapperBox>
          <Typography
            children={CREATE_RAMP_CATEGORY_CARD_TEXT[0]}
            variant="body2"
            padding="16px 20px"
            color={theme.palette.other.highEmphasis}
          />
        </WapperBox>
        <BodyBox dividers={scroll === "paper"}>
          <Typography
            children={CREATE_RAMP_CATEGORY_CARD_TEXT[1]}
            variant="body2"
            color={theme.palette.other.highEmphasis}
          />
          <Box sx={{ width: "408px", height: "57px", marginBottom: "32px" }}>
            <Typography
              children={CREATE_RAMP_CATEGORY_CARD_BODY}
              variant="body3"
              color={theme.palette.other.highEmphasis}
            />
          </Box>
          <CreateRampCategoryBody setBool={setBool} />
        </BodyBox>

        <DialogActions sx={{ height: "60px", padding: "0px 0px !important" }}>
          <Button
            onClick={handleClose}
            sx={{
              width: "58px",
              minWidth: "58px",
              height: "2rem",
              padding: "3px 8px 5px",
              textTransform: "none",
              border: "1px solid rgba(60, 66, 87, 0.12)",
              boxShadow:
                "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
            }}
            variant="outlined"
          >
            <Typography variant="body2" color={theme.palette.other.mediumEmphasis}>{props.cancelbtntext}</Typography>
          </Button>
          <Button
            sx={{
              width: "90px",
              minWidth: "87px",
              height: "2rem",
              padding: "3px 8px 5px",
              textTransform: "none",
              boxShadow:
                "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
              border: `1px solid ${theme.palette.primary["500"]}`,
              "&:disabled": {
                backgroundColor: theme.palette.primary["500"],
                opacity: "0.5",
                color: "#FFFFFF",
              },
              margin: "0px 20px 0px 12px !important",
            }}
            onClick={handleSubmit}
            variant="contained"
            disabled={bool}
          >
            <Typography
              variant="body2"
              color={theme.palette.structural[50]}
              children={props.submitbtntext}
            />
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <SnackbarContent message="Rule created successfully!" />
      </Snackbar>
    </>
  );
};

export default RampCategoryCreateCard;
