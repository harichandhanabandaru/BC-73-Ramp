import { StoryFn } from "@storybook/react";
import ReviewBill from ".";
import React from "react";

export default{
    title: 'organisms/ReviewBillCard',
    component: ReviewBill
}

const Template: StoryFn<typeof ReviewBill> = (args) =>{
    return <ReviewBill {...args}/>
}

export const reviewBill = Template.bind({});
reviewBill.args={
    price: "2864.5",
    name: "Julie Mendez",
    date: "August 31 2022",
    senderName: "James Smith",
    account: "477,776,213.09"
}
