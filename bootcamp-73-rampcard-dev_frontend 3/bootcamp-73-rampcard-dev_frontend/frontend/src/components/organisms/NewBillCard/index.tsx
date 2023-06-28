import { Box, Grid, InputAdornment, styled, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Typography from "../../atoms/Typography";
import theme from "../../../theme";
import dropdown from "../../../../public/assets/icons/dropdown.svg";
import "./index.css";
import {
  PAYMENT_DETAILS,
  NEW_BILL_CARD,
  WHO_IS_FOR,
  EMPLOYEE_CONTACY,
  INVOICE_NUMBER,
  MEMO,
  QUICK_BOOKS_LOCATIONS,
  WHAT_FOR,
  PAYMENT_TYPE,
  INVOICE_DATE,
  BILL_DUE_DATE,
  INVOICE_TOTAL,
  ADD_ANOTHER_LINE,
  VALID_INVOICE_NUMBER,
  INVOICE_NUMBER_ERROR_MESSAGE,
  VALID_QUICKBOOK_LOCATION,
  LOCATION_ERROR_MESSAGE,
  VALID_EMAIL,
  CONTACT_ERROR_MESSAGE,
} from "../../../utils/constants";
import Icon from "../../atoms/Icon";
import Calander from "../../../../public/assets/icons/calender.svg";
import Button from "../../atoms/Button";
import Plus from "../../../../public/assets/icons/plus.svg";
import DropDown from "../../atoms/DropDown";
import DropDownText from "./DropDownText";
import NewBillAmountCard from "./NewBillAmountCard";
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
  handleInvoiceDate: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBillDueDate: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleMemo: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleQuickbookDescription: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleCategory: (value: string, index: number) => void;
  category: string[];
  handleClass: (value: string, index: number) => void;
  classValue: string[];
  handleCustomJob: (value: string, index: number) => void;
  customJob: string[];
  handlePaymentType: (event: React.ChangeEvent<HTMLInputElement>) => void;
  paymentType: string;
  amount: string[];
  handleAmountChange: (value: string, index: number) => void;
  invoiceNumber: string;
  handleInvoiceNumberChange: (event: any) => void;
  contact: string;
  handleContactChange: (event: any) => void;
  location: string;
  handleLocationChange: (event: any) => void;
  invoiceDate: string;
  billDueDate: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const StyledTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    borderRadius: "8px",
    width: "350px",
    height: "28px",
    paddingRight: "2px",
  },
});

const BillableContainer = styled(Grid)({
  borderRadius: "100px",
  border: `1px solid ${theme.palette.other.stroke50}`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "4px 8px",
  gap: "6px",
  width: "74px",
  height: "24px",
});

const StyledTextFieldDate = styled(TextField)({
  "& .MuiInputBase-root": {
    borderRadius: "12px",
    width: "170px",
    height: "28px",
    paddingLeft: "10px",
  },
});

const StyledButton = styled(Button)({
  alignItems: "center",
  padding: "3px 8px 5px",
  backgroundColor: `${theme.palette.structural[50]}`,
  boxShadow:
    "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
  height: "32px",
  border: "1px solid rgba(60, 66, 87, 0.12)",
  borderRadius: "4px",
});

const StyledContainedButton = styled(Button)({
  width: "61px",
  height: "32px",
  backgroundColor: `${theme.palette.primary[500]}`,
  boxShadow:
    "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
  border: `1px solid ${theme.palette.primary[500]}`,
  borderRadius: "4px",
});

const NewBillCard = (props: Props) => {
  const [invoiceNumberError, setInvoiceNumberError] = useState("");
  const [amountError, setAmountError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [contactError, setContactError] = useState("");
  const [amountCount, setAmountCount] = useState<number>(1);

  useEffect(() => {
    const isValidInvoiceNumber = VALID_INVOICE_NUMBER.test(props.invoiceNumber);
    if (!isValidInvoiceNumber && props.invoiceNumber !== "") {
      setInvoiceNumberError(INVOICE_NUMBER_ERROR_MESSAGE);
      return;
    }
    setInvoiceNumberError("");
  }, [props.invoiceNumber]);

  
  useEffect(() => {
    const isValidContact = VALID_EMAIL.test(props.contact);
    if (!isValidContact && props.contact !== "") {
      setContactError(CONTACT_ERROR_MESSAGE);
      return;
    }
    setContactError("");
  }, [props.contact]);

  useEffect(() => {
    const isValidLocation = VALID_QUICKBOOK_LOCATION.test(props.location);
    if (!isValidLocation && props.location !== "") {
      setLocationError(LOCATION_ERROR_MESSAGE);
      return;
    }
    setLocationError("");
  }, [props.location]);

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setName(event.target.value);
  };

  const handleButtonClicked = () => {
    setAmountCount(amountCount + 1);
  };
  const handleButtonDeleteClicked = () => {
    if (amountCount > 1) {
      setAmountCount(amountCount - 1);
    }
  };

  const renderBillAmountCards = (count: number) => {
    if (count <= 0) {
      return null;
    }

    const currentIndex = amountCount - count;
    return (
      <React.Fragment>
        <NewBillAmountCard
          currentIndex={currentIndex}
          billable={props.billable}
          altmessage={props.altmessage}
          crosssrc={props.crosssrc}
          customJob={props.customJob[currentIndex]}
          handleCustomJob={props.handleCustomJob}
          classValue={props.classValue[currentIndex]}
          handleClass={props.handleClass}
          category={props.category[currentIndex]}
          handleCategory={props.handleCategory}
          handleQuickbookDescription={props.handleQuickbookDescription}
          amount={props.amount[currentIndex]}
          handleAmountChange={props.handleAmountChange}
          amountError={amountError}
          handleButtonDeleteClicked={handleButtonDeleteClicked}
        />
        {renderBillAmountCards(count - 1)}
      </React.Fragment>
    );
  };

  return (
    <Grid container direction="column" rowGap={3} data-testid="bill">
      <Grid item>
        <Typography
          variant="h1"
          color={theme.palette.text.primary}
          children={NEW_BILL_CARD}
        />
      </Grid>
      <Box
        height="408px"
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
                color={theme.palette.text.secondary}
                children={WHO_IS_FOR}
              />
            </Grid>
            <Grid item sx={{ paddingBottom: "5px" }}>
              <Grid container columnGap={0.5}>
                <Grid item>
                  <TextField
                    id="filled-basic"
                    value={props.name}
                    onChange={handleChange}
                    sx={{
                      padding: "5px",
                      outline: "none",
                      border: "none",
                      "& fieldset": {
                        border: "none",
                      },
                    }}
                    InputProps={{
                      onFocus: handleFocus,
                      onBlur: handleBlur,
                      placeholder: isFocused ? "" : "Name",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ marginBottom: "16px" }}>
          <Grid container direction="column" rowGap={1} sx={{ gap: "4px" }}>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.text.secondary}
                children={EMPLOYEE_CONTACY}
              />
            </Grid>
            <Grid item>
              <StyledTextField
              data-testid="emp-contact"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      {<Icon alt={""} src={dropdown} />}
                    </InputAdornment>
                  ),
                }}
                error={!!contactError}
                helperText={contactError}
                value={props.contact}
                onChange={props.handleContactChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" sx={{ rowGap: "4px" }}>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.text.secondary}
                children={INVOICE_NUMBER}
              />
            </Grid>
            <Grid item>
              <StyledTextField
                error={!!invoiceNumberError}
                helperText={invoiceNumberError}
                onChange={props.handleInvoiceNumberChange}
                value={props.invoiceNumber}
                data-testId="invoice-no"
              />
            </Grid>
            <Grid item sx={{ marginLeft: "8px" }}>
              <Grid container columnGap={0.5}>
                <Grid item>
                  <Icon alt={props.altmessage} src={props.src} />
                </Grid>
                <Grid item>
                  <Typography
                    variant="caption1"
                    color={theme.palette.text.secondary}
                    children={props.subtitle}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ marginTop: "28px", marginBottom: "8px" }}>
              <Typography
                variant="body2"
                color={theme.palette.text.secondary}
                children={WHAT_FOR}
              />
            </Grid>
            <Grid item sx={{ display: "flex", gap: "9px" }}>
              <Box>
                <Typography
                  children={INVOICE_DATE}
                  variant="body2"
                  color={theme.palette.text.secondary}
                  sx={{ marginBottom: "4px" }}
                />
                <StyledTextFieldDate
                  type="date"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {<Icon alt={""} src={Calander} />}
                      </InputAdornment>
                    ),
                  }}
                  value={props.invoiceDate}
                  onChange={props.handleInvoiceDate}
                  data-testId="invoice-date"
                />
              </Box>
              <Box>
                <Typography
                  children={BILL_DUE_DATE}
                  variant="body2"
                  color={theme.palette.text.secondary}
                  sx={{ marginBottom: "4px" }}
                />
                <StyledTextFieldDate
                  type="date"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {<Icon alt={""} src={Calander} />}
                      </InputAdornment>
                    ),
                  }}
                  value={props.billDueDate}
                  onChange={props.handleBillDueDate}
                  data-testId="bill-due-date"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ marginTop: "16px" }}>
          <Grid container direction="column" sx={{ rowGap: "4px" }}>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.text.secondary}
                children={QUICK_BOOKS_LOCATIONS}
              />
            </Grid>
            <Grid item>
              <StyledTextField
                error={!!locationError}
                helperText={locationError}
                onChange={props.handleLocationChange}
                value={props.location}
                data-testId="location"
              />
            </Grid>
            <Grid item>
              <Grid container columnGap={0.5}></Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ marginTop: "16px" }}>
          <Grid container direction="column" sx={{ gap: "4px" }}>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.text.secondary}
                children={MEMO}
              />
            </Grid>
            <Grid item>
              <StyledTextField onChange={props.handleMemo} />
            </Grid>
          </Grid>
        </Grid>
        {renderBillAmountCards(amountCount)}
        <Grid item sx={{ marginTop: "16px" }}>
          <Grid container direction="column" sx={{ gap: "4px" }}>
            <Grid item>
              <Typography
                variant="caption2"
                color={theme.palette.other.highEmphasis}
                children={INVOICE_TOTAL}
              />
            </Grid>
            <Grid item>
              <Grid container columnGap={0.5}>
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    color={theme.palette.other.highEmphasis}
                    children={props.amount.reduce(
                      (acc: number, curr: string) => acc + parseFloat(curr),
                      0
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ marginTop: "16px" }}>
          <Button
            children={
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmphasis}
                children={ADD_ANOTHER_LINE}
              />
            }
            variant="outlined"
            sx={{
              border: `1px solid rgba(60, 66, 87, 0.12)`,
              boxShadow:
                "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
            }}
            startIcon={<Icon alt="icon" src={Plus} />}
            onClick={handleButtonClicked}
          />
        </Grid>
        <Grid item sx={{ marginTop: "32px" }}>
          <Typography
            variant="body2"
            color={theme.palette.other.mediumEmphasis}
            children={PAYMENT_DETAILS}
          />
        </Grid>
        <Grid item sx={{ marginTop: "12px" }}>
          <Typography
            variant="body2"
            color={theme.palette.other.mediumEmphasis}
            children={PAYMENT_TYPE}
          />
        </Grid>
        <Grid item sx={{ marginTop: "4px" }}>
          <DropDown
            options={[
              {
                label: "ACH (Direct deposit)",
                value: "ACH (Direct deposit)",
                extraText:
                  " Ramp will mail a check to your vendor’s mailing address. You will be debited once the check is cashed",
              },
              {
                label: "Check by mail",
                value: "Check by mail",
                extraText:
                  "Ramp will mail a check to your vendor’s mailing address. You will be debited once the check is cashed",
              },
              {
                label: "One-time virtual card",
                value: "One-time virtual card",
                extraText:
                  "Create a ramp virtual card for this bill. The card will expire once used. 1.5% cashback.",
              },
            ]}
            onChange={props.handlePaymentType}
            value={props.paymentType}
            placeHolder={"Select"}
            styles={{
              borderRadius: "8px",
              width: "350px",
              height: "28px",
              borderColor: theme.palette.other.stroke100,
              paddingRight: "8px",
            }}
          />
        </Grid>
        {props.paymentType === "ACH (Direct deposit)" && (
          <DropDownText
            sendDateText="ACH send date"
            sendDate={"09/12/23"}
            deliveryTime={"ACH delivery time"}
            deliveryTimeDescription={"5 working days"}
            VendorReceiveDateText={"Vendor receive date"}
            VendorReceiveDate={"09/12/23"}
          />
        )}
        {props.paymentType === "Check by mail" && (
          <DropDownText
            sendDateText="CBM send date"
            sendDate={"09/12/23"}
            deliveryTime={"CBM delivery time"}
            deliveryTimeDescription={"5 working days"}
            VendorReceiveDateText={"Vendor receive date"}
            VendorReceiveDate={"09/12/23"}
          />
        )}
        {props.paymentType === "One-time virtual card" && (
          <DropDownText
            sendDateText="OOVC send date"
            sendDate={"09/12/23"}
            deliveryTime={"OOVC delivery time"}
            deliveryTimeDescription={"5 working days"}
            VendorReceiveDateText={"Vendor receive date"}
            VendorReceiveDate={"09/12/23"}
          />
        )}
      </Box>

      <Grid item>
        <Grid container columnGap={1}>
          <Grid item sx={{ marginLeft: "147px" }}>
            <StyledButton variant="outlined">
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmphasis}
                children="Save Changes"
              />
            </StyledButton>
          </Grid>
          <Grid item>
            <StyledContainedButton
              variant="contained"
              onClick={props.handleBill}
              disabled={props.name === "" || props.name === undefined}
            >
              <Typography
                variant="body2"
                color={theme.palette.structural[50]}
                children="Review"
              />
            </StyledContainedButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewBillCard;
