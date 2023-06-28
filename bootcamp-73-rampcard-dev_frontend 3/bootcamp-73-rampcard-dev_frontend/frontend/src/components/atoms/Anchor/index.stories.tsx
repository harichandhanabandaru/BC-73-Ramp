import { StoryFn } from "@storybook/react";
import React from "react";
import Anchor from "./index";

export default{
    title: 'atoms/Anchor',
    component: Anchor
}

const Template: StoryFn<typeof Anchor> =(args) =>{
    return <Anchor {...args} />;
}

export const anchor1 = Template.bind({})
anchor1.args={
    text: "Forgot your password ?"
}

export const anchor2 = Template.bind({})
anchor2.args={
    text: "Sign up"
}
