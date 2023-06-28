import HeaderNav from ".";
import { StoryFn } from "@storybook/react";
import React from "react";

export default {
  title: "templates/HeaderNav",
  component: HeaderNav,
};

const Template: StoryFn<typeof HeaderNav> = (args) => {
  return <HeaderNav />;
};

export const headerNav = Template.bind({});
