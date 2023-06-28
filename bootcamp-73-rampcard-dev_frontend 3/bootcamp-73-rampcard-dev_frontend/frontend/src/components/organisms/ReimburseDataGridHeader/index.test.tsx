import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import ReimburseDataGridHeader from ".";

describe("ReimburseDataGridHeader component", () => {
  it("should render the search bar", () => {
    render(
      <ReimburseDataGridHeader setValue={() => {}} handleDelete={jest.fn()} />
    );
    const searchInput = screen.getByPlaceholderText("Search cards");
    expect(searchInput).toBeInTheDocument();
  });

  it("should render the filter dropdown", () => {
    render(
      <ReimburseDataGridHeader setValue={() => {}} handleDelete={jest.fn()} />
    );
    const filterDropdown = screen.getByPlaceholderText("All cards");
    expect(filterDropdown).toBeInTheDocument();
  });
});
