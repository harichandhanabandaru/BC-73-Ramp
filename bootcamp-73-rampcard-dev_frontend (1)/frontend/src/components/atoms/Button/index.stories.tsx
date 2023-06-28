import React from "react";
import { StoryFn } from "@storybook/react";
import Button from ".";

export default {
    title: 'atoms/Button',
    component: Button
};

const Template : StoryFn<typeof  Button> = (args: any) => {
    return <Button {...args}/>;
}

export const primary = Template.bind({});
primary.args = {
    color: "primary",
    variant: "contained",
    children: "click me",
};

// export const small = Template.bind({});
// small.args={
//     color: "primary",
//     variant: "contained",
//     children: "click me",
//     size: "small"
// }

// export const large = Template.bind({});
// large.args={
//     color: "primary",
//     variant: "contained",
//     children: "click me",
//     size: "large"
// }

export const disabled = Template.bind({});
disabled.args={
    color: "primary",
    variant: "contained",
    children: "click me",
    disabled: true
}


// export const custom = Template.bind({});
// custom.args = {
//   color: "primary",
//   variant: "contained",
//   children: "click me",
//   sx: { height: "42px", width: "100%" }
// };


