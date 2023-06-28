import { StoryFn } from "@storybook/react";
import SignIn from ".";
import React from "react";
import { BrowserRouter } from "react-router-dom";

export default{
    title: 'organisms/SignIn',
    component: SignIn
}

const Template: StoryFn<typeof SignIn> = (args) => {
    return <BrowserRouter><SignIn {...args}/></BrowserRouter>
}

export const signIn = Template.bind({});
signIn.args={
    buttonText: "Continue",
    or: "OR",
    width: '20.875rem',
}