import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Checkbox from ".";

describe("Checkbox tests", () => {
  it("renders checkbox component", () => {
    render(<Checkbox />);
    const checkbox = screen
      .getByTestId(`checkbox`)
      .querySelector('input[type="checkbox"]')!;
    fireEvent.click(checkbox);
    expect(checkbox).toHaveProperty("checked", true);
    fireEvent.click(checkbox);
    expect(checkbox).toHaveProperty("checked", false);
  });
});
