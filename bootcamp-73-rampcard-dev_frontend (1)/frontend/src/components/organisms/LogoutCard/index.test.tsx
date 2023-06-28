import { fireEvent, render, screen } from "@testing-library/react"
import Logout from "."
import React from "react"

describe("Logout card component",()=>{
    it("should render logout card",()=>{
        render(<Logout/>)
        const clickHere = screen.getByText("here");
        fireEvent.click(clickHere);
        expect(screen.getByTestId("logout")).toBeInTheDocument();
        expect(clickHere).toBeInTheDocument();
    })
})