import React from "react";
import "jest";
import { fireEvent, render, screen } from "@testing-library/react";
import Icon from ".";
import Profile from "/public/assets/icons/profile.svg";

it("renders Icon", () => {
  render(<Icon src={Profile} height="32px" width="32px" alt={"icon"} />);
  const image = screen.getByTestId("icon");
  expect(image).toBeDefined();
});

it("renders Icon with onclick function", async () => {
  const fn = jest.fn();
  render(<Icon alt="profile" src={Profile} onClick={fn} />);
  const ReactElement = await screen.getByTestId("icon");
  fireEvent.click(ReactElement);
  expect(ReactElement).toBeInTheDocument();
});
