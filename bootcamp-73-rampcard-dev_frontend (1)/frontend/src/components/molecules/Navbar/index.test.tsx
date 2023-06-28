import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from ".";
import Menu from "../../atoms/Menu";
import { MENU } from "../../../utils/constants";

describe("Navbar", () => {
  const props = {
    avatar: "/path/to/avatar.png",
    text: "Sign In",
    alt: "Avatar",
  };

  it("renders with correct text and avatar", () => {
    render(<Navbar icon={"icon"} backgroundColor={"white"} color={"white"} {...props} />);
    const chip = screen.getByText(props.text);
    expect(chip).toBeInTheDocument();
  });

  it("renders with default props", () => {
    render(<Navbar icon={""} backgroundColor={""} color={""} {...props} />);
    const chip = screen.queryByText("Default Text");
    expect(chip).not.toBeInTheDocument();
  });

  it("renders with default props", () => {
    render(<Navbar icon={""} backgroundColor={""} color={""} {...props} />);
    const icon = screen.getByTestId("long-button");
    fireEvent.click(icon);
    const close = screen.getByTestId("menu-item");
    fireEvent.click(close);
    expect(icon).toBeInTheDocument();
  });
});
