import { StoryFn } from "@storybook/react";
import Logout from ".";
import React from "react";

export default{
    title: 'organisms/LogoutCard',
    component: Logout
}

const Template: StoryFn<typeof Logout> = () => {
    return <Logout/>
}

export const logout = Template.bind({});
