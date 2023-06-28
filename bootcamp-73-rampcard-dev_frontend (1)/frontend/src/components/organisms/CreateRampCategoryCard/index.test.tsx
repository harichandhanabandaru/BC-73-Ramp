import React from "react";
import {
  render,
  screen,
  fireEvent,
  getByAltText,
  getByTestId,
} from "@testing-library/react";
import CreateRampCategoryCard, { Props } from ".";

describe("CreateRampCategoryCard", () => {
  const defaultProps: Props = {
    cancelbtntext: "Cancel",
    submitbtntext: "Submit",
    addbtntext: "Add",
    open: true,
    setOpen: jest.fn(),
    handleOpen: jest.fn(),
  };

  const handleOpenSnackbar = jest.fn();


  it("renders the component with the correct text and buttons", () => {
    render(<CreateRampCategoryCard {...defaultProps} />);
    expect(screen.getByText(defaultProps.cancelbtntext)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.submitbtntext)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.addbtntext)).toBeInTheDocument();
  });

  it("adds new input fields when 'Add' button is clicked", () => {
    render(<CreateRampCategoryCard {...defaultProps} />);
    const addBtn = screen.getByText(defaultProps.addbtntext);
    fireEvent.click(addBtn);
    expect(screen.getAllByRole("textbox")).toHaveLength(4);
  });

  it("closes the dialog when 'Cancel' button is clicked", () => {
    render(<CreateRampCategoryCard {...defaultProps} />);
    const cancelBtn = screen.getByText(defaultProps.cancelbtntext);
    fireEvent.click(cancelBtn);
    expect(
      screen.queryByText("Description of the card")
    ).not.toBeInTheDocument();
  });

  it("closes the dialog when 'Submit' button is clicked", () => {
    render(<CreateRampCategoryCard {...defaultProps} />);
    const submitBtn = screen.getByText(defaultProps.submitbtntext);
    fireEvent.click(submitBtn);
    expect(
      screen.queryByText("Description of the card")
    ).not.toBeInTheDocument();
  });

  it("should remove a field when the remove button is clicked", () => {
    render(<CreateRampCategoryCard {...defaultProps} />);
    const removeButton = screen.getAllByAltText("crossicon");

    fireEvent.click(removeButton[1]);
    expect(removeButton[1]).not.toBeInTheDocument();
  });

  it("should clear fields and close the form when the form is closed", () => {
    const { getByText } = render(<CreateRampCategoryCard {...defaultProps} />);
    const input1 = screen.getAllByPlaceholderText("Enter Ramp category");
    const closeButton = getByText("Cancel");

    fireEvent.change(input1[1], { target: { value: "New value for field 1" } });
    fireEvent.click(closeButton);

    expect(input1[1].textContent).toBe("");
    expect(input1[2].textContent).toBe("");
    expect(closeButton).toBeInTheDocument();
  });

  it("should render error if the text is invalid", () => {
    render(<CreateRampCategoryCard handleOpen={handleOpenSnackbar} {...defaultProps} />);
    const input = screen.getAllByPlaceholderText("Enter Ramp category");
    const button = screen.getByRole("button", {name: "Submit"});

    fireEvent.change(input[1],{target: {value: "123456"}});
    fireEvent.click(button);
    expect(defaultProps.handleOpen).not.toHaveBeenCalled();
    expect(handleOpenSnackbar).not.toHaveBeenCalled();
    // expect(alert).toHaveBeenCalledTimes(1);
  });
});
