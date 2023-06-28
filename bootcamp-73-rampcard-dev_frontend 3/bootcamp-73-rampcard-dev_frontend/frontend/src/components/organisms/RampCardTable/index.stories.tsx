import { StoryFn } from "@storybook/react";
import React from "react";
import RampCardTable from ".";
import { ROWS } from "../../../utils/constants";
import { GridColDef } from "@mui/x-data-grid";
import { Button, Grid, styled } from "@mui/material";
import theme from "../../../theme";
import Typography from "../../atoms/Typography";
import Eye from "../../../../public/assets/icons/eye.svg";
import Icon from "../../atoms/Icon";
import DropDown from "../../atoms/DropDown";

export default {
  title: "organisms/RampCardTable",
  component: RampCardTable,
};

const Template: StoryFn<typeof RampCardTable> = (args) => {
  return <RampCardTable {...args} />;
};

const StyledButton = styled(Button)({
  height: "2rem",
  width: "6.5rem",
  border: "1px solid rgba(60, 66, 87, 0.12)",
  borderRadius: "4px",
  color: theme.palette.text.secondary,
  textTransform: "none",
  fontFamily: "Segoe UI",
  fontSize: "14px",
  lineHeight: "24px",
});

export const COLUMNS: GridColDef[] = [
  {
    field: "transactions",
    headerName: "TRANSACTIONS",
    headerClassName: "header-styling",
    width: 112,
    sortable: false,
    renderCell: (params) => (
      <Grid container direction="column" rowGap={0.1}>
        <Grid item>
          <Typography variant="body2" color={theme.palette.other.highEmphasis}>
            {params.value[0]}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body3"
            color={theme.palette.other.mediumEmphasis}
          >
            {params.value[1]}
          </Typography>
        </Grid>
      </Grid>
    ),
    renderHeader: (params) => (
      <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
        {params.field.toUpperCase()}
      </Typography>
    ),
  },
  {
    field: "icon",
    headerName: "",
    headerClassName: "header-styling",
    width: 38,
    sortable: false,
    renderCell: () => <Icon alt="icon" src={Eye} />,
  },
  {
    field: "amount",
    headerName: "AMOUNT",
    headerClassName: "header-styling",
    width: 150,
    sortable: false,
    align: "right",
    renderCell: (params) => (
      <Typography variant="body2" color={theme.palette.other.highEmphasis}>
        {params.value}
      </Typography>
    ),
    renderHeader: (params) => (
      <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
        {params.field.toUpperCase()}
      </Typography>
    ),
  },
  {
    field: "date",
    headerName: "DATE",
    headerClassName: "header-styling",
    width: 150,
    sortable: false,
    renderCell: (params) => (
      <Typography variant="body2" color={theme.palette.other.highEmphasis}>
        {params.value}
      </Typography>
    ),
    renderHeader: (params) => (
      <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
        {params.field.toUpperCase()}
      </Typography>
    ),
  },
  {
    field: "user",
    headerName: "USER",
    headerClassName: "header-styling",
    width: 150,
    sortable: false,
    renderCell: (params) => (
      <Grid container direction="column" rowGap={0.1}>
        <Grid item>
          <Typography variant="body2" color={theme.palette.other.highEmphasis}>
            {params.value[0]}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body3"
            color={theme.palette.other.mediumEmphasis}
          >
            {params.value[1]}
          </Typography>
        </Grid>
      </Grid>
    ),
    renderHeader: (params) => (
      <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
        {params.field.toUpperCase()}
      </Typography>
    ),
  },
  {
    field: "quickbooks",
    headerName: "QUICKBOOKS CATEGORY",
    headerClassName: "header-styling",
    width: 160,
    sortable: false,
    renderCell: (params) => (
      <DropDown
        options={[
          { label: "Expense", value: "Expense" },
          { label: "Travel", value: "Travel" },
          { label: "Travel meals", value: "Travel meals" },
          { label: "Hotels", value: "Hotels" },
        ]}
        value={""}
        placeHolder={"Choose One"}
        styles={{
          borderRadius: "8px",
          border: `1px solid ${theme.palette.other.stroke100}`,
          height: "2rem",
          width: "8.375rem",
          padding: "7px 2px 7px 8px",
          "& .MuiSelect-icon": {
            paddingRight: "2px",
          },
        }}
      />
    ),
    renderHeader: (params) => (
      <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: "receipt",
    headerName: "RECEIPT",
    headerClassName: "header-styling",
    width: 150,
    sortable: false,
    renderCell: (params) => (
      <Typography variant="body2" color={theme.palette.other.highEmphasis}>
        {params.value}
      </Typography>
    ),
    renderHeader: (params) => (
      <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
        {params.field.toUpperCase()}
      </Typography>
    ),
  },
  {
    field: "memo",
    headerName: "MEMO",
    headerClassName: "header-styling",
    width: 150,
    sortable: false,
    renderCell: (params) => (
      <Typography variant="body2" color={theme.palette.other.highEmphasis}>
        {params.value}
      </Typography>
    ),
    renderHeader: (params) => (
      <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
        {params.field.toUpperCase()}
      </Typography>
    ),
  },
  {
    field: "sync",
    headerName: "SYNC",
    headerClassName: "header-styling",
    width: 150,
    sortable: false,
    renderCell: () => (
      <Button
        variant="outlined"
        sx={{
          width: "6.5rem",
          minWidth: "6.5rem",
          height: "2rem",
          padding: "3px 8px 5px",
          textTransform: "none",
          border: "1px solid rgba(60, 66, 87, 0.12)",
          boxShadow:
            "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
          borderRadius: "4px",
        }}
      >
        <Typography
          variant="body2"
          children="Make ready"
          color={theme.palette.other.mediumEmphasis}
        />
      </Button>
    ),
    renderHeader: (params) => (
      <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
        {params.field.toUpperCase()}
      </Typography>
    ),
  },
];

export const dataGrid = Template.bind({});
dataGrid.args = {
  data: ROWS,
  columnData: COLUMNS,
};
