import { StoryFn } from "@storybook/react";
import NewBillCard from ".";
import React from "react";
import Invoice from "../../../../public/assets/icons/bank.svg";
import CrossSymbal from "../../../../public/assets/icons/crosssymbal.svg";

export default {
  title: "organisms/NewBillCard",
  component: NewBillCard,
};

const Template: StoryFn<typeof NewBillCard> = (args) => {
  return <NewBillCard {...args} />;
};

export const newBillCard = Template.bind({});
newBillCard.args = {
  name: "Julie Mendez",
  subtitle: "No previous payment to this vendor.",
  senderName: "James Smith",
  account: "477,776,213.09",
  altmessage: "image",
  src: Invoice,
  billable: "Billable",
  crosssrc: CrossSymbal,
  price: "$2500",
};
