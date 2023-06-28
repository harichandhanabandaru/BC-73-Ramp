import React from "react";
import { render, screen } from "@testing-library/react";
import SkipPrefillingCard from ".";

describe("SkipPrefillingCard", () => {
  const props = {
    title: "Test Title",
    icon: "/test-icon.png",
    iconAlt: "Test Icon",
  };

  it("renders title, icon and button", () => {
    render(<SkipPrefillingCard {...props} />);
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByAltText(props.iconAlt)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Skip Prefilling" })
    ).toBeInTheDocument();
  });
});
