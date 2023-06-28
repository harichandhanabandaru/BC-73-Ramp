import { StoryFn } from "@storybook/react";
import React from "react";
import { MENU } from "../../../utils/constants";
import Menu from ".";

export default {
  title: "atoms/Menu",
  component: Menu,
};

const Template: StoryFn<typeof Menu> = (args: any) => <Menu {...args} />;

export const menu = Template.bind({});
menu.args = {
  options: MENU,
  open: true
};
