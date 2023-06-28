import React from "react";
import { makeStyles, MenuItem, Select, SelectProps } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import Typography from "../Typography";
import { DropDownIcon } from "./Icon";

export interface Props extends SelectProps {
  options: { label: string; value: string }[];
  value: string;
  placeHolder: string;
  styles: any
}

const DropDown = (props: Props) => {
  return (
    <Select
      value={props.value}
      key={props.value}
      IconComponent={DropDownIcon}
      onChange={props.onChange}
      displayEmpty
      sx={props.styles}
      data-testid="Select"
      style={{ borderRadius: "8px" }}
      MenuProps={{
        PaperProps: {
          sx: {
            border: "1px solid #C0C8D2",
            borderRadius: "6px",
            boxShadow:
              "0px 15px 35px rgba(60, 66, 87, 0.08), 0px 5px 15px rgba(0, 0, 0, 0.12)",
          },
        },
      }}
      inputProps={{
        sx: {
          padding: "0px !important",
        },
      }}
    >
      <MenuItem value="" disabled sx={{ display: "none" }}>
        <Typography
          variant="body3"
          children={props.placeHolder}
          color={"#687385"}
        ></Typography>
      </MenuItem>
      {props.options.map((option) => (
        <MenuItem value={option.value} key={option.value}>
          <Typography
            variant="body3"
            children={option.label}
            color={"#687385"}
          ></Typography>
        </MenuItem>
      ))}
    </Select>
  );
};

export default DropDown;
