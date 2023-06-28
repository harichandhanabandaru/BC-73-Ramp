import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";
import theme from "../../../theme";
import Icon from "../../atoms/Icon";
import { Box, Button, styled } from "@mui/material";
import { REIMBURSEMENDATA } from "../../../utils/constants";
import ReimbursementDataGridFooter from "../ReimbursementDataGridFooter";
import ReimburseDataGridHeader from "../ReimburseDataGridHeader";
import Glyph from "../../../../public/assets/icons/glyph.svg";
import { RenderEmployee } from "./renderer/RenderEmployee";
import UseRampCardTablehooks from "./hooks";

const StyledButton = styled(Button)({
  height: "2rem",
  width: "6.5rem",
  border: "1px solid rgba(60, 66, 87, 0.12)",
  borderRadius: "4px",
  color: theme.palette.text.secondary,
  boxShadow:
    "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
});

const StyledBox = styled(Box)({
  height: "700px",
  width: "100%",
});

export const COLUMNS: GridColDef[] = [
  {
    field: "employees",
    headerName: "EMPLOYEES",
    editable: true,
    flex: 1,
    renderCell: RenderEmployee,
  },
  {
    field: "amount",
    headerName: "AMOUNT",
    editable: true,
    flex: 1,
  },
  {
    field: "due_date",
    headerName: "DUE DATE",
    editable: true,
    flex: 1,
  },
  {
    field: "invoice_date",
    headerName: "INVOICE DATE",
    flex: 1,
  },
  {
    field: "invoice_no",
    headerName: "INVOICE NO.",
    flex: 1,
  },
  {
    field: "invoice",
    headerName: "INVOICE",
    editable: true,
    renderCell: (params) => <img src={params.value} />,
    flex: 1,
  },
  {
    field: "account_no",
    headerName: "ACCOUNT NO.",
    sortable: false,
    flex: 1,
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
  data?: typeof REIMBURSEMENDATA;
}

const ReimburseCardTable = (props: Props) => {
  const { startIndex, setStartIndex } = UseRampCardTablehooks();
  return (
    <StyledBox data-testid="ramp-card">
      <DataGrid
        components={{
          Footer: ReimbursementDataGridFooter,
          Header: ReimburseDataGridHeader,
        }}
        componentsProps={{
          footer: {
            maxResults: REIMBURSEMENDATA.length,
            startIndex: startIndex,
            setStartIndex: setStartIndex,
            data: props.data,
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
        }}
      />
    </StyledBox>
  );
};

export default ReimburseCardTable;
