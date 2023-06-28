import React from "react";
import Typography from "../../atoms/Typography";
import Anchor from "../../atoms/Anchor";
import { Grid, Stack } from "@mui/material";
import theme from "../../../theme";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import {
  REPORTINGCARDPRICEDETAILS,
} from "../../../utils/constants";
import Icon from "../../atoms/Icon";

export interface ReportingCardProps {
  text: string;
  alt: string;
  src: string;
  linktext: string;
  content: string;
  content1: string;
  price: string;
}

const ReportingCard = (props: ReportingCardProps) => {
  return (
    <>
      <Grid container direction="column" gap={1}>
        <Grid item xs={6}>
          <Typography
            variant="subtitle2"
            color={theme.palette.text.primary}
            children={props.text}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="subtitle3"
            color={theme.palette.text.secondary}
            children={props.content}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="subtitle3"
            color={theme.palette.text.secondary}
            children={props.content1}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} marginTop={1}>
        <Grid item>
          <Icon alt={props.alt} src={props.src} />
        </Grid>
        <Grid item>
          <Stack>
            <Typography
              variant="caption2"
              color={theme.palette.text.secondary}
              children={REPORTINGCARDPRICEDETAILS[0]}
            />
            <Typography
              variant="subtitle2"
              color={theme.palette.accent.green100}
              children={props.price}
            />
          </Stack>
        </Grid>
        <Grid container margin={1} spacing={1}>
          <Grid item>
            <Anchor text={props.linktext} />
          </Grid>
          <Grid item color={theme.palette.primary[500]}>
            <EastOutlinedIcon />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ReportingCard;
