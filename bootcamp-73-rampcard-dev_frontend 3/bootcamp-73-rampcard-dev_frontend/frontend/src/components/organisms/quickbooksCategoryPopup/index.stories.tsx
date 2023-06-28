import React from "react";
import { StoryFn } from "@storybook/react";
import QuickbooksCategoryPopup from ".";

export default {
    title: 'organisms/QuickbooksCategoryPopup',
    component: QuickbooksCategoryPopup
}

const Template: StoryFn<typeof QuickbooksCategoryPopup> = (args) => {
    return <QuickbooksCategoryPopup {...args} />;
  };

  export const popup = Template.bind({});
  popup.args = {
    category: 'Travel',
    transaction: 'Lyft',
    onclick: ()=>{}
  };