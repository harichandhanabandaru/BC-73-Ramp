import { Box, Card, Grid, styled } from "@mui/material";
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
import { TextField } from "../../atoms/Textfield";
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
}

const StyledTextField = styled(TextField)({
  borderRadius: "0.5rem",
  border: "1px solid #C0C8D2",
});

const StyledCard = styled(Card)({
  height: "2rem",
  width: "18rem",
  padding: "1.5rem 2rem",
});

const ReviewBill = (props: Props) => {
  return (
    <Grid container direction="column" rowGap={2.5} data-testid="bill">
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
        }}
      >
        <Grid item>
          <Grid container direction="column" rowGap={1}>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmhasis}
                children={ONE_LAST_LOOK}
              />
            </Grid>
            <Grid item>
              <Grid container columnGap={0.5}>
                <Grid item>
                  <Typography
                    variant="body3"
                    color={theme.palette.other.mediumEmhasis}
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
                    color={theme.palette.other.mediumEmhasis}
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
        <Grid item marginTop={"24px"}>
          <Grid container direction="column" rowGap={0.5}>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmhasis}
                children={PAYMENT_METHOD}
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
        <Grid item>
          <Grid container direction="column" rowGap={0.5} marginTop={"16px"}>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmhasis}
                children={SCHEDULED_DATE}
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
                    color={theme.palette.other.mediumEmhasis}
                    children={props.date}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" rowGap={0.5} marginTop={"16px"}>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmhasis}
                children={SEND_TO}
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
                    color={theme.palette.other.mediumEmhasis}
                    children={props.senderName}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" rowGap={0.5} marginTop={"16px"}>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmhasis}
                children={WITHDRAW_FROM}
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
            <Grid item>
              <Grid container columnGap={0.5}>
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
                    color={theme.palette.other.mediumEmhasis}
                    children={` - $${props.account}`}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" rowGap={1.5} marginTop={"16px"}>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmhasis}
                children={TO_BE_APPROVED_BY}
              />
            </Grid>
            <Grid item>
              <Card
                sx={{
                  width: "320px",
                  padding: "1rem",
                  border: `1px solid ${theme.palette.other.skipprifilling}`,
                  borderRadius: "4px",
                }}
              >
                <Grid
                  container
                  columnGap={1.5}
                  justifyContent="start"
                  display="flex"
                  flexDirection="row"
                  alignItems="flex-start"
                  sx={{ height: "26px" }}
                >
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
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Grid item>
        <Grid container columnGap={1} marginTop={"16px"}>
          <Grid item paddingLeft={28}>
            <Button
              sx={{
                width: "41px",
                minWidth: "41px",
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
                {"Edit"}
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              sx={{
                width: "81px",
                minWidth: "81px",
                height: "2rem",
                padding: "3px 8px 5px",
                textTransform: "none",
                boxShadow:
                  "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
                borderRadius: "4px",
                border: `1px solid ${theme.palette.primary["500"]}`,
              }}
              variant="contained"
              onClick={props.handleBill}
            >
              <Typography
                variant="body3"
                color={theme.palette.structural[50]}
                children="Create bill"
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ReviewBill;
