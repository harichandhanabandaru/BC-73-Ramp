import Typography from "./index";
import React from "react";
import { StoryFn } from "@storybook/react";

export default {
    title: 'atoms/Typography',
    component: Typography
}

const Template : StoryFn<typeof  Typography> = (args: any) => {
    return <Typography {...args}/>;
}

export const Text = Template.bind({});
Text.args = {
  children: "Heading 4",
  variant: "h4",
};