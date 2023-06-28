import { StoryFn } from "@storybook/react";
import React from "react";
import RampCategoryCreateCard from ".";

export default {
  title: "organisms/RampCategoryCreateCard",
  component: RampCategoryCreateCard,
};

const Template: StoryFn<typeof RampCategoryCreateCard> = (args) => {
  return <RampCategoryCreateCard {...args} />;
};

export const dataGrid = Template.bind({});
dataGrid.args = {
  cancelbtntext: "Cancel",
  submitbtntext: "Create rule",
  addbtntext: "add rule",
  open: true,
  setOpen: () => {},
  handleOpen: () => {},
};
