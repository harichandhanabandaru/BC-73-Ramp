import { Box, Button, Grid, styled } from "@mui/material";
import React from "react";
import { TextField } from "../../atoms/Textfield";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import Download from "../../../../public/assets/icons/download.svg";
import { DOWNLOAD } from "../../../utils/constants";
import theme from "../../../theme";
import Icon from "../../atoms/Icon";

const StyledCustomDataGridHeader = styled(Box)({
  padding: "12px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

const StyledSearchGrid = styled(Grid)({
  width: "28rem",
  height: "1.75rem",
  borderRadius: "0.75rem",
});

const StyledMockGrid = styled(Grid)({
  width: "8rem",
  height: "1.75rem",
  borderRadius: "0.75rem",
});

const StyledButton = styled(Button)({
  height: "2rem",
  width: "6.813",
  border: "1px solid rgba(60, 66, 87, 0.12)",
  borderRadius: "4px",
  color: theme.palette.text.secondary,
  textTransform: "none",
});

const ReimburseDataGridHeader = () => {
  return (
    <StyledCustomDataGridHeader>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Grid container columnGap={1}>
            <Grid item>
              <TextField
                size="small"
                placeholder="Search cards"
                startAdornment={<SearchOutlinedIcon />}
                variant={"outlined"}
                width="450px"
                borderRadius="12px"
              />
            </Grid>
            <StyledMockGrid>
              <TextField
                size="small"
                placeholder="All cards"
                startAdornment={<CalendarTodayOutlinedIcon />}
                variant={"outlined"}
                width="122px"
                borderRadius="12px"
              />
            </StyledMockGrid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item>
            <StyledButton
              children={DOWNLOAD}
              variant="outlined"
              startIcon={<Icon alt="icon" src={Download} />}
            />
          </Grid>
        </Grid>
      </Grid>
    </StyledCustomDataGridHeader>
  );
};

export default ReimburseDataGridHeader;
