import { screen, render, fireEvent } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { SIGN_IN } from "../../utils/constants";
import SignUpPage from ".";
import Anchor from "../../components/atoms/Anchor";

describe("SignIn page", () => {
  it("should render the component correctly", () => {
    render(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>
    );
    const page = screen.getByTestId("SignUpPage");
    expect(page).toBeInTheDocument();
  });

  it("Button Sign in clicked", () => {
    render(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>
    );
    const button = screen.getByTestId("Anchor");
    fireEvent.click(button);
  });

  it("should have an anchor tag", () => {
    render(<Anchor text={SIGN_IN} />);
    const anchor = screen.getByTestId("Anchor");
    expect(anchor).toBeInTheDocument();
  });

  it("testing", () => {
    render(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>
    );
    const page = screen.getByTestId("anchorGrid");
    expect(page).toBeInTheDocument();
  });
});
