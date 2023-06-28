import { Box, Card, Chip, Grid, styled } from "@mui/material";
import React from "react";
import Typography from "../../atoms/Typography";
import theme from "../../../theme";
import {
  AMOUNT,
  PAYMENT_DETAILS,
  NEW_BILL_CARD,
  WHO_IS_FOR,
  EMPLOYEE_CONTACY,
  INVOICE_NUMBER,
  MEMO,
  QUICK_BOOKS_LOCATIONS,
  WHAT_FOR,
  QUICK_BOOKS_DESCRIPTION,
  CATEGORY,
  CLASS,
  CUSTOM_JOB,
  PAYMENT_TYPE,
  INVOICE_TOTAL,
} from "../../../utils/constants";
import { TextField } from "../../atoms/Textfield";
import Icon from "../../atoms/Icon";
import Calander from "../../../../public/assets/icons/calender.svg";
import Minimize from "../../../../public/assets/icons/minimize.svg";
import Edit from "../../../../public/assets/icons/edit.svg";
import Button from "../../atoms/Button";
import Delete from "../../../../public/assets/icons/deleteicon.svg";
import Plus from "../../../../public/assets/icons/plus.svg";
import DropDown from "../../atoms/DropDown";

interface Props {
  name: string;
  subtitle: string;
  billable: string;
  senderName: string;
  account: string;
  altmessage: string;
  src: string;
  crosssrc: string;
  price: string;
  handleBill: () => void;
  isReviewDisabled: boolean;
}

const StyledTextField = styled(TextField)({
  borderRadius: "0.5rem",
  border: "1px solid #C0C8D2",
});

const NewBillCard = (props: Props) => {
  return (
    <Grid container direction="column" rowGap={2.5} data-testid="bill">
      <Grid item>
        <Typography
          variant="h1"
          color={theme.palette.other.highEmphasis}
          children={NEW_BILL_CARD}
        />
      </Grid>
      <Box
        height="408px"
        paddingLeft="8px"
        sx={{
          overflowY: "auto",
          overflowX: "hidden",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Grid item>
          <Grid container direction="column" rowGap={1}>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmhasis}
                children={WHO_IS_FOR}
              />
            </Grid>
            <Grid item>
              <Grid container columnGap={1}>
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    color={theme.palette.other.highEmphasis}
                    children={props.name}
                  />
                </Grid>
                <Grid item paddingLeft={26}>
                  <Icon alt={""} src={Minimize} />
                </Grid>
                <Grid item>
                  <Icon alt={""} src={Edit} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item marginTop={1.5}>
          <Grid container direction="column" rowGap={0.5}>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmhasis}
                children={EMPLOYEE_CONTACY}
              />
            </Grid>
            <Grid item>
              <DropDown
                options={[
                  { label: "Expense", value: "Expense" },
                  { label: "Travel", value: "Travel" },
                  { label: "Travel meals", value: "Travel meals" },
                  { label: "Hotels", value: "Hotels" },
                ]}
                placeHolder={"Choose one"}
                styles={{
                  borderRadius: "8px",
                  border: `1px solid ${theme.palette.other.stroke100}`,
                  width: "22rem",
                  height: "1.75rem",
                  padding: "4.5px 0px 4.5px 8px",
                }}
                value={""}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item marginTop={2}>
          <Grid container direction="column" rowGap={0.5}>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmhasis}
                children={INVOICE_NUMBER}
              />
            </Grid>
            <Grid item>
              <StyledTextField
                size="small"
                width="22rem"
                height="1.75rem"
                variant={"outlined"}
              />
            </Grid>
            <Grid item marginTop={0.5}>
              <Grid container columnGap="10px">
                <Grid item>
                  <Icon alt={props.altmessage} src={props.src} />
                </Grid>
                <Grid item>
                  <Typography
                    variant="caption1"
                    color={theme.palette.other.mediumEmhasis}
                    children={props.subtitle}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item marginTop={3.5}>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmhasis}
                children={WHAT_FOR}
              />
            </Grid>
            <Grid item sx={{ display: "flex" }} marginTop={1}>
              <Box sx={{ marginRight: "9px" }}>
                <Typography
                  children="Invoice date"
                  variant="body2"
                  color={theme.palette.other.mediumEmhasis}
                />
                <StyledTextField
                  size="small"
                  width="10.75rem"
                  height="1.75rem"
                  variant={"outlined"}
                  startAdornment={<Icon alt={""} src={Calander} />}
                />
              </Box>
              <Box>
                <Typography
                  children="Bill due date"
                  variant="body2"
                  color={theme.palette.other.mediumEmhasis}
                />
                <StyledTextField
                  size="small"
                  width="10.75rem"
                  height="1.75rem"
                  variant={"outlined"}
                  startAdornment={<Icon alt={""} src={Calander} />}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item marginTop={2}>
          <Grid container direction="column" rowGap={0.5}>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmhasis}
                children={QUICK_BOOKS_LOCATIONS}
              />
            </Grid>
            <Grid item>
              <StyledTextField
                size="small"
                width="22rem"
                height="1.75rem"
                variant={"outlined"}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item marginTop={2}>
          <Grid container direction="column" rowGap={0.5}>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmhasis}
                children={MEMO}
              />
            </Grid>
            <Grid item>
              <StyledTextField
                size="small"
                width="22rem"
                height="2rem"
                variant={"outlined"}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item marginTop={2} marginLeft="-8px">
          <Grid
            container
            direction="column"
            rowGap={0.5}
            paddingLeft="10px"
            width="23rem"
            sx={{
              borderRadius: "6px",
              border: "1px solid #C0C8D2",
            }}
          >
            <Grid item padding="12px 10px 0px 0px" align="right">
              <Icon alt={""} src={Delete} />
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmhasis}
                children={AMOUNT}
              />
            </Grid>
            <Grid item>
              <StyledTextField
                size="small"
                width="21.75rem"
                height="1.75rem"
                variant={"outlined"}
              />
            </Grid>
            <Grid item marginTop={1.5}>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmhasis}
                children={QUICK_BOOKS_DESCRIPTION}
              />
            </Grid>
            <Grid item>
              <StyledTextField
                size="small"
                width="21.75rem"
                height="1.75rem"
                variant={"outlined"}
              />
            </Grid>
            <Grid item marginTop={1.5}>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmhasis}
                children={CATEGORY}
              />
            </Grid>
            <Grid item>
              <DropDown
                options={[
                  { label: "Expense", value: "Expense" },
                  { label: "Travel", value: "Travel" },
                  { label: "Travel meals", value: "Travel meals" },
                  { label: "Hotels", value: "Hotels" },
                ]}
                placeHolder={"Choose one"}
                styles={{
                  borderRadius: "8px",
                  border: `1px solid ${theme.palette.other.stroke100}`,
                  width: "22rem",
                  height: "1.75rem",
                  padding: "4.5px 0px 4.5px 8px",
                }}
                value={""}
              />
            </Grid>
            <Grid item marginTop={1.5}>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmhasis}
                children={CLASS}
              />
            </Grid>
            <Grid item>
              <DropDown
                options={[
                  { label: "Expense", value: "Expense" },
                  { label: "Travel", value: "Travel" },
                  { label: "Travel meals", value: "Travel meals" },
                  { label: "Hotels", value: "Hotels" },
                ]}
                value={""}
                placeHolder={"Choose one"}
                styles={{
                  borderRadius: "8px",
                  border: `1px solid ${theme.palette.other.stroke100}`,
                  width: "22rem",
                  height: "1.75rem",
                  padding: "4.5px 0px 4.5px 8px",
                }}
              />
            </Grid>
            <Grid item marginTop={1.5}>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmhasis}
                children={CUSTOM_JOB}
              />
            </Grid>
            <Grid item>
              <DropDown
                options={[
                  { label: "Expense", value: "Expense" },
                  { label: "Travel", value: "Travel" },
                  { label: "Travel meals", value: "Travel meals" },
                  { label: "Hotels", value: "Hotels" },
                ]}
                value={""}
                placeHolder={"Choose one"}
                styles={{
                  borderRadius: "8px",
                  border: `1px solid ${theme.palette.other.stroke100}`,
                  width: "22rem",
                  height: "1.75rem",
                  padding: "4.5px 0px 4.5px 8px",
                  color: theme.palette.other.highEmphasis,
                }}
              />
            </Grid>
            <Grid item margin="16px 0px 12px">
              <Chip
                icon={<Icon alt={props.altmessage} src={props.crosssrc} />}
                label={props.billable}
                variant="outlined"
                sx={{
                  width: "74px",
                  height: "1.5rem",
                  borderRadius: "100px",
                  "& .MuiChip-icon": {
                    marginLeft: "8px",
                  },
                  "& .MuiChip-label": {
                    padding: "4px 8px 4px 6px",
                    color: theme.palette.primary[500],
                    fontSize: "12px",
                    lineHeight: "16px",
                    fontFamily: "Segoe UI",
                    fontWeight: 600,
                  },
                }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item marginTop={2} marginLeft="-8px">
          <Grid
            container
            direction="column"
            rowGap={0.5}
            width="23rem"
            paddingLeft="10px"
            sx={{
              borderRadius: "6px",
              border: "1px solid #C0C8D2",
            }}
          >
            <Grid item padding="12px 10px 0px 0px" align="right">
              <Icon alt={""} src={Delete} />
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmhasis}
                children={AMOUNT}
              />
            </Grid>
            <Grid item>
              <StyledTextField
                size="small"
                width="21.75rem"
                height="1.75rem"
                variant={"outlined"}
              />
            </Grid>
            <Grid item marginTop={1.5}>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmhasis}
                children={QUICK_BOOKS_DESCRIPTION}
              />
            </Grid>
            <Grid item>
              <StyledTextField
                size="small"
                width="21.75rem"
                height="1.75rem"
                variant={"outlined"}
              />
            </Grid>
            <Grid item marginTop={1.5}>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmhasis}
                children={CATEGORY}
              />
            </Grid>
            <Grid item>
              <DropDown
                options={[
                  { label: "Expense", value: "Expense" },
                  { label: "Travel", value: "Travel" },
                  { label: "Travel meals", value: "Travel meals" },
                  { label: "Hotels", value: "Hotels" },
                ]}
                placeHolder={"Choose one"}
                styles={{
                  borderRadius: "8px",
                  border: `1px solid ${theme.palette.other.stroke100}`,
                  width: "22rem",
                  height: "1.75rem",
                  padding: "4.5px 0px 4.5px 8px",
                }}
                value={""}
              />
            </Grid>
            <Grid item marginTop={1.5}>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmhasis}
                children={CLASS}
              />
            </Grid>
            <Grid item>
              <DropDown
                options={[
                  { label: "Expense", value: "Expense" },
                  { label: "Travel", value: "Travel" },
                  { label: "Travel meals", value: "Travel meals" },
                  { label: "Hotels", value: "Hotels" },
                ]}
                value={""}
                placeHolder={"Choose one"}
                styles={{
                  borderRadius: "8px",
                  border: `1px solid ${theme.palette.other.stroke100}`,
                  width: "22rem",
                  height: "1.75rem",
                  padding: "4.5px 0px 4.5px 8px",
                }}
              />
            </Grid>
            <Grid item marginTop={1.5}>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmhasis}
                children={CUSTOM_JOB}
              />
            </Grid>
            <Grid item>
              <DropDown
                options={[
                  { label: "Expense", value: "Expense" },
                  { label: "Travel", value: "Travel" },
                  { label: "Travel meals", value: "Travel meals" },
                  { label: "Hotels", value: "Hotels" },
                ]}
                value={""}
                placeHolder={"Choose one"}
                styles={{
                  borderRadius: "8px",
                  border: `1px solid ${theme.palette.other.stroke100}`,
                  width: "22rem",
                  height: "1.75rem",
                  padding: "4.5px 0px 4.5px 8px",
                }}
              />
            </Grid>
            <Grid item margin="16px 0px 12px">
              <Chip
                icon={<Icon alt={props.altmessage} src={props.crosssrc} />}
                label={props.billable}
                variant="outlined"
                sx={{
                  width: "74px",
                  height: "1.5rem",
                  borderRadius: "100px",
                  "& .MuiChip-icon": {
                    marginLeft: "8px",
                  },
                  "& .MuiChip-label": {
                    padding: "4px 8px 4px 6px",
                    color: theme.palette.primary[500],
                    fontSize: "12px",
                    lineHeight: "16px",
                    fontFamily: "Segoe UI",
                    fontWeight: 600,
                  },
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item marginTop={2}>
          <Grid container direction="column" rowGap={0.5}>
            <Grid item>
              <Typography
                variant="caption2"
                color={theme.palette.other.highEmphasis}
                children={INVOICE_TOTAL}
              />
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    color={theme.palette.other.highEmphasis}
                    children={props.price}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item marginTop={2}>
          <Button
            variant="outlined"
            startIcon={<Icon alt="icon" src={Plus} />}
            sx={{
              width: "9rem",
              minWidth: "9rem",
              height: "2rem",
              padding: "4px 8px",
              textTransform: "none",
              border: "1px solid rgba(60, 66, 87, 0.12)",
              boxShadow:
                "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
            }}
          >
            <Typography
              variant="body2"
              children={"Add another line"}
              color={theme.palette.other.mediumEmhasis}
            />
          </Button>
        </Grid>
        <Grid item marginTop={4}>
          <Typography
            variant="body2"
            color={theme.palette.other.mediumEmhasis}
            children={PAYMENT_DETAILS}
          />
        </Grid>
        <Grid item marginTop={1.5}>
          <Typography
            variant="body2"
            color={theme.palette.other.mediumEmhasis}
            children={PAYMENT_TYPE}
          />
        </Grid>
        <Grid item marginTop={0.5}>
          <DropDown
            options={[
              { label: "Expense", value: "Expense" },
              { label: "Travel", value: "Travel" },
              { label: "Travel meals", value: "Travel meals" },
              { label: "Hotels", value: "Hotels" },
            ]}
            value={""}
            placeHolder={"Select"}
            styles={{
              borderRadius: "8px",
              border: `1px solid ${theme.palette.other.stroke100}`,
              width: "22rem",
              height: "1.5rem",
              padding: "4.5px 0px 4.5px 8px",
            }}
          />
        </Grid>
      </Box>

      <Grid item marginTop="14px ">
        <Grid container columnGap={1.5}>
          <Grid item paddingLeft={23}>
            <Button
              sx={{
                width: "106px",
                minWidth: "102px",
                height: "2rem",
                padding: "3px 8px 5px",
                textTransform: "none",
                boxShadow:
                  "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
                borderRadius: "4px",
                border: "1px solid rgba(60, 66, 87, 0.12)",
              }}
              variant="outlined"
            >
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmhasis}
                children="Save Changes"
              />
            </Button>
          </Grid>
          <Grid item>
            <Button
              sx={{
                width: "61px",
                minWidth: "61px",
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
              }}
              variant="contained"
              onClick={props.handleBill}
              disabled={props.isReviewDisabled}
            >
              <Typography
                variant="body2"
                color={theme.palette.structural[50]}
                children="Review"
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewBillCard;
