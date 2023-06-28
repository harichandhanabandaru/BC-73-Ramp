import { StoryFn } from "@storybook/react";
import ReimburseDataGridHeader from ".";
import React from "react";

export default {
  title: "organisms/ReimburseDataGridHeader",
  component: ReimburseDataGridHeader,
};

const Template: StoryFn<typeof ReimburseDataGridHeader> = (args) => {
  return <ReimburseDataGridHeader {...args} />;
};

export const dataGridHeader = Template.bind({});
dataGridHeader.args = {
  setValue: () => {},
};
