import React from "react";
import { StoryFn } from "@storybook/react";
import CreateCategoryRule from ".";

export default {
  title: "organisms/CreateCategoryRule",
  component: CreateCategoryRule,
};

const Template: StoryFn<typeof CreateCategoryRule> = (args: any) => {
  return <CreateCategoryRule {...args} />;
};

export const CreateCategory = Template.bind({});
CreateCategory.args = {
  open: true,
};
