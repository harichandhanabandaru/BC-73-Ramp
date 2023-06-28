import { Card, Grid, styled } from "@mui/material";
import React from "react";
import Tick from "../../../../public/assets/icons/tick.svg";
import theme from "../../../theme";
import { CLICK_ME, LOGOUT_TEXT } from "../../../utils/constants";
import Icon from "../../atoms/Icon";
import Typography from "../../atoms/Typography";
import Anchor from "../../atoms/Anchor";

interface Props{
    handleClick?: () => void;
}

const StyledCard = styled(Card)({
  width: "29.375rem",
  height: "32.0625rem",
});

const StyledIcon = styled(Icon)({
  width: "6.25rem",
  height: "6.25rem",
});

const Logout = (props: Props) => {
  return (
    <StyledCard data-testid="logout">
      <Grid
        container
        direction="column"
        alignItems="center"
        flexWrap="nowrap"
        height="100%"
        rowGap={22.25}
      >
        <Grid item height="290px">
          <Grid
            container
            direction="column"
            rowGap={5}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item style={{ marginTop: "143px" }}>
              <StyledIcon alt="tick" src={Tick} />
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                color={theme.palette.other.highEmphasis}
              >
                {LOGOUT_TEXT}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            justifyContent="center"
            columnGap={0.5}
            style={{ marginBottom: "21px" }}
          >
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.other.merchantRuleText}
              >
                {CLICK_ME[0]}
              </Typography>
            </Grid>
            <Grid item>
              <Anchor text={CLICK_ME[1]} onClick={props.handleClick} />
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.other.merchantRuleText}
              >
                {CLICK_ME[2]}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default Logout;
