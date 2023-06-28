import { StoryFn } from "@storybook/react";
import React from "react";
import ReimbursementPageHeader from ".";

export default {
  title: "molecules/ReimbursementPageHeader",
  component: ReimbursementPageHeader,
};

const Template: StoryFn<typeof ReimbursementPageHeader> = (args) => {
  return <ReimbursementPageHeader {...args} />;
};

export const reimbursementPageHeader = Template.bind({});
reimbursementPageHeader.args = {
  handleOpenNewBill: () => {},
  heading: "Payment",
};
