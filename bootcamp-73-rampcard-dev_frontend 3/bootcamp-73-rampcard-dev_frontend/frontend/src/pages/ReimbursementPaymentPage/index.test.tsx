import { render, screen } from "@testing-library/react";
import React from "react";
import ReimbursementPaymentPage from "./index";

describe("ReimbursementPaymentPage", () => {
  it('should render the "New bill" button', () => {
    render(<ReimbursementPaymentPage handleOpenNewBill={jest.fn()} />);
    const button = screen.getByRole("button", { name: "New bill" });
    expect(button).toBeInTheDocument();
  });
  it("should payments text to be in the document", () => {
    render(<ReimbursementPaymentPage handleOpenNewBill={jest.fn()} />);
    const button = screen.getByText("Payments");
    expect(button).toBeInTheDocument();
  });
});
