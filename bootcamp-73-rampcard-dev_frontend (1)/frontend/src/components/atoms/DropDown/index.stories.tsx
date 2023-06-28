import React from "react";
import { StoryFn } from "@storybook/react";
import DropDown from ".";

export default {
  title: "atoms/DropDown",
  component: DropDown,
};

const Template: StoryFn<typeof DropDown> = (args: any) => {
  return <DropDown {...args} />;
};

export const unSelected = Template.bind({});
unSelected.args = {
  defaultValue: "Select",
  value: "",
  variant: "filled",
  placeHolder: "Choose One",
  options: [
    { label: "Expense", value: "Expense" },
    { label: "Travel", value: "Travel" },
    { label: "Travel meals", value: "Travel meals" },
    { label: "Hotels", value: "Hotels" },
  ],
  styles: {
    borderRadius: "8px",
    height: "28px",
    width: "284px",
    "&:hover": {
      borderColor: "#FFFFFF",
    }
  },
};


export const selected = Template.bind({});
selected.args = {
  defaultValue: "Select",
  value: "Expense",
  variant: "filled",
  placeHolder: "Choose One",
  options: [
    { label: "Expense", value: "Expense" },
    { label: "Travel", value: "Travel" },
    { label: "Travel meals", value: "Travel meals" },
    { label: "Hotels", value: "Hotels" },
  ],
  styles: {
    borderRadius: "8px",
    height: "28px",
    width: "284px",
    "&:hover": {
      borderColor: "#FFFFFF",
    }
  },
};