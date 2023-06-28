import { Box, Card, Grid, styled, TextField } from "@mui/material";
import React from "react";
import Typography from "../../atoms/Typography";
import theme from "../../../theme";
import {
  ADDED_BY,
  AUTO_APPROVED,
  NEW_BILL,
  ONE_LAST_LOOK,
  PAYMENT_METHOD,
  SAVING_ACCOUNT,
  SCHEDULED_DATE,
  SEND_TO,
  TO_BE_APPROVED_BY,
  WITHDRAW_FROM,
  EXPECTED_ARRIVAL,
} from "../../../utils/constants";
import Icon from "../../atoms/Icon";
import FilledTick from "../../../../public/assets/icons/filledTick.svg";
import Caution from "../../../../public/assets/icons/caution.svg";
import Button from "../../atoms/Button";

interface Props {
  price: string;
  name: string;
  date: string;
  senderName: string;
  account: string;
  handleBill: () => void;
  paymentType: string;
}

const StyledTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    borderRadius: "8px",
    width: "350px",
    height: "28px",
    paddingRight: "2px",
  },
});

const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "16px",
  gap: "16px",
  width: "350px",
  height: "58px",
  border: `1px solid ${theme.palette.other.skipprifilling}`,
  borderRadius: "4px",
  boxSizing: "border-box",
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
  height: "32px",
  backgroundColor: `${theme.palette.primary[500]}`,
  boxShadow:
    "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
  border: `1px solid ${theme.palette.primary[500]}`,
  borderRadius: "4px",
});

const ReviewBill = (props: Props) => {
  return (
    <Grid container direction="column" data-testid="bill">
      <Grid item>
        <Typography
          variant="h1"
          color={theme.palette.other.highEmphasis}
          children={NEW_BILL}
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
          display: "flex",
          gap: "16px",
          flexDirection: "column",
        }}
      >
        <Grid item sx={{ marginTop: "20px" }}>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmphasis}
                children={ONE_LAST_LOOK}
              />
            </Grid>
            <Grid item sx={{ marginTop: "8px" }}>
              <Grid container columnGap={0.5}>
                <Grid item>
                  <Typography
                    variant="body3"
                    color={theme.palette.other.mediumEmphasis}
                    children="Pay"
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    color={theme.palette.other.highEmphasis}
                    children={`$${props.price}`}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="body3"
                    color={theme.palette.other.mediumEmphasis}
                    children="to"
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    color={theme.palette.other.highEmphasis}
                    children={props.name}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ marginTop: "8px" }}>
          <Grid container direction="column" sx={{ gap: "4px" }}>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmphasis}
                children={PAYMENT_METHOD}
              />
            </Grid>
            <Grid item>
              <StyledTextField value={props.paymentType} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" sx={{ gap: "4px" }}>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmphasis}
                children={SCHEDULED_DATE}
              />
            </Grid>
            <Grid item>
              <StyledTextField value={"24 August 2023"} />
            </Grid>
            <Grid item>
              <Grid container columnGap={0.5}>
                <Grid item>
                  <Typography
                    variant="caption2"
                    color={theme.palette.other.merchantRuleText}
                    children={EXPECTED_ARRIVAL}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="caption1"
                    color={theme.palette.other.mediumEmphasis}
                    children={props.date}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" sx={{ gap: "4px" }}>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmphasis}
                children={SEND_TO}
              />
            </Grid>
            <Grid item>
              <StyledTextField value={"Gold Mining Outfitters (8532)"} />
            </Grid>
            <Grid item>
              <Grid container columnGap={0.5}>
                <Grid item>
                  <Typography
                    variant="caption2"
                    color={theme.palette.other.merchantRuleText}
                    children={ADDED_BY}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="caption1"
                    color={theme.palette.other.mediumEmphasis}
                    children={props.senderName}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" sx={{ gap: "4px" }}>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmphasis}
                children={WITHDRAW_FROM}
              />
            </Grid>
            <Grid item>
              <StyledTextField value={"Manual Account (1873)"} />
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <Typography
                    variant="caption2"
                    color={theme.palette.other.merchantRuleText}
                    children={SAVING_ACCOUNT}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="caption1"
                    color={theme.palette.other.mediumEmphasis}
                    children={` - $${props.account}`}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" sx={{ gap: "12px" }}>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmphasis}
                children={TO_BE_APPROVED_BY}
              />
            </Grid>
            <Grid item>
              <StyledCard>
                <Grid container columnGap={1} justifyContent="start">
                  <Grid item>
                    <Icon alt="tick" src={FilledTick} color="success" />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body2"
                      color={theme.palette.accent.green100}
                      children={AUTO_APPROVED}
                    />
                  </Grid>
                  <Grid item>
                    <Icon alt="caution" src={Caution} />
                  </Grid>
                </Grid>
              </StyledCard>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Grid item>
        <Grid container columnGap={1}>
          <Grid item paddingLeft={21.5}>
            <StyledButton variant="outlined">
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmphasis}
                children="Edit"
              />
            </StyledButton>
          </Grid>
          <Grid item>
            <StyledContainedButton
              variant="contained"
              onClick={props.handleBill}
            >
              <Typography
                variant="body2"
                color={theme.palette.structural[50]}
                children="Create bill"
              />
            </StyledContainedButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ReviewBill;
