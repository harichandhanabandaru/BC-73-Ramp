import { StoryFn } from "@storybook/react";
import React from "react";
import CreateRampCategoryBody from ".";

export default {
  title: "organisms/CreateRampCategoryBody",
  component: CreateRampCategoryBody,
};

const Template: StoryFn<typeof CreateRampCategoryBody> = (args) => {
  return <CreateRampCategoryBody {...args} />;
};

export const createRampCategoryBody = Template.bind({});

createRampCategoryBody.args = {};
