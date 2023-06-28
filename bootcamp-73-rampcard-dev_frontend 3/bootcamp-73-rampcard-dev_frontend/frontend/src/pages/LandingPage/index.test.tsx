import { screen, render, fireEvent } from "@testing-library/react";
import LandingPage from ".";
import React from "react";

describe("Landing Page", () => {
  beforeEach(() => {
    render(<LandingPage />);
  });
  it("should render the component correctly", () => {
    const page = screen.getByTestId("page");
    expect(page).toBeInTheDocument();
  });
});
