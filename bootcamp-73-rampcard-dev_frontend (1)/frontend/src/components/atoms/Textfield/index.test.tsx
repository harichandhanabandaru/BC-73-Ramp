/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TextField } from ".";
import "@testing-library/jest-dom";
import { NAME, TEXT } from "../../../utils/constants";

describe("TextField", () => {
  test("renders the label correctly", () => {
    render(
      <TextField label={NAME} type={TEXT} variant={"outlined"} size={"small"} />
    );
    expect(screen.getByLabelText(NAME)).toBeInTheDocument();
  });
  test("renders the placeholder correctly", () => {
    render(
      <TextField
        placeholder={NAME}
        type={TEXT}
        variant={"outlined"}
        size={"small"}
      />
    );
    expect(
      screen.getByPlaceholderText("orders@supertodo.me")
    ).toBeInTheDocument();
  });
  test("handles change event", () => {
    const handleChange = jest.fn((event) => {
      return {
        target: {
          value: event.target.value,
        },
      };
    });
    const { getByRole } = render(
      <TextField
        handleChange={handleChange}
        type="text"
        placeholder={NAME}
        variant={"outlined"}
      />
    );
    const input = screen.getByRole("textbox");
    const value = "test";
    fireEvent.change(input, { target: { value: value } });
    expect(handleChange).toHaveBeenCalled();
    const call = handleChange.mock.calls[0][0];
    expect(call.target.value).toEqual(value);
  });
  test("handle change event", () => {
    const { getByTestId } = render(<TextField variant={"outlined"} />);
    const input = getByTestId("text-field");
    expect(input).toBeInTheDocument();
  });
});
