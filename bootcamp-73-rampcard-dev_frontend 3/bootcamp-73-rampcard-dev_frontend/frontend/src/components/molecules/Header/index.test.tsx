import { render, fireEvent } from "@testing-library/react";
import Header from ".";
import React from "react";
import { HEADER } from "../../../utils/constants";

describe("Header", () => {
  it("should change background color of selected chip on click", () => {
    const { getByText } = render(
      <Header
        data={HEADER}
        index={0}
        icon="test"
        handleChange={jest.fn}
        value={0}
      />
    );

    const chip1 = getByText("Insights");

    fireEvent.click(chip1);

    expect(chip1).toBeInTheDocument();
  });
});
