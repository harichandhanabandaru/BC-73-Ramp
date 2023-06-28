import { fireEvent, render, screen } from "@testing-library/react"
import ReviewBill from "."
import React from "react"

describe('Review Bill Card',()=>{
    const handleChange = jest.fn();
    beforeEach(()=>{
        render(<ReviewBill price={"25005"} name={"Julie"} date={"April 15 2023"} senderName={"Harry"} account={"2533,15,23.06"} handleBill={handleChange}/>)
    })
    it('should render review bill correctly',()=>{
        expect(screen.getByTestId("bill")).toBeInTheDocument();
    })

    it('should render typography',()=>{
        const typo = screen.getByText("New bill");
        expect(typo).toBeInTheDocument();
    })

    it('should render Button with onClick',()=>{
        const button = screen.getByRole("button",{name: "Create bill"});
        fireEvent.click(button);
        expect(button).toBeInTheDocument();
    })
})
