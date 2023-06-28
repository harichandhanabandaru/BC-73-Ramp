import { Box, Button, Grid, styled } from "@mui/material";
import React from "react";
import { TextField } from "../../atoms/Textfield";
import Download from "../../../../public/assets/icons/download.svg";
import { DOWNLOAD } from "../../../utils/constants";
import theme from "../../../theme";
import Icon from "../../atoms/Icon";
import TableTextFeild from "../../atoms/TableTextFeild";
import Calendar from "../../../../public/assets/icons//calender.svg";
import IconTypography from "../../molecules/IconTypography";
import Cross from "../../../../public/assets/icons/cross.svg";
import Typography from "../../atoms/Typography";
import Check from "../../../../public/assets/icons/approveTick.svg";

const StyledCustomDataGridHeader = styled(Box)({
  padding: "12px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

export interface ReimburseDataGridHeaderProps {
  value?: string;
  setValue: (event: any) => void;
  showAprovalButtons?: boolean;
  handleDelete: () => void;
}

const ReimburseDataGridHeader = (props: ReimburseDataGridHeaderProps) => {
  return (
    <StyledCustomDataGridHeader>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Grid container columnGap={1}>
            <Grid item>
              <TableTextFeild value={props.value} setValue={props.setValue} />
            </Grid>
            <Grid item marginLeft="10px">
              <TextField
                size="small"
                placeholder="All cards"
                InputProps={{
                  style: {
                    width: "7.625rem",
                    height: "1.75rem",
                    borderRadius: "12px",
                    border: "1px solid " + `${theme.palette.structural[100]}`,
                    paddingLeft: "8px",
                    fontSize: "12px",
                    lineHeight: "16px",
                    fontFamily: "Segoe UI",
                    fontWeight: 400,
                  },
                  sx: {
                    "& input": {
                      padding: "6px 8px !important",
                    },
                  },
                  startAdornment: (
                    <>
                      <img src={Calendar}></img>
                    </>
                  ),
                }}
                variant={"outlined"}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container columnGap={2}>
            {props.showAprovalButtons && (
              <>
                <Grid item marginTop="5px">
                  <IconTypography
                    content={"Approve"}
                    color={theme.palette.primary[500]}
                    icon={Check}
                    onClick={props.handleDelete}
                  />
                </Grid>
                <Grid item marginTop="5px">
                  <IconTypography
                    content={"Reject"}
                    color={theme.palette.other.merchantRuleText}
                    icon={Cross}
                    onClick={() => {}}
                  />
                </Grid>
              </>
            )}
            <Grid item sx={{ marginLeft: "20px" }}>
              <Button
                startIcon={<Icon alt="icon" src={Download} />}
                sx={{
                  width: "109px",
                  minWidth: "109px",
                  height: "32px",
                  padding: "4px 8px ",
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
                  children={DOWNLOAD}
                  color={theme.palette.other.mediumEmphasis}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledCustomDataGridHeader>
  );
};

export default ReimburseDataGridHeader;
