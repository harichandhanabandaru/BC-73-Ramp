import {  StoryFn } from "@storybook/react";
import React from "react";
import Icon from "./index";
import Profile from "../../../../public/assets/icons/profile.svg";
import Cross from "../../../../public/assets/icons/cross.svg";

export default {
  title: "atoms/Icon",
  component: Icon,
}

const Template: StoryFn<typeof Icon> = (args: any) => <Icon {...args} />;

export const icon = Template.bind({});
icon.args = {
  height: "20px",
  width: "20px",
  src: Profile,
};

export const cross = Template.bind({});
cross.args = {
  height: "12.6px",
  width: "12.6px",
  src: Cross,
};
