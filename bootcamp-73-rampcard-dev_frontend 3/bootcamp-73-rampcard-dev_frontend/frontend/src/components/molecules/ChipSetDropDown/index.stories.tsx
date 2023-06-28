import { StoryFn } from "@storybook/react";
import React from "react";
import ChipSetDropDown from ".";

export default {
  title: "molecules/ChipSetDropDown",
  component: ChipSetDropDown,
};

const Template: StoryFn<typeof ChipSetDropDown> = (args) => {
  return <ChipSetDropDown {...args} />;
};

export const checkTypo = Template.bind({});
checkTypo.args = {
  anchorEl: true,
  handleClose: () => {},
  handleMenuItemClick: (item: number) => {},
  selectedItem: 0,
  options: ["Drafts", "Payments"],
};
