import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { SEARCH, PASSWORD } from "../../../utils/constants";
import { TextField, TextFieldProps } from ".";
import SearchIcon from "../../../../public/assets/icons/search.svg";

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
  startAdornment: <img src={SearchIcon}></img>,
  width: "450px",
  height: "2rem",
  borderRadius: "12px",
  paddingLeft: "8px",
};
export const Password = Templete.bind({});
Password.args = {
  variant: "outlined",
  placeholder: PASSWORD,
  size: "small",
  type: "password",
};
