import { StoryFn } from "@storybook/react";
import ReimburseDataGridHeader from ".";
import React from "react";
// import Delete from "../../../../public/assets/icons/delete.svg";
// import Cross from "../../../../public/assets/icons/cross.svg";
// import Filter from "../../../../public/assets/icons/filter.svg";

export default {
  title: "organisms/ReimburseDataGridHeader",
  component: ReimburseDataGridHeader,
};

const Template: StoryFn<typeof ReimburseDataGridHeader> = (args) => {
  return <ReimburseDataGridHeader />;
};

export const dataGridHeader = Template.bind({});
dataGridHeader.args = {
  // icon: Delete,
  // crossIcon: Cross,
  // filterIcon: Filter,
  deletable: true,
};
