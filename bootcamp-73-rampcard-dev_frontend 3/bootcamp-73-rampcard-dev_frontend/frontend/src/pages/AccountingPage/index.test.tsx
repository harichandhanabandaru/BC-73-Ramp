import React from "react";
import { render, screen } from "@testing-library/react";
import AccountingPage from ".";

describe("AccountingPage component", () => {
  it("renders Ramp cards title", () => {
    render(<AccountingPage />);
    expect(screen.getByText("Ramp cards")).toBeInTheDocument();
  });

  it("Table exists check", () => {
    render(<AccountingPage />);
    expect(screen.getByText("MERCHANTNAME")).toBeInTheDocument();
  });
});
