import { Grid } from "@mui/material";
import React from "react";
import Typography from "../../atoms/Typography";
import theme from "../../../theme";
import {
  LOWERPRICINGPLANCARD,
  LOWERPRICINGPLANCARDDETAILS,
  LOWERPRICINGPLANCARDDETAILS1,
  REPORTING,
  REPORTINGCARDPRICEDETAILS,
  REPORTINGCARDSUBTITLE,
  REPORTING_CARD_LINK,
  REPORTING_CARD_TEXT,
} from "../../../utils/constants";
import ReportingCard from "../../molecules/ReportingCard";
import Aws from "../../../../public/assets/icons/amazon.svg";
import { TextField } from "../../atoms/Textfield";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import UnfoldMoreOutlinedIcon from "@mui/icons-material/UnfoldMoreOutlined";
import Button from "../../atoms/Button";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import Graph from "../../organisms/GraphCard";

const LandingPage = () => {
  return (
    <>
      <Grid container rowGap={3} direction="column" data-testid="page">
        <Grid item paddingLeft={5}>
          <Typography
            variant="h1"
            color={theme.palette.text.primary}
            children={REPORTING}
          />
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item xs={3} paddingLeft={5}>
              <ReportingCard
                text={REPORTING_CARD_TEXT[0]}
                alt={"aws"}
                src={Aws}
                linktext={REPORTING_CARD_LINK}
                content={REPORTINGCARDSUBTITLE[0]}
                content1={REPORTINGCARDSUBTITLE[1]}
                price={REPORTINGCARDPRICEDETAILS[1]}
              />
            </Grid>
            <Grid item xs={3}>
              <ReportingCard
                text={REPORTING_CARD_TEXT[1]}
                alt={"aws"}
                src={Aws}
                linktext={REPORTING_CARD_LINK}
                content={LOWERPRICINGPLANCARD[0]}
                content1={LOWERPRICINGPLANCARD[1]}
                price={LOWERPRICINGPLANCARDDETAILS[1]}
              />
            </Grid>
            <Grid item xs={3}>
              <ReportingCard
                text={REPORTING_CARD_TEXT[1]}
                alt={"aws"}
                src={Aws}
                linktext={REPORTING_CARD_LINK}
                content={LOWERPRICINGPLANCARD[0]}
                content1={LOWERPRICINGPLANCARD[1]}
                price={LOWERPRICINGPLANCARDDETAILS1[1]}
              />
            </Grid>
            <Grid item xs={3}>
              <ReportingCard
                text={REPORTING_CARD_TEXT[1]}
                alt={"aws"}
                src={Aws}
                linktext={REPORTING_CARD_LINK}
                content={LOWERPRICINGPLANCARD[0]}
                content1={LOWERPRICINGPLANCARD[1]}
                price={LOWERPRICINGPLANCARDDETAILS[1]}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Grid container columnGap={1.5}>
                <Grid item paddingLeft={5}>
                  <TextField
                    size="small"
                    placeholder="Search cards"
                    startAdornment={<SearchOutlinedIcon />}
                    width="28.5rem"
                    height="2rem"
                    variant={"outlined"}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    size="small"
                    placeholder="Payment types"
                    endAdornment={<UnfoldMoreOutlinedIcon />}
                    width="17.75rem"
                    height="2rem"
                    variant={"outlined"}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container columnGap={1} paddingRight={10}>
                <Grid item height="2rem">
                  <Button
                    variant="outlined"
                    width="7.5rem"
                    startIcon={<CalendarTodayOutlinedIcon />}
                  >
                    <Typography
                      variant="body2"
                      color={theme.palette.text.disabled}
                      children="May28-Jun3"
                    />
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    width="4.25rem"
                    endIcon={<UnfoldMoreOutlinedIcon />}
                  >
                    <Typography
                      variant="body2"
                      color={theme.palette.text.disabled}
                      children="Daily"
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item paddingLeft={5} paddingRight={10}>
          <Graph />
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPage;
