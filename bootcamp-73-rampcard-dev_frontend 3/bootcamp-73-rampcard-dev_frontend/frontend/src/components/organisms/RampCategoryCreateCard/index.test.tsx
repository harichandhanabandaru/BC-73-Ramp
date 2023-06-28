import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import RampCategoryCreateCard from ".";

describe("RampCategoryCreateCard", () => {
  const props = {
    cancelbtntext: "Cancel",
    submitbtntext: "Submit",
    addbtntext: "Add new",
    open: true,
    setOpen: () => {},
    handleOpen: () => {},
  };

  it("should render the component", () => {
    render(<RampCategoryCreateCard {...props} />);
    const popup = screen.getByText("Cancel");
    expect(popup).toBeInTheDocument();
    fireEvent.click(popup);
  });

  it("submit button click", () => {
    render(<RampCategoryCreateCard {...props} />);
    const popup = screen.getByText("Submit");
    fireEvent.click(popup);
  });

  it("submit button clicked open snack bar ", () => {
    render(<RampCategoryCreateCard {...props} />);
    const inputField = screen.getAllByPlaceholderText("Enter Ramp category")[0];
    fireEvent.change(inputField, { target: { value: "new value" } });
    expect(inputField).toHaveValue("new value");
    const popup = screen.getByText("Submit");
    fireEvent.click(popup);
    const snackBar = screen.getByText("Rule created successfully!");
    expect(snackBar).toBeInTheDocument();
  });
});
