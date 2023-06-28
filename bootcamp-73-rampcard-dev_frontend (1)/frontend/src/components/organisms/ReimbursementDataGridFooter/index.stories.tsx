import { StoryFn } from "@storybook/react";
import React from "react";
import ReimbursementDataGridFooter from ".";

export default {
  title: "organisms/ReimbursementDataGridFooter",
  component: ReimbursementDataGridFooter,
};

const Template: StoryFn<typeof ReimbursementDataGridFooter> = (args) => {
  return <ReimbursementDataGridFooter {...args} />;
};

// export const dataGridFooter = Template.bind({});
// dataGridFooter.args = {
//   maxResults: 100,
// };
