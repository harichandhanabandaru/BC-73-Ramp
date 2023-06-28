import { Box, Button, Grid, styled, TextField } from "@mui/material";
import React, { useState } from "react";
import IconTypography from "../../../molecules/IconTypography";
import Calendar from "../../../../../public/assets/icons/calender.svg";
import {
  CLEAR_FILTER,
  DELETE,
  FILTER,
  SYNC,
} from "../../../../utils/constants";
import theme from "../../../../theme";
import Typography from "../../../atoms/Typography";
import TableTextFeild from "../../../atoms/TableTextFeild";

interface Props {
  icon: string;
  crossIcon: string;
  filterIcon: string;
  color?: string;
  deletable?: boolean;
  handleClick?: () => void;
  setValue: (event: any) => void;
  value: string;
  handleDelete: () => void;
}

const StyledCustomDataGridHeader = styled(Box)({
  padding: "12px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

const CustomDataGridHeader = (props: Props) => {
  const [rampCardRows, setRampCardRows] = useState([]);
  const handleUpdate = () => {};

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
          <Grid container columnGap={1}>
            {props.deletable && (
              <Grid item sx={{ width: "77px", marginTop: "2px" }}>
                <IconTypography
                  content={DELETE}
                  color={theme.palette.other.merchantRuleText}
                  icon={props.icon}
                  onClick={props.handleDelete}
                />
              </Grid>
            )}
            <Grid item sx={{ width: "105px", marginTop: "2px" }}>
              <IconTypography
                content={CLEAR_FILTER}
                color={theme.palette.other.merchantRuleText}
                icon={props.crossIcon}
                onClick={props.handleClick}
              />
            </Grid>
            <Grid item sx={{ width: "72px", marginTop: "2px" }}>
              <IconTypography
                content={FILTER}
                color={theme.palette.primary[500]}
                icon={props.filterIcon}
                onClick={props.handleClick}
              />
            </Grid>
            <Grid item>
              <Button
                sx={{
                  width: "46px",
                  minWidth: "46px",
                  height: "28px",
                  padding: "3px 8px 5px",
                  textTransform: "none",
                  border: "1px solid rgba(60, 66, 87, 0.12)",
                  boxShadow:
                    "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
                  borderRadius: "4px",
                }}
                variant="outlined"
                onClick={handleUpdate}
              >
                <Typography
                  variant="body2"
                  children={SYNC}
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

export default CustomDataGridHeader;
