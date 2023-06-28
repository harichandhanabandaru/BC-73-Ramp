import React from "react";
import Icon from "../../atoms/Icon";
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import { Box, Grid, styled } from "@mui/material";
import theme from "../../../theme";
import {
  SKIPPREFILLINGCARDTEXT,
  SKIPPREFILLINGCARDBTNTEXT,
} from "../../../utils/constants";

interface Props {
  title: string;
  icon: string;
  iconAlt?: string;
}

const StyledBoxCard = styled(Box)({
  border: `1px solid ${theme.palette.other.skipprifilling}`,
  borderRadius: "0.5rem",
  padding: "1rem",
  background: theme.palette.accent.white,
  width: "504px",
});

const SkipPrefillingCard = (props: Props) => {
  return (
    <StyledBoxCard>
      <Grid container alignItems="start">
        <Grid item>
          <Icon alt={props.iconAlt} src={props.icon} />
        </Grid>
        <Grid item>
          <Grid container direction="column" marginLeft={1.5}>
            <Grid item>
              <Typography
                variant="body2"
                children={props.title}
                color={theme.palette.other.merchantRuleTitle}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="body3"
                color={theme.palette.other.merchantRuleText}
                children={SKIPPREFILLINGCARDTEXT[0]}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="body3"
                color={theme.palette.other.merchantRuleText}
                children={SKIPPREFILLINGCARDTEXT[1]}
              />
            </Grid>
          </Grid>
          <Grid item marginTop={2} marginLeft={1.5}>
            <Button
              sx={{
                width: "106px",
                minWidth: "104px",
                height: "28px",
                padding: "3px 8px 5px",
                textTransform: "none",
                border: `1px solid ${theme.palette.other.skipprifilling}`,
                boxShadow:
                  "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
                borderRadius: "4px",
              }}
              variant="outlined"
            >
              <Typography
                variant="body2"
                color={theme.palette.other.mediumEmphasis}
              >
                {SKIPPREFILLINGCARDBTNTEXT}
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </StyledBoxCard>
  );
};

export default SkipPrefillingCard;
