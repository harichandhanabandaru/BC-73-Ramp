import React from "react";
import { render, screen } from "@testing-library/react";
import ReportingCard from ".";

describe("ReportingCard", () => {
  const props = {
    text: "Reporting Card Text",
    alt: "Reporting Card Icon",
    src: "/path/to/icon.png",
    linktext: "Reporting Card Link",
  };

  it("renders the text prop as a subtitle2 Typography component", () => {
    render(<ReportingCard content={""} content1={""} price={""} {...props} />);
    expect(screen.getByText(props.text)).toBeInTheDocument();
    expect(screen.getByText(props.text)).toHaveClass("MuiTypography-subtitle2");
  });

  it("renders the icon with the correct alt and src attributes", () => {
    render(<ReportingCard content={""} content1={""} price={""} {...props} />);
    const icon = screen.getByRole("img");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("alt", props.alt);
    expect(icon).toHaveAttribute("src", props.src);
  });
});
