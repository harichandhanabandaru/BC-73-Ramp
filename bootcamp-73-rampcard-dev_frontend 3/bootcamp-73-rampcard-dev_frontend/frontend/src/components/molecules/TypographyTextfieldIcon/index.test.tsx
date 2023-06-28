import { render, screen } from "@testing-library/react";
import React from "react";
import TypographyTextfieldIcon from ".";

describe("TypographyTextfieldIcon", () => {
  const props = {
    value: "Test Value",
    alt: "Test Icon",
    src: "testicon.png",
    placeholder: "Test Placeholder",
    padding: "10px",
  };

  const remove = jest.fn();
  it("renders the text correctly", () => {
    render(
      <TypographyTextfieldIcon
        heading={"Test Value"}
        text={"Test Value"}
        onRemove={remove}
        {...props}
      />
    );
    const text = screen.getByText("Test Value");
    expect(text).toBeInTheDocument();
  });

  it("renders the placeholder correctly", () => {
    render(
      <TypographyTextfieldIcon
        heading={""}
        text={""}
        onRemove={remove}
        {...props}
      />
    );
    const placeholder = screen.getByPlaceholderText("Test Placeholder");
    expect(placeholder).toBeInTheDocument();
  });

  it("renders the icon correctly", () => {
    render(
      <TypographyTextfieldIcon
        heading={""}
        text={""}
        onRemove={remove}
        {...props}
      />
    );
    const icon = screen.getByAltText("Test Icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("src")).toBe("testicon.png");
  });
});
