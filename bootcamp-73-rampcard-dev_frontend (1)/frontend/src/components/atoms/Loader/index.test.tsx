import React from "react";
import { render, screen } from "@testing-library/react";
import Loader from ".";
import loaderImg from "../../../../public/assets/icons/loaderIcon.svg";

describe("Loader component", () => {
  const props = {
    src: loaderImg,
    alt: "loader",
  };

  it("should render the component", () => {
    render(<Loader {...props} />);
    const loader = screen.getByTestId("Loader");
    expect(loader).toBeInTheDocument();
  });

  it("should contain image in component", () => {
    render(<Loader {...props} />);
    const loaderImg = screen.getByTestId("LoaderImg");
    expect(loaderImg).toBeInTheDocument();
  });
});
