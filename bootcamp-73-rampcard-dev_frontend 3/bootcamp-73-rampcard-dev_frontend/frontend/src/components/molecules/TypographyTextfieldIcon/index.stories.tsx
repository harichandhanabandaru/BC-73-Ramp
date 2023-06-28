import { StoryFn } from "@storybook/react";
import React from "react";
import TypographyTextfieldIcon from ".";
import Cross from "../../../../public/assets/icons/cross.svg";

export default {
  title: "molecules/TypographyTextfieldIcon",
  component: TypographyTextfieldIcon,
};

const Template: StoryFn<typeof TypographyTextfieldIcon> = (args) => {
  return <TypographyTextfieldIcon {...args} />;
};

export const typographytextfieldicon = Template.bind({});

typographytextfieldicon.args = {
  value: "Ramp category",
  src: Cross,
  alt: "cross",
  placeholder: "Enter Ramp category",
  padding: "0 10px",
  heading: "Ramp Category",
};
