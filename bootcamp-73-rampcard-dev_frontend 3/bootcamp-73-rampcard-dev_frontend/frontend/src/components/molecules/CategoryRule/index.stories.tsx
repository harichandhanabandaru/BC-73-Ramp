import React from "react";
import { StoryFn } from "@storybook/react";
import CategoryRule from ".";
import { QUICK_BOOKS_CATEGORY } from "../../../utils/constants";

export default {
  title: "molecules/CategoryRule",
  component: CategoryRule,
};

const Template: StoryFn<typeof CategoryRule> = (args: any) => {
  return <CategoryRule {...args} />;
};

export const Rule = Template.bind({});
Rule.args = {
  textValue: "",
  textFieldPlaceholder: "Airlines",
  dropDownPlaceholder: "Quickbooks category",
  options: QUICK_BOOKS_CATEGORY,
  dropDownValue: "Travel",
};
