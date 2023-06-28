import React from "react";
import { TextField } from "@mui/material";
import theme from "../../../theme";
import Search from "../../../../public/assets/icons/search.svg";

export interface TableTextFeildProps {
  value?: string;
  setValue: (event: any) => void;
}

const TableTextFeild = (props: TableTextFeildProps) => {
  return (
    <TextField
    data-testid="search-input"
      size="small"
      placeholder="Search cards"
      InputProps={{
        style: {
          width: "28.5rem",
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
            <img src={Search}></img>
          </>
        ),
      }}
      value={props.value}
      onChange={props.setValue}
      variant={"outlined"}
    />
  );
};

export default TableTextFeild;
