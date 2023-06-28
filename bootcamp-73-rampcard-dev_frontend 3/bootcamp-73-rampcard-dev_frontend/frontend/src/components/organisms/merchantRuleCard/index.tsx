import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  Divider,
  Grid,
} from "@mui/material";
import React from "react";
import Button from "../../atoms/Button";
import theme from "../../../theme/index";
import DropDown from "../../atoms/DropDown";
import Typography from "../../atoms/Typography";
import { CANCEL, CREATE_RULE } from "../../../utils/constants";

export interface RuleCardProps extends DialogProps {
  title: string;
  transaction: string;
  unsyncedTrans: number;
  options: { label: string; value: string }[];
  selectedOption: string;
  onDropDownChange: (event: any) => void;
  handleCancelClick: () => void;
  handleCreateClick: () => void;
}

const MerchantRuleCard = (props: RuleCardProps) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      data-testid="RuleCard"
      sx={{
        position: "absolute",
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "448px",
            maxHeight: "284px",
          },
          "& .MuiDialogTitle-root": {
            padding: "16px 12px 16px 20px",
          },
          "& .MuiDialogContent-root": {
            padding: "16px 20px",
            overflow: "hidden",
          },
          "& .MuiButtonBase-root": {
            marginLeft: "12px",
          },
          "& .MuiDialogActions-root": {
            padding: "14px 20px",
          },
        },
      }}
    >
      <DialogTitle>
        <Typography
          children={props.title}
          variant={"body2"}
          color={theme.palette.other.highEmphasis}
          fontWeight={600}
        />
      </DialogTitle>
      <Divider />
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Grid container direction={"column"} spacing={"16px"}>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.other.highEmphasis}
                fontWeight={600}
                children={`Set a default QuickBooks Category for "${props.transaction}". This rule will be applied automatically to all unsynced and future transactions from "${props.transaction}".`}
              />
            </Grid>
            <Grid item>
              <Grid item>
                <DropDown
                  options={[
                    { label: "Expense", value: "Expense" },
                    { label: "Travel", value: "Travel" },
                    { label: "Travel meals", value: "Travel meals" },
                    { label: "Hotels", value: "Hotels" },
                  ]}
                  onChange={props.onDropDownChange}
                  value={props.selectedOption}
                  placeHolder={"Choose one"}
                  styles={{
                    borderRadius: "8px",
                    width: "284px",
                    height: "28px",
                    borderColor: theme.palette.other.stroke100,
                    padding: "7px 2px 7px 8px",
                    "& .MuiSelect-icon": {
                      paddingRight: "2px",
                    },
                  }}
                />
              </Grid>
              <Grid item>
                <div>
                  <Typography
                    variant="caption1"
                    children={`${props.unsyncedTrans} unsynced transactions`}
                    color={theme.palette.other.red100}
                    fontSize={"12px"}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button
          sx={{
            width: "58px",
            minWidth: "58px",
            height: "2rem",
            padding: "3px 8px 5px",
            textTransform: "none",
            boxShadow:
              "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
            borderRadius: "4px",
            border: "1px solid rgba(60, 66, 87, 0.12)",
          }}
          backgroundColor={theme.palette.accent.white}
          variant="outlined"
          onClick={props.handleCancelClick}
        >
          <Typography
            variant="body2"
            color={theme.palette.other.mediumEmphasis}
            children={CANCEL}
          />
        </Button>

        <Button
          sx={{
            width: "86px",
            minWidth: "86px",
            height: "2rem",
            padding: "3px 8px 5px",
            textTransform: "none",
            boxShadow:
              "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
            borderRadius: "4px",
            border: `1px solid ${theme.palette.primary["500"]}`,
          }}
          variant="contained"
          onClick={props.handleCreateClick}
        >
          <Typography
            variant="body3"
            color={theme.palette.structural[50]}
            children={CREATE_RULE}
          />
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MerchantRuleCard;
