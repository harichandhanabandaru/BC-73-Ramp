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
        crosssrc={""}
        handleInvoiceDate={jest.fn()}
        handleBillDueDate={jest.fn()}
        handleMemo={jest.fn()}
        handleQuickbookDescription={jest.fn()}
        handleCategory={jest.fn()}
        category={[]}
        handleClass={jest.fn()}
        classValue={[]}
        handleCustomJob={jest.fn()}
        customJob={[]}
        handlePaymentType={jest.fn()}
        paymentType={""}
        amount={[]}
        handleAmountChange={jest.fn()}
        invoiceNumber={""}
        handleInvoiceNumberChange={jest.fn()}
        contact={""}
        handleContactChange={jest.fn()}
        location={""}
        handleLocationChange={jest.fn()}
        invoiceDate={""}
        billDueDate={""}
        setName={jest.fn()}
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
