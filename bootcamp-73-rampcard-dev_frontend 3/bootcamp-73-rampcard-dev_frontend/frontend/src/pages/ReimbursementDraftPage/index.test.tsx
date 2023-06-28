import { render, screen } from "@testing-library/react";
import React from "react";
import ReimbursementDraftPage from "./index";

describe("ReimbursementDraftPage", () => {
  it('should render the "New bill" button', () => {
    render(<ReimbursementDraftPage handleOpenNewBill={jest.fn()} />);
    const button = screen.getByRole("button", { name: "New bill" });
    expect(button).toBeInTheDocument();
  });
  it("should Draft text to be in the document", () => {
    render(<ReimbursementDraftPage handleOpenNewBill={jest.fn()} />);
    const button = screen.getByText("Drafts");
    expect(button).toBeInTheDocument();
  });
});
