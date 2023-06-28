import React from "react";
import { StoryFn } from "@storybook/react";
import MerchantRuleCard from ".";
import { QUICK_BOOKS_CATEGORY } from "../../../utils/constants";

export default {
  title: "organisms/MerchantRuleCard",
  component: MerchantRuleCard,
};

const Template: StoryFn<typeof MerchantRuleCard> = (args: any) => {
  return <MerchantRuleCard {...args} />;
};

export const RuleCard = Template.bind({});
RuleCard.args = {
  open: true,
  title: "Create merchant rule",
  transaction: "Lyft",
  unsyncedTrans: 42,
  onClose: () => {},
  options: QUICK_BOOKS_CATEGORY,
  selectedOption: "",
};
