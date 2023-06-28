import React from "react";
import { StoryFn } from "@storybook/react";
import Checkbox from ".";

export default {
  title: "atoms/Checkbox",
  component: Checkbox,
};

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const checkbox = Template.bind({});
checkbox.args = {};
