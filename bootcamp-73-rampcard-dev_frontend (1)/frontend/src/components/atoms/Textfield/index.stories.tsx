import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { SEARCH, PASSWORD } from "../../../utils/constants";
import { TextField, TextFieldProps } from ".";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const meta: Meta = {
  title: "atoms/TextField",
  component: TextField,
};
export default meta;
const Templete: StoryFn<TextFieldProps> = (args) => <TextField {...args} />;
export const Search = Templete.bind({});
Search.args = {
  variant: "outlined",
  placeholder: SEARCH,
  size: "small",
  startAdornment: <SearchOutlinedIcon />,
};
export const Password = Templete.bind({});
Password.args = {
  variant: "outlined",
  placeholder: PASSWORD,
  size: "small",
  type: "password",
};
