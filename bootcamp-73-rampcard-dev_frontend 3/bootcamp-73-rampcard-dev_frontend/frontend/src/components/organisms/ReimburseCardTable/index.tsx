import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { Box, styled } from "@mui/material";
import { REIMBURSEMENDATA } from "../../../utils/constants";
import ReimbursementDataGridFooter from "../ReimbursementDataGridFooter";
import ReimburseDataGridHeader from "../ReimburseDataGridHeader";
import UseRampCardTablehooks from "./hooks";
import Checkbox from "../../atoms/Checkbox";
import { COLUMNS } from "./index.stories";

const StyledBox = styled(Box)({
  height: "700px",
  width: "100%",
});

interface Props {
  data?: typeof REIMBURSEMENDATA;
  onChange: (event: any) => void;
  value: string;
  showAprovalButtons: boolean;
  handleDelete: () => void;
  onRowsSelectionHandler: (ids: any[]) => void;
  columnData: typeof COLUMNS;
}

const ReimburseCardTable = (props: Props) => {
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
            showAprovalButtons: props.showAprovalButtons,
            setValue: props.onChange,
            value: props.value,
            handleDelete: props.handleDelete,
          },
        }}
        columns={props.columnData}
        rows={props.data.slice(
          startIndex,
          Math.min(startIndex + 6, props.data.length)
        )}
        onSelectionModelChange={(ids) => props.onRowsSelectionHandler(ids)}
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

export default ReimburseCardTable;
