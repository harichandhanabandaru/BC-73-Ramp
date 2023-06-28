import { StoryFn } from "@storybook/react";
import React from "react";
import CreateRampCategoryCard from ".";

export default {
  title: "organisms/CreateRampCategoryCard",
  component: CreateRampCategoryCard,
};

const Template: StoryFn<typeof CreateRampCategoryCard> = (args) => {
  return <CreateRampCategoryCard {...args} />;
};

export const createRampCategoryCard = Template.bind({});

createRampCategoryCard.args = {
  cancelbtntext: "Cancel",
  submitbtntext: "Create rule",
  addbtntext: "Add new",
  open: true
};
