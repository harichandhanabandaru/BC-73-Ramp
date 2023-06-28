import { StoryFn } from "@storybook/react";
import React from "react";
import ReimbursePaymentCardTable from ".";
import { REIMBURSEMENTPAYMENTDATA } from "../../../utils/constants";

export default {
  title: "organisms/ReimbursePaymentCardTable",
  component: ReimbursePaymentCardTable,
};

const Template: StoryFn<typeof ReimbursePaymentCardTable> = (args) => {
  return <ReimbursePaymentCardTable {...args} />;
};

export const dataGrid = Template.bind({});
dataGrid.args = {
  data: REIMBURSEMENTPAYMENTDATA,
};
