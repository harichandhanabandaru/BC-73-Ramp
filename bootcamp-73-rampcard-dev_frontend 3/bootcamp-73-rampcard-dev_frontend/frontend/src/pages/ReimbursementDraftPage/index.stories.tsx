import { StoryFn } from "@storybook/react";
import ReimbursementDraftPage from ".";
import React from "react";

export default {
  title: "Pages/ReimbursementDraftPage",
  component: ReimbursementDraftPage,
};

const Template: StoryFn<typeof ReimbursementDraftPage> = (args) => {
  return <ReimbursementDraftPage {...args} />;
};

export const dataGridHeader = Template.bind({});
dataGridHeader.args = {
  handleOpenNewBill: () => {},
};
