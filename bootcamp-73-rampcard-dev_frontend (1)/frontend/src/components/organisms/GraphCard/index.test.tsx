import React from "react";
import { render, screen } from "@testing-library/react";
import Graph from ".";

describe("Graph component", ()=>{
    it("should render the graph component", ()=>{
        render(<Graph/>);
        const icon = screen.getByTestId('graph');
        expect(icon).toBeInTheDocument();
    })
})