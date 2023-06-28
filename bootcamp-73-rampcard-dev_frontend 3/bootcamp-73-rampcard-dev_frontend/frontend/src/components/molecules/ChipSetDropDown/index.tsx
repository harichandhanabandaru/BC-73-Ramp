import React from "react";
import { Menu, MenuItem } from "@mui/material";

interface Props {
  anchorEl: Element | ((element: Element) => Element);
  handleClose: () => void;
  handleMenuItemClick: (item: number) => void;
  selectedItem: number;
  options: string[];
}

export default function ChipSetDropDown(props: Props) {
  return (
    <div>
      <Menu
        anchorEl={props.anchorEl}
        open={Boolean(props.anchorEl)}
        onClose={props.handleClose}
        sx={{
          " & .MuiPaper-root": {
            boxShadow: "none",
            border: "1px solid #C0C8D2",
          },
          "& .MuiList-root": {
            padding: "1px",
          },
        }}
      >
        {props.options.map((option: string, index: number) => (
          <MenuItem
            key={option}
            selected={index === props.selectedItem}
            onClick={() => props.handleMenuItemClick(index)}
            sx={{
              width: "160px",
              "&.Mui-selected": {
                color: "white",
                borderRadius: "4px",
                backgroundColor: "#625AFA",
                disableRipple: "none",
                padding: "4px",
              },
              "&.Mui-selected:hover": {
                color: "white",
                borderRadius: "4px",
                backgroundColor: "#625AFA",
              },
              color: "#687385",
              padding: "4px",
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
