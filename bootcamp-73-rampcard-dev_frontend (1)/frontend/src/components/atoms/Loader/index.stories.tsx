import React from "react";
import { StoryFn } from "@storybook/react";
import Loader from ".";
import loaderImg from "../../../../public/assets/icons/loaderIcon.svg";

export default {
  title: "atoms/Loader",
  component: Loader,
};

const Template: StoryFn<typeof Loader> = (args: any) => {
  return <Loader {...args} />;
};

export const Loading = Template.bind({});
Loading.args = {
  src: loaderImg,
  alt: "loader",
};
