import { Checkbox, CheckboxProps, styled } from "@mui/material";
import React from "react";
import Icon from "../Icon";
import unchecked from "../../../../public/assets/icons/uncheckedIcon.svg";
import checked from "../../../../public/assets/icons/checkbox.png";

interface Props extends CheckboxProps {}

const StyledCheckBox = styled(Checkbox)({
  "& .MuiCheckbox-root": {
    padding : `0px !important`
  }
});

const CheckboxComponent = (props: Props) => {
  return (
    <Checkbox sx={{padding:"0px"}}
      data-testid="checkbox"
      onChange={props.onChange}
      checked={props.checked}
      icon={<Icon src={unchecked} alt="UncheckedIcon"/>}
      checkedIcon={<Icon src={checked} alt="checkedIcon"/>}
    />
  );
};

export default CheckboxComponent;
