import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import ReimburseDataGridHeader from ".";

describe("ReimburseDataGridHeader component", () => {
  it("should render the search bar", () => {
    render(<ReimburseDataGridHeader />);
    const searchInput = screen.getByPlaceholderText("Search cards");
    expect(searchInput).toBeInTheDocument();
  });

  it("should render the filter dropdown", () => {
    render(<ReimburseDataGridHeader />);
    const filterDropdown = screen.getByPlaceholderText("All cards");
    expect(filterDropdown).toBeInTheDocument();
  });

  it("should call the onClick function when sync button is clicked", () => {
    const onClickMock = jest.fn();
    render(<ReimburseDataGridHeader />);
    const syncButton = screen.getByText("Sync");
    fireEvent.click(syncButton);
    expect(syncButton).toBeInTheDocument();
  });
});
