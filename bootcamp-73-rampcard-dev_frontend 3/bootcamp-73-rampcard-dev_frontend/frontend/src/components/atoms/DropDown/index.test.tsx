import React from "react";
import "jest";
import { render, screen } from "@testing-library/react";
import DropDown from ".";

describe("Dropdown Component", () => {
  const options = [
    { label: "Expense", value: "Expense" },
    { label: "Travel", value: "Travel" },
    { label: "Travel meals", value: "Travel meals" },
    { label: "Hotels", value: "Hotels" },
  ];

  it("should display dropdown component", () => {
    render(
      <DropDown
        options={options}
        value={""}
        placeHolder={"Choose One"}
        styles={{}}
      />
    );
    const select = screen.getByTestId("Select");
    expect(select).toBeInTheDocument();
  });
});
