import React from "react";
import { Box, MenuItem, Select, SelectProps } from "@mui/material";
import Typography from "../Typography";
import dropdown from "../../../../public/assets/icons/dropdown.svg";
import Icon from "../Icon";

export interface Props extends SelectProps {
  options: { label: string; value: string; extraText?: string }[];
  value: string;
  placeHolder: string;
  styles: any;
}

const DropDown = (props: Props) => {
  const selectedOption = props.options.find(
    (option) => option.value === props.value
  );

  return (
    <Select
      value={props.value}
      key={props.value}
      IconComponent={() => <Icon src={dropdown} alt={""}></Icon>}
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
      renderValue={() => (
        <Typography
          variant="body3"
          children={selectedOption?.label || props.placeHolder}
          color={"#1A1B25"}
        />
      )}
    >
      <MenuItem value="" disabled sx={{ display: "none" }}>
        <em>
          <Typography
            variant="body3"
            children={props.placeHolder}
            color={"#687385"}
          />
        </em>
      </MenuItem>
      {props.options.map((option) => (
        <MenuItem value={option.value} key={option.value}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "250px",
            }}
          >
            <Typography
              variant="body3"
              children={option.label}
              color={"#1A1B25"}
              sx={{ whiteSpace: "normal" }}
            />
            {option.extraText && (
              <Typography
                variant="caption"
                color="#687385"
                sx={{ whiteSpace: "normal" }}
              >
                {option.extraText}
              </Typography>
            )}
          </Box>
        </MenuItem>
      ))}
    </Select>
  );
};

export default DropDown;
