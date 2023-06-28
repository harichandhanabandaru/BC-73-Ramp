import { Grid, TextField } from "@mui/material";
import React from "react";
import { QUICKBOOKS_CATEGORY, RAMP_CATEGORY } from "../../../utils/constants";
import Thunder from "../../../../public/assets/icons/thunder.svg";
import DropDown from "../../atoms/DropDown";
import Icon from "../../atoms/Icon";
import Typography from "../../atoms/Typography";
import theme from "../../../theme";

interface CategoryRuleProps {
  textValue: string;
  textFieldPlaceholder: string;
  dropDownPlaceholder: string;
  dropDownValue: string;
  options: { label: string; value: string }[];
  onChange: (event: any) => void;
}

const CategoryRule = (props: CategoryRuleProps) => {
  return (
    <Grid
      container
      direction={"column"}
      rowGap={"4px"}
      data-testid={"CategoryRule"}
    >
      <Grid item>
        <Grid container direction={"row"} columnGap={"160px"}>
          <Typography
            variant="body2"
            color={theme.palette.other.mediumEmphasis}
            children={RAMP_CATEGORY}
          />
          <Typography
            variant="body2"
            color={theme.palette.other.mediumEmphasis}
            children={QUICKBOOKS_CATEGORY}
          />
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction={"row"}
          columnGap={"14px"}
          alignItems={"center"}
        >
          <TextField
            InputProps={{
              style: {
                height: "28px",
                width: "220px",

                fontSize: "14px",
                lineHeight: "18px",
                fontFamily: "Segoe UI",
                fontWeight: 400,
                color: "#687385",
                borderRadius: "8px",
              },
            }}
            value={props.textValue}
            placeholder={props.textFieldPlaceholder}
          />
          <Icon alt={"Thunder"} src={Thunder} />
          <DropDown
            options={props.options}
            value={props.dropDownValue}
            placeHolder={props.dropDownPlaceholder}
            onChange={props.onChange}
            styles={{
              borderRadius: "8px",
              height: "28px",
              width: "220px",
              padding: "0.5rem",
              fontColor: "#1A1B25",
              "&:hover": {
                borderColor: theme.palette.accent.white,
              },
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default CategoryRule;
