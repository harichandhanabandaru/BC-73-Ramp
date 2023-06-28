import { StoryFn } from "@storybook/react";
import React from "react";
import ReimburseCardTable from ".";
import { REIMBURSEMENDATA } from "../../../utils/constants";

export default {
  title: "organisms/ReimburseCardTable",
  component: ReimburseCardTable,
};

const Template: StoryFn<typeof ReimburseCardTable> = (args) => {
  return <ReimburseCardTable {...args} />;
};

export const dataGrid = Template.bind({});
dataGrid.args = {
  data: REIMBURSEMENDATA,
};
