import * as React from "react";
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import IconTypography from "../../molecules/IconTypography";
import TypographyTextfieldIcon from "../../molecules/TypographyTextfieldIcon";
import Cross from "../../../../public/assets/icons/cross.svg";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import {
  CREATE_RAMP_CATEGORY_CARD_BODY,
  CREATE_RAMP_CATEGORY_CARD_TEXT,
} from "../../../utils/constants";
import theme from "../../../theme";
import { Box, SnackbarContent, Snackbar, Grid } from "@mui/material";
import styled from "@emotion/styled";
import plus from "/public/assets/icons/plusInBlueColor.svg";
import { useState } from "react";
import { VALID_NAME } from "../../../utils/constants";

export interface Props {
  cancelbtntext: string;
  submitbtntext: string;
  addbtntext: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpen: () => void;
}

const CreateRampCategoryCard = (props: Props) => {
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");
  const [snackbar, setSnackbar] = useState(false);
  const [fields, setFields] = useState([
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
  ]);

  const handleAddField = () => {
    if (fields.length != 0) {
      setFields([
        ...fields,
        { id: fields[fields.length - 1].id + 1, value: "" },
      ]);
    } else {
      setFields([...fields, { id: 1, value: "" }]);
    }
  };

  const handleRemoveField = (id: number) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleChangeField = (id: number, value: string) => {
    const newFields = fields.map((field) =>
      field.id === id ? { ...field, value } : field
    );

    setFields(newFields);
  };

  const handleSubmit = () => {
    const validFields = fields.filter((field) => VALID_NAME.test(field.value));
    if (validFields.length !== fields.length) {
      alert("Please fill out all fields correctly");
      return;
    }
    props.handleOpen();
    handleOpenSnackbar();
  };

  const handleClose = () => {
    setFields([
      { id: 1, value: "" },
      { id: 2, value: "" },
      { id: 3, value: "" },
    ]);
    props.handleOpen();
  };

  const handleOpenSnackbar = () => {
    setSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbar(false);
  };

  const InputBox = styled(Box)({
    marginBottom: "12px",
  });

  const inputList = fields.map((field) => (
    <InputBox key={field.id}>
      <TypographyTextfieldIcon
        heading={CREATE_RAMP_CATEGORY_CARD_TEXT[5]}
        alt={"crossicon"}
        src={Cross}
        placeholder={CREATE_RAMP_CATEGORY_CARD_TEXT[6]}
        padding={"9px 0px 9px 21px"}
        height={"1.75rem"}
        width={"22.5rem"}
        error={field.value && !VALID_NAME.test(field.value)}
        handleTextChange={(event) =>
          handleChangeField(field.id, event.target.value)
        }
        text={field.value}
        onRemove={() => handleRemoveField(field.id)}
      />
    </InputBox>
  ));
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

  const isSubmitDisabled = fields.some((field) => field.value === "");
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
          {inputList}
          <Box sx={{ width: "93px", height: "32px", margin: "12px 0px 0px" }}>
            <IconTypography
              content={props.addbtntext}
              color={theme.palette.primary[500]}
              onClick={handleAddField}
              icon={plus}
            />
          </Box>
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
            <Typography
              variant="body2"
              color={theme.palette.other.mediumEmhasis}
            >
              {props.cancelbtntext}
            </Typography>
          </Button>
          <Button
            sx={{
              width: "87px",
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
            disabled={isSubmitDisabled}
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

export default CreateRampCategoryCard;
