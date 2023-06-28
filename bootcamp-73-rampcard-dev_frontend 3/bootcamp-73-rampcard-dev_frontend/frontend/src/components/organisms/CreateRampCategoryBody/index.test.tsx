import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CreateRampCategoryBody from ".";

describe("CreateRampCategoryBody component", () => {
  const props = {
    setBool: () => {},
  };

  it("should CreateRampCategoryBody render the component", () => {
    render(<CreateRampCategoryBody {...props} />);
    const inputElement = screen.getByTestId("Field 1");
    expect(inputElement).toBeInTheDocument();
  });

  it("input field updates value correctly", () => {
    render(<CreateRampCategoryBody {...props} />);
    const inputField = screen.getAllByPlaceholderText("Enter Ramp category")[0];

    fireEvent.change(inputField, { target: { value: "new value" } });

    expect(inputField).toHaveValue("new value");
  });
});
