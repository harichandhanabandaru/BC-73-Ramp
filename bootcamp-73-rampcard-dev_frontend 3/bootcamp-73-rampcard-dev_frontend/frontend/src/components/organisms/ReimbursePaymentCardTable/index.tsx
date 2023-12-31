import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";
import theme from "../../../theme";
import Icon from "../../atoms/Icon";
import { Box, Button, styled, Typography } from "@mui/material";
import { REIMBURSEMENTPAYMENTDATA } from "../../../utils/constants";
import ReimbursementDataGridFooter from "../ReimbursementDataGridFooter";
import ReimburseDataGridHeader from "../ReimburseDataGridHeader";
import Glyph from "../../../../public/assets/icons/glyph.svg";

import { RenderEmployee } from "./renderer/RenderEmployee";
import { RenderPaymentStatus } from "./renderer/RenderPaymentStatus";
import UseRampCardTablehooks from "../RampCardTable/hooks";
import Delete from "../../../../public/assets/icons/delete.svg";
import Cross from "../../../../public/assets/icons/cross.svg";
import Filter from "../../../../public/assets/icons/filter.svg";
import Checkbox from "../../atoms/Checkbox";

const StyledButton = styled(Button)({
  height: "2rem",
  width: "6.5rem",
  border: "1px solid rgba(60, 66, 87, 0.12)",
  borderRadius: "4px",
  color: theme.palette.text.secondary,
  textTransform: "none",
  boxShadow:
    "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
});

const StyledBox = styled(Box)({
  height: "700px",
  width: "100%",
});

export const COLUMNS: GridColDef[] = [
  {
    field: "employee/amount",
    headerName: "EMPLOYEE/AMOUNT",
    editable: true,
    flex: 1,
    renderCell: RenderEmployee,
    headerClassName: "header-styling",
    renderHeader: (params) => (
      <Typography variant="caption1" color={theme.palette.text.primary}>
        {params.field.toUpperCase()}
      </Typography>
    ),
  },
  {
    field: "payment status",
    headerName: "PAYMENT STATUS",
    editable: true,
    flex: 1,
    renderCell: RenderPaymentStatus,
    headerClassName: "header-styling",
    renderHeader: (params) => (
      <Typography variant="caption1" color={theme.palette.text.primary}>
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: "payment_date",
    headerName: "PAYMENT DATE",
    editable: true,
    flex: 1,
    headerClassName: "header-styling",
    renderHeader: (params) => (
      <Typography variant="caption1" color={theme.palette.text.primary}>
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: "due_date",
    headerName: "DUE DATE",
    flex: 1,
    headerClassName: "header-styling",
    renderHeader: (params) => (
      <Typography variant="caption1" color={theme.palette.text.primary}>
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: "invoice_date",
    headerName: "INVOICE DATE",
    flex: 1,
    headerClassName: "header-styling",
    renderHeader: (params) => (
      <Typography variant="caption1" color={theme.palette.text.primary}>
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: "next_step",
    headerName: "NEXT STEP",
    sortable: false,
    renderCell: (params) => (
      <StyledButton
        children="Review"
        variant="outlined"
        onClick={() => alert("clicked")}
      />
    ),
    headerClassName: "header-styling",
    renderHeader: (params) => (
      <Typography variant="caption1" color={theme.palette.text.primary}>
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: "icon",
    headerName: "",
    headerClassName: "header-styling",
    width: 184,
    sortable: false,
    renderCell: (params) => <Icon alt="icon" src={Glyph} />,
  },
];

interface Props {
  data?: typeof REIMBURSEMENTPAYMENTDATA;
  onChange: (event: any) => void;
  value: string;
}

const ReimbursePaymentCardTable = (props: Props) => {
  const { startIndex, setStartIndex } = UseRampCardTablehooks();
  return (
    <StyledBox data-testid="ramp-card">
      <DataGrid
        components={{
          Footer: ReimbursementDataGridFooter,
          Header: ReimburseDataGridHeader,
          BaseCheckbox: Checkbox,
        }}
        componentsProps={{
          footer: {
            maxResults: props.data.length,
            startIndex: startIndex,
            setStartIndex: setStartIndex,
            data: props.data,
          },
          header: {
            icon: Delete,
            crossIcon: Cross,
            filterIcon: Filter,
            setValue: props.onChange,
            value: props.value,
          },
        }}
        columns={COLUMNS}
        rows={props.data.slice(
          startIndex,
          Math.min(startIndex + 6, props.data.length)
        )}
        autoHeight
        disableVirtualization
        checkboxSelection
        disableColumnMenu
        sx={{
          border: "none",
          "&  .MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer": {
            display: "none"
          }
        }}
      />
    </StyledBox>
  );
};

export default ReimbursePaymentCardTable;
