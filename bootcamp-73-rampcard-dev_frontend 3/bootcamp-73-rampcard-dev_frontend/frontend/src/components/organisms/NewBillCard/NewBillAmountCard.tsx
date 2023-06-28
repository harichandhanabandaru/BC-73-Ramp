import { Grid, styled, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Typography from "../../atoms/Typography";
import theme from "../../../theme";
import "./index.css";
import {
  AMOUNT,
  QUICK_BOOKS_DESCRIPTION,
  CATEGORY,
  CLASS,
  CUSTOM_JOB,
  VALID_AMOUNT,
  AMOUNT_ERROR_MESSAGE,
} from "../../../utils/constants";
import Icon from "../../atoms/Icon";
import Delete from "../../../../public/assets/icons/deleteicon.svg";
import DropDown from "../../atoms/DropDown";

export interface NewBillAmountCardProps {
  currentIndex: number;
  billable: string;
  altmessage: string;
  crosssrc: string;
  customJob: string;
  handleCustomJob: (value: string, index: number) => void;
  classValue: string;
  handleClass: (value: string, index: number) => void;
  category: string;
  handleCategory: (value: string, index: number) => void;
  handleQuickbookDescription: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  amount: string;
  handleAmountChange: (value: string, index: number) => void;
  amountError: string;
  handleButtonDeleteClicked: () => void;
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

const NewBillAmountCard = (props: NewBillAmountCardProps) => {
  const [amountError, setAmountError] = useState("");
  useEffect(() => {
    const isValidAmount = VALID_AMOUNT.test(props.amount);
    if (!isValidAmount && props.amount !== "") {
      setAmountError(AMOUNT_ERROR_MESSAGE);
      return;
    }
    setAmountError("");
  }, [props.amount]);

  const handleCustomJobFun = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleCustomJob(event.target.value, props.currentIndex);
  };

  const handleClassFun = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleClass(event.target.value, props.currentIndex);
  };

  const handleCategoryFun = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleCategory(event.target.value, props.currentIndex);
  };

  const handleAmountChangeFun = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.handleAmountChange(event.target.value, props.currentIndex);
  };
  return (
    <Grid item sx={{ marginTop: "16px" }}>
      <Grid
        container
        direction="column"
        width="366px"
        sx={{
          borderRadius: "0.5rem",
          border: "1px solid #C0C8D2",
          paddingLeft: "9px",
          paddingBottom: "12px",
          rowGap: "16px",
        }}
      >
        <Grid item paddingLeft="330px" paddingTop={1}>
          <Icon
            alt={""}
            src={Delete}
            onClick={props.handleButtonDeleteClicked}
            clickable={true}
          />
        </Grid>
        <Grid item>
          <Typography
            sx={{ paddingBottom: "4px" }}
            variant="body2"
            color={theme.palette.text.secondary}
            children={AMOUNT}
          />
          <StyledTextField
            error={!!props.amountError}
            helperText={props.amountError}
            onChange={handleAmountChangeFun}
            value={props.amount}
            data-testId="amount"
          />
        </Grid>
        <Grid item>
          <Typography
            sx={{ paddingBottom: "4px" }}
            variant="body2"
            color={theme.palette.text.secondary}
            children={QUICK_BOOKS_DESCRIPTION}
          />
          <StyledTextField onChange={props.handleQuickbookDescription} />
        </Grid>
        <Grid item>
          <Typography
            sx={{ paddingBottom: "4px" }}
            variant="body2"
            color={theme.palette.text.secondary}
            children={CATEGORY}
          />
          <DropDown
            options={[
              { label: "Equipment rental", value: "Equipment rental" },
              { label: "Expense", value: "Expense" },
              { label: "Travel", value: "Travel" },
              { label: "Travel meals", value: "Travel meals" },
              { label: "Hotels", value: "Hotels" },
            ]}
            placeHolder={"Choose one"}
            onChange={handleCategoryFun}
            styles={{
              borderRadius: "8px",
              width: "350px",
              height: "28px",
              borderColor: theme.palette.other.stroke100,
              paddingRight: "8px",
            }}
            value={props.category}
          />
        </Grid>
        <Grid item>
          <Typography
            sx={{ paddingBottom: "4px" }}
            variant="body2"
            color={theme.palette.text.secondary}
            children={CLASS}
          />
          <DropDown
            options={[
              { label: "Rent", value: "Rent" },
              { label: "Expense", value: "Expense" },
              { label: "Travel", value: "Travel" },
              { label: "Travel meals", value: "Travel meals" },
              { label: "Hotels", value: "Hotels" },
            ]}
            onChange={handleClassFun}
            value={props.classValue}
            placeHolder={"Choose one"}
            styles={{
              borderRadius: "8px",
              width: "350px",
              height: "28px",
              borderColor: theme.palette.other.stroke100,
              paddingRight: "8px",
            }}
          />
        </Grid>
        <Grid item>
          <Typography
            sx={{ paddingBottom: "4px" }}
            variant="body2"
            color={theme.palette.text.secondary}
            children={CUSTOM_JOB}
          />
          <DropDown
            options={[
              { label: "Manager", value: "Manager" },
              { label: "Expense", value: "Expense" },
              { label: "Travel", value: "Travel" },
              { label: "Travel meals", value: "Travel meals" },
              { label: "Hotels", value: "Hotels" },
            ]}
            onChange={handleCustomJobFun}
            value={props.customJob}
            placeHolder={"Choose one"}
            styles={{
              borderRadius: "8px",
              width: "350px",
              height: "28px",
              borderColor: theme.palette.other.stroke100,
              paddingRight: "8px",
            }}
          />
        </Grid>
        <Grid item>
          <BillableContainer container>
            <Grid item sx={{ marginTop: "-.2em" }}>
              <Icon alt={props.altmessage} src={props.crosssrc} />
            </Grid>
            <Grid item sx={{ marginTop: "-.35em" }}>
              <Typography
                variant="caption1"
                color={theme.palette.primary[500]}
                children={props.billable}
              />
            </Grid>
          </BillableContainer>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewBillAmountCard;
