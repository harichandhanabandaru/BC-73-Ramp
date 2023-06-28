import { StoryFn } from "@storybook/react";
import SignUp from ".";
import React from "react";
import { BrowserRouter } from "react-router-dom";

export default{
    title: 'organisms/SignUp',
    component: SignUp
}

const Template: StoryFn<typeof SignUp> = (args) =>{
    return <BrowserRouter><SignUp {...args} /></BrowserRouter>
}

export const signUp = Template.bind({});
signUp.args={
    width: '100%'
}
