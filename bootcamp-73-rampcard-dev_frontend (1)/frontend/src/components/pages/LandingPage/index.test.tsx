import { screen, render, fireEvent } from "@testing-library/react"
import LandingPage from "."
import React from "react"

describe('Landing Page',()=>{
    beforeEach(()=>{
        render(<LandingPage/>)
    })
    it('should render the component correctly',()=>{
        const page = screen.getByTestId("page");
        expect(page).toBeInTheDocument();
    })

    it('should render onClick to popup',()=>{
        const icon = screen.getByTestId("long-button");
        fireEvent.click(icon);
        const menu = screen.getByTestId("menu-click");
        fireEvent.click(menu);
        expect(menu).toHaveTextContent("Create Ramp Category");
        const button = screen.getByRole("button", {name: "Cancel"});
        fireEvent.click(button);
      })
})