import { Card, CardProps, Grid } from "@mui/material";
import React from "react";
import Icon from "../../atoms/Icon";
import Cross from "../../../../public/assets/icons/cross.svg";
import Typography from "../../atoms/Typography";
import Info from "../../../../public/assets/icons/info.svg";
import Button from "../../atoms/Button";
import { CREATE_RULE, MERCHANT_RULE_HEADER } from "../../../utils/constants";
import theme from "../../../theme";

interface Props extends CardProps {
  category: string;
  transaction: string;
  onClick: () => void;
}

const QuickbooksCategoryPopup = (props: Props) => {
  return (
    <Card sx={{ maxWidth: "312px" }} data-testid="QuickbooksCategoryPopup">
      <Grid container direction={"column"} sx={{ padding: "16px" }}>
        <Grid container direction={"row"}>
          <Grid item sx={{ paddingRight: "12px" }}>
            <Icon alt={"info icon"} src={Info} />
          </Grid>
          <Grid item sx={{ paddingRight: "20px" }}>
            <Typography
              variant="body2"
              color={theme.palette.other.merchantRuleTitle}
              children={MERCHANT_RULE_HEADER}
            />
          </Grid>
          <Grid item paddingLeft={"20px"}>
            <Icon alt={"cross icon"} src={Cross} />
          </Grid>
        </Grid>
        <Grid item sx={{ paddingLeft: "24px", width: "228px" }}>
          <Typography
            variant="body3"
            color={theme.palette.other.merchantRuleText}
          >
            Save “{props.category} as the default Quickbooks category for all
            the future and unsynced transactions from “{props.transaction}”.
          </Typography>
        </Grid>
        <Grid item sx={{ paddingLeft: "24px", paddingTop: "16px" }}>
          <Button
            sx={{
              width: "86px",
              minWidth: "88px",
              height: "2rem",
              padding: "3px 8px 5px",
              textTransform: "none",
              boxShadow:
                "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
              border: "1px solid rgba(60, 66, 87, 0.12)",
              flexGrow: 1,
              textAlign: "center",
            }}
            variant="outlined"
            onClick={props.onClick}
          >
            <Typography
              variant="body4"
              color={theme.palette.other.mediumEmhasis}
              children={CREATE_RULE}
            />
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};
export default QuickbooksCategoryPopup;
