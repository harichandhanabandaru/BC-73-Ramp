import { StoryFn } from "@storybook/react";
import React from "react";
import MuiIcons from "../../atoms/RampCardIcon";
import { ICON_NOT_FOUND } from "../../../utils/constants";
import TextFieldWithLabel from ".";
import Cancel from "../../../../public/assets/icons/cross.svg";

export default {
  title: "molecules/TextFieldWithLabel",
  component: TextFieldWithLabel,
};

const Template: StoryFn<typeof TextFieldWithLabel> = (args) => {
  return <TextFieldWithLabel {...args} />;
};

export const textFieldWithLabel = Template.bind({});

textFieldWithLabel.args = {
  label: "Ramp Category",
  placeholder: "Enter Ramp Category",
  icon: <MuiIcons src={Cancel} alt={ICON_NOT_FOUND} />,
  onChange: () => {},
};
