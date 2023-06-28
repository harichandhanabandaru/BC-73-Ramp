import { StoryFn } from "@storybook/react";
import React from "react";
import ReimburseCardTable from ".";
import { REIMBURSEMENDATA } from "../../../utils/constants";
import { GridColDef } from "@mui/x-data-grid";
import { Button, Grid } from "@mui/material";
import theme from "../../../theme";
import Typography from "../../atoms/Typography";
import Icon from "../../atoms/Icon";
import Glyph from "../../../../public/assets/icons/glyph.svg";
import InvoiceIcon from "../../../../public/assets/icons/invoiceicon.svg";
import { RenderEmployee } from "../ReimburseCardTable/renderer/RenderEmployee";

export default {
  title: "organisms/ReimburseCardTable",
  component: ReimburseCardTable,
};

const Template: StoryFn<typeof ReimburseCardTable> = (args) => {
  return <ReimburseCardTable {...args} />;
};

export const dataGrid = Template.bind({});
dataGrid.args = {
  data: REIMBURSEMENDATA,
};

export const COLUMNS: GridColDef[] = [
  {
    field: "employees",
    headerName: "EMPLOYEES",
    headerClassName: "header-styling",
    sortable: false,
    renderCell: RenderEmployee,
    renderHeader: (params) => (
      <Typography variant="caption1" color={theme.palette.text.primary}>
        {params.field.toUpperCase()}
      </Typography>
    ),
  },
  {
    field: "amount",
    headerName: "AMOUNT",
    editable: true,
    flex: 1,
    headerClassName: "header-styling",
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
    field: "due_date",
    headerName: "DUE DATE",
    headerClassName: "header-styling",
    flex: 1,
    sortable: false,
    renderCell: (params) => (
      <Typography variant="body2" color={theme.palette.other.highEmphasis}>
        {params.value}
      </Typography>
    ),
    renderHeader: (params) => (
      <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: "invoice_date",
    headerName: "INVOICE DATE",
    flex: 1,
    headerClassName: "header-styling",
    sortable: false,
    renderCell: (params) => (
      <Typography variant="body2" color={theme.palette.other.highEmphasis}>
        {params.value}
      </Typography>
    ),
    renderHeader: (params) => (
      <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: "invoice_no",
    headerName: "INVOICE NO.",
    flex: 1,
    headerClassName: "header-styling",
    sortable: false,
    renderCell: (params) => (
      <Typography variant="body2" color={theme.palette.other.highEmphasis}>
        {params.value}
      </Typography>
    ),
    renderHeader: (params) => (
      <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: "invoice",
    headerName: "INVOICE",
    headerClassName: "header-styling",
    flex: 1,
    sortable: false,
    renderHeader: (params) => (
      <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
        {params.field.toUpperCase()}
      </Typography>
    ),
    renderCell: (params) => <img src={InvoiceIcon} />,
  },
  {
    field: "account_no",
    headerName: "ACCOUNT NO.",
    flex: 1,
    headerClassName: "header-styling",
    sortable: false,
    renderCell: (params) => (
      <Typography variant="body2" color={theme.palette.other.highEmphasis}>
        {params.value}
      </Typography>
    ),
    renderHeader: (params) => (
      <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: "next_step",
    headerName: "NEXT STEP",
    flex: 1,
    headerClassName: "header-styling",
    sortable: false,
    renderCell: () => (
      <Grid container direction="row" columnGap={1.5}>
        <Grid item>
          <Button
            variant="outlined"
            sx={{
              width: "84px",
              minWidth: "84px",
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
              children="Review"
              color={theme.palette.other.mediumEmphasis}
            />
          </Button>
        </Grid>
        <Grid item paddingTop="7px">
          <Icon alt="icon" src={Glyph} />
        </Grid>
      </Grid>
    ),
    renderHeader: (params) => (
      <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
        {params.colDef.headerName}
      </Typography>
    ),
  },
];