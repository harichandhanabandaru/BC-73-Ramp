import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { Box, styled } from "@mui/material";
import { ROWS } from "../../../utils/constants";
import CustomDataGridFooter from "./CustomDataGridFooter";
import CustomDataGridHeader from "./CustomDataGridHeader";
import Delete from "../../../../public/assets/icons/delete.svg";
import Cross from "../../../../public/assets/icons/cross.svg";
import Filter from "../../../../public/assets/icons/filter.svg";
import UseRampCardTablehooks from "./hooks";
import { COLUMNS } from "./index.stories";
import Checkbox from "../../atoms/Checkbox";

interface Props {
  data: typeof ROWS;
  columnData: typeof COLUMNS;
  onChange: (event: any) => void;
  value: string;
  handleDelete: () => void;
  handleSelectionChange: (ids: any[]) => void;
  deletable: boolean;
}

const StyledBox = styled(Box)({
  width: "100%",
});

const RampCardTable = (props: Props) => {
  const { startIndex, setStartIndex } = UseRampCardTablehooks();
  const data = props.data;
  return (
    <StyledBox data-testid="ramp-card">
      <DataGrid
        sx={{
          "& .MuiDataGrid-columnSeparator": { display: "none" },
          border: "none",
          "& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer": {
            display: "none"
          }
        }}
        components={{
          Footer: CustomDataGridFooter,
          Header: CustomDataGridHeader,
          BaseCheckbox: Checkbox,
        }}
        componentsProps={{
          footer: {
            maxResults: data.length,
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
            deletable: props.deletable,
            handleDelete: props.handleDelete,
          },
        }}
        columns={props.columnData}
        rows={
          data.length > 0
            ? data.slice(startIndex, Math.min(startIndex + 6, data.length))
            : data
        }
        onSelectionModelChange={props.handleSelectionChange}
        autoHeight
        disableVirtualization
        checkboxSelection
        disableColumnMenu
      />
    </StyledBox>
  );
};

export default RampCardTable;
