import { screen, render, fireEvent } from "@testing-library/react";
import React from "react";
import NewBill from ".";

describe("NewBill Page", () => {
  it("should render the component", () => {
    render(<NewBill open={true} onClose={() => {}} />);
    const page = screen.getByText("Get started");
    expect(page).toBeInTheDocument();
    const closeBtn = screen.getByAltText("cross");
    expect(closeBtn).toBeInTheDocument();
  });

  it("handle Bill Employee number in the component", () => {
    render(<NewBill open={true} onClose={() => {}} />);

    const skipPrefilling = screen.getByRole("button");
    fireEvent.click(skipPrefilling);
    const parentElement = screen.getByTestId("bill");
    const inputField = parentElement.querySelector("input[type='text']");
    fireEvent.change(inputField, { target: { value: "999999999" } });
    expect(inputField).toHaveValue("999999999");

    const page = screen.getByText("Get started");
    expect(page).toBeInTheDocument();
    const closeBtn = screen.getByAltText("cross");
    expect(closeBtn).toBeInTheDocument();
  });

  it("handle Bill Invoice number in the component", () => {
    render(<NewBill open={true} onClose={() => {}} />);

    const skipPrefilling = screen.getByRole("button");
    fireEvent.click(skipPrefilling);
    const parentElement = screen.getByTestId("bill");
    const inputField = parentElement.querySelectorAll("input[type='text']")[1];
    fireEvent.change(inputField, { target: { value: "999999999" } });
    expect(inputField).toHaveValue("999999999");
  });

  it("handle Bill Invoice date in the component", () => {
    render(<NewBill open={true} onClose={() => {}} />);

    const skipPrefilling = screen.getByRole("button");
    fireEvent.click(skipPrefilling);
    const parentElement = screen.getByTestId("bill");
    const inputField = parentElement.querySelectorAll("input[type='text']")[2];
    fireEvent.change(inputField, { target: { value: "05/05/2023" } });
    expect(inputField).toHaveValue("05/05/2023");
  });

  it("handle Bill Due date in the component", () => {
    render(<NewBill open={true} onClose={() => {}} />);

    const skipPrefilling = screen.getByRole("button");
    fireEvent.click(skipPrefilling);
    const parentElement = screen.getByTestId("bill");
    const inputField = parentElement.querySelectorAll("input[type='text']")[3];
    fireEvent.change(inputField, { target: { value: "05/05/2023" } });
    expect(inputField).toHaveValue("05/05/2023");
  });

  it("handle Quick book location in the component", () => {
    render(<NewBill open={true} onClose={() => {}} />);

    const skipPrefilling = screen.getByRole("button");
    fireEvent.click(skipPrefilling);
    const parentElement = screen.getByTestId("bill");
    const inputField = parentElement.querySelectorAll("input[type='text']")[4];
    fireEvent.change(inputField, { target: { value: "Hyderabad" } });
    expect(inputField).toHaveValue("Hyderabad");
  });

  it("handle Memo in the component", () => {
    render(<NewBill open={true} onClose={() => {}} />);

    const skipPrefilling = screen.getByRole("button");
    fireEvent.click(skipPrefilling);
    const parentElement = screen.getByTestId("bill");
    const inputField = parentElement.querySelectorAll("input[type='text']")[5];
    fireEvent.change(inputField, { target: { value: "memo" } });
    expect(inputField).toHaveValue("memo");
  });
});
