import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AccountingPage from ".";

describe("AccountingPage component", () => {
  it("renders Ramp cards title", () => {
    render(<AccountingPage />);
    expect(screen.getByText("Ramp cards")).toBeInTheDocument();
  });

  it("filters table rows by transaction name", () => {
    render(<AccountingPage />);
    const input = screen.getByRole("textbox");
    userEvent.type(input, "coffee");
    expect(screen.getByText("Coffee Shop")).toBeInTheDocument();
    expect(screen.queryByText("Office Supplies")).toBeNull();
  });
});
