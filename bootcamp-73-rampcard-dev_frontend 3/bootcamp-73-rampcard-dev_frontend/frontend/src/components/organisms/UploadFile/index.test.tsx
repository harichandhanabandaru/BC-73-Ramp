import React from "react";
import { render, screen } from "@testing-library/react";
import UploadFile from ".";

describe("Upload File component", () => {
  const props = {
    height: "100%",
    width: "100%",
    files: {},
    pdfUrl: {},
    showLoader: false,
    handleDragOver: () => {},
    handleDrop: () => {},
    handleFileUpload: () => {},
  };

  it("should display the component", () => {
    render(<UploadFile {...props} />);
    const comp = screen.getByTestId("uploadFile");
    expect(comp).toBeInTheDocument();
  });
});
