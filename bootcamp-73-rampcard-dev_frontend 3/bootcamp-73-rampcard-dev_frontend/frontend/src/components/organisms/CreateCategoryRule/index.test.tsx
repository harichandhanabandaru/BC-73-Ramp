import React from "react";
import { render, screen } from "@testing-library/react";
import CreateCategoryRule from ".";

describe("CreateCategoryRule component", () => {
  const props = {
    open: true,
    handleCancelClick: jest.fn(),
    handleCreateClick: jest.fn(),
    setOpenCategoryRule: jest.fn(),
  };

  it("should render the component", () => {
    render(<CreateCategoryRule {...props} />);
    const category = screen.getByTestId("CreateCategory");
    expect(category).toBeInTheDocument();
  });

  it("should contain two buttons", () => {
    render(<CreateCategoryRule {...props} />);
    const button = screen.getByText("Create rule");
    expect(button).toBeInTheDocument();
  });
});
