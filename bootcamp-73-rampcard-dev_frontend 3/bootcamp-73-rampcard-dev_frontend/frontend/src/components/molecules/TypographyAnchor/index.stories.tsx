import { StoryFn } from "@storybook/react";
import React from "react";
import {
  TYPOGRAPHYANCHORTEXT,
  TYPOGRAPHYANCHORVALUE,
} from "../../../utils/constants";
import TypographyAnchor from ".";

export default {
  title: "molecules/TypographyAnchor",
  component: TypographyAnchor,
};

const Template: StoryFn<typeof TypographyAnchor> = (args) => {
  return <TypographyAnchor {...args} />;
};

export const typographyanchor = Template.bind({});

typographyanchor.args = {
  text: TYPOGRAPHYANCHORTEXT,
  value: TYPOGRAPHYANCHORVALUE,
};
