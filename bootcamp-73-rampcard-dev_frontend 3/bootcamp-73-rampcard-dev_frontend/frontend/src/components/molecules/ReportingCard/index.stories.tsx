import { StoryFn } from "@storybook/react";
import React from "react";
import ReportingCard from ".";
import Amazon from "../../../../public/assets/icons/amazon.svg";
import { REPORTINGCARDPRICEDETAILS, REPORTINGCARDSUBTITLE } from "../../../utils/constants";

export default {
  title: "molecules/ReportingCard",
  component: ReportingCard,
};

const Template: StoryFn<typeof ReportingCard> = (args) => {
  return <ReportingCard {...args} />;
};

export const reportingcard = Template.bind({});

reportingcard.args = {
  text: "Partner reward found",
  alt: "AmazonIcon",
  src: Amazon,
  linktext: "Go to partner reward",
  content: REPORTINGCARDSUBTITLE[0],
  content1: REPORTINGCARDSUBTITLE[1],
  price: REPORTINGCARDPRICEDETAILS[1]
};
