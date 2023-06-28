import { render } from "@testing-library/react";
import React from "react";
import TypographyAnchor from ".";

describe("TypographyAnchor", () => {
  const props = {
    text: "Sign up",
    value: "Don’t have an account?",
  };

  it("should render the provided text", () => {
    const { getByText } = render(<TypographyAnchor {...props} />);
    expect(getByText(props.text)).toBeInTheDocument();
  });

  it("should render the provided value as a link", () => {
    const { getByRole } = render(<TypographyAnchor {...props} />);
    const linkElement = getByRole("link");
    expect(linkElement).toBeInTheDocument();
  });

  it("should render the value with the body2 typography variant", () => {
    const { getByText } = render(<TypographyAnchor {...props} />);
    expect(getByText(props.value)).toHaveClass("MuiTypography-body2");
  });
});
