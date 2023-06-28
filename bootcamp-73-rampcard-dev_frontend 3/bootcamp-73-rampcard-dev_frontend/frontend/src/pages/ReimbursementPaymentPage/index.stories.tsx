import { StoryFn } from "@storybook/react";
import ReimbursementPaymentPage from ".";
import React from "react";

export default {
  title: "Pages/ReimbursementPaymentPage",
  component: ReimbursementPaymentPage,
};

const Template: StoryFn<typeof ReimbursementPaymentPage> = (args) => {
  return <ReimbursementPaymentPage {...args} />;
};

export const dataGridHeader = Template.bind({});
dataGridHeader.args = {
  handleOpenNewBill: () => {},
};
