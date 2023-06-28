import { StoryFn } from "@storybook/react";
import React from "react";
import SkipPrefillingCard from ".";
import Info from "../../../../public/assets/icons/info.svg";

export default {
  title: "organisms/SkipPrefillingCard",
  component: SkipPrefillingCard,
};

const Template: StoryFn<typeof SkipPrefillingCard> = (args) => {
  return <SkipPrefillingCard {...args} />;
};

export const skipprefillingcard = Template.bind({});

skipprefillingcard.args = {
  title: "Save time with uploading invoice",
  icon: Info,
};
