import { StoryFn } from "@storybook/react";
import CheckboxTypography from ".";
import React from "react";

export default{
    title: 'molecules/CheckboxTypography',
    component: CheckboxTypography
}

const Template: StoryFn<typeof CheckboxTypography> = (args) =>{
    return <CheckboxTypography {...args} />;
}

export const checkTypo = Template.bind({});
checkTypo.args={
    text: 'Stay signed in for a week'
}
