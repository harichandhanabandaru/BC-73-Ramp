import React from "react";
import { render, screen } from "@testing-library/react";
import CategoryRule from ".";
import { QUICK_BOOKS_CATEGORY } from "../../../utils/constants";

describe("CategoryRule component", () => {
  const props = {
    textValue: "",
    textFieldPlaceholder: "Airlines",
    dropDownPlaceholder: "Quickbooks category",
    options: QUICK_BOOKS_CATEGORY,
    dropDownValue: "Travel",
    onChange: jest.fn(),
  };

  it("should render the component", () => {
    render(<CategoryRule {...props} />);
    const rule = screen.getByTestId("CategoryRule");
    expect(rule).toBeInTheDocument();
  });

  it("should have dropdown", () => {
    render(<CategoryRule {...props} />);
    expect(screen.getByTestId("Select")).toBeInTheDocument();
  });
});
