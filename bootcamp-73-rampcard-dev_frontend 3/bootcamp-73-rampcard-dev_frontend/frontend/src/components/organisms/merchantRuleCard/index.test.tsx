import React from "react";
import { render, screen } from "@testing-library/react";
import MerchantRuleCard from ".";
import { QUICK_BOOKS_CATEGORY } from "../../../utils/constants";

describe("MerchantRuleCard", () => {
  const props = {
    open: true,
    title: "Create merchant rule",
    transaction: "Lyft",
    unsyncedTrans: 42,
    options: QUICK_BOOKS_CATEGORY,
    selectedOption: "",
    onDropDownChange: jest.fn(),
    handleCancelClick: jest.fn(),
    handleCreateClick: jest.fn(),
  };

  it("should render the MerchantRuleCard component", () => {
    render(<MerchantRuleCard {...props} />);
    const card = screen.getByTestId("RuleCard");
    expect(card).toBeInTheDocument();
  });

  it("should render dropdown component", () => {
    render(<MerchantRuleCard {...props} />);
    const select = screen.getByTestId("Select");
    expect(select).toBeInTheDocument();
  });
});
