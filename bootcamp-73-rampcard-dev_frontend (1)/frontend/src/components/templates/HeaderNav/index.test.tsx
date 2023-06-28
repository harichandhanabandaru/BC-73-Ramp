import { render, screen } from "@testing-library/react";
import HeaderNav from ".";
import React from "react";

describe("HeaderNav Component", () => {
  it("should render Header Nav", () => {
    render(<HeaderNav />);
    expect(screen.getByTestId("header-nav")).toBeInTheDocument();
  });
});
