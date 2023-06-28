import { StoryFn } from "@storybook/react";
import React from "react";
import theme from "../../../theme";
import IconTypography from ".";
import plus from "/public/assets/icons/plus.svg";

export default{
    title: 'molecules/IconTypography',
    component: IconTypography
}

const Template: StoryFn<typeof IconTypography> = (args) =>{
    return <IconTypography {...args} />;
}

export const checkTypo = Template.bind({});
checkTypo.args={
    content: 'Add new',
    color: theme.palette.primary[500],
    icon: plus
}