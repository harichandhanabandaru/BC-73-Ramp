import { fireEvent, render, screen } from "@testing-library/react";
import NewBillCard from ".";
import React from "react";

describe("Review Bill Card", () => {
  const handleChange = jest.fn();
  beforeEach(() => {
    render(
      <NewBillCard
        price={"25005"}
        name={"Julie"}
        senderName={"Harry"}
        account={"2533,15,23.06"}
        handleBill={handleChange}
        subtitle={"No previous payment to this vendor."}
        billable={"Billable"}
        altmessage={"image"}
        src={"imagesourece"}
        crosssrc={"imagesource"}
      />
    );
  });
  it("should render review bill correctly", () => {
    expect(screen.getByTestId("bill")).toBeInTheDocument();
  });

  it("should render typography", () => {
    const typo = screen.getByText("New bill");
    expect(typo).toBeInTheDocument();
  });

  it("should render Button with onClick", () => {
    const button = screen.getByRole("button", { name: "Review" });
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});
