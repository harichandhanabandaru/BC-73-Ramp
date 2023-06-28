import React from "react";
import { render, screen } from "@testing-library/react";
import IconTypography from ".";
import theme from "../../../theme";

describe("IconTypography Component", () => {
  it("should render the iconTypography molecule", () => {
    render(
      <IconTypography
        content={"Add new"}
        color={theme.palette.primary[500]}
        onClick={() => {}}
        icon={""}
      />
    );
    const iconTypography = screen.getByTestId("IconTypography");
    expect(iconTypography).toBeInTheDocument();
  });

  it("Should have icon atom", () => {
    render(
      <IconTypography
        content={"Add new"}
        color={theme.palette.primary[500]}
        onClick={() => {}}
        icon={""}
      />
    );
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
  });

  it("Should have typography atom", () => {
    render(
      <IconTypography
        content={"Add new"}
        color={theme.palette.primary[500]}
        onClick={() => {}}
        icon={""}
      />
    );
    const typography = screen.getByTestId("Typography");
    expect(typography).toBeInTheDocument();
  });
});
