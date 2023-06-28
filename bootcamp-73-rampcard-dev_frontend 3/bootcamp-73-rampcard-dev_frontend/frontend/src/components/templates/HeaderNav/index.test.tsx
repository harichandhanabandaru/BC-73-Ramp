import { fireEvent, render, screen } from "@testing-library/react";
import HeaderNav from ".";
import React from "react";

describe("HeaderNav Component", () => {
  it("should render Header Nav", () => {
    render(<HeaderNav />);
    expect(screen.getByTestId("header-nav")).toBeInTheDocument();
  });
  it("should render Header Nav", () => {
    render(<HeaderNav />);
    const icon = screen.getByAltText("profile");
    fireEvent.click(icon);
    const button = screen.getByText("Create Ramp Category");
    fireEvent.click(button);
    const button2 = screen.getByText("Cancel");
    fireEvent.click(button2);
    expect(button).toBeInTheDocument();
  });
  it("should handle ramp card function ", () => {
    render(<HeaderNav />);
    const icon = screen.getByAltText("profile");
    fireEvent.click(icon);
    const button = screen.getByText("Create Ramp Category");
    fireEvent.click(button);
    const button2 = screen.getByText("Cancel");
    fireEvent.click(button2);
    expect(button).toBeInTheDocument();
  });

  it("handleChange function called ", () => {
    render(<HeaderNav />);
    const icon = screen.getByText("Vendors");
    fireEvent.click(icon);
  });
  it("handleChange function called ", () => {
    render(<HeaderNav />);
    const icon = screen.getByText("Reimbursement");
    fireEvent.click(icon);
    fireEvent.click(icon);
    fireEvent.click(icon);
  });
  it("New Bill button clicked ", () => {
    render(<HeaderNav />);
    const icon = screen.getByText("Reimbursement");
    fireEvent.click(icon);
    const icon1 = screen.getByText("New bill");
    fireEvent.click(icon1);
  });
});
