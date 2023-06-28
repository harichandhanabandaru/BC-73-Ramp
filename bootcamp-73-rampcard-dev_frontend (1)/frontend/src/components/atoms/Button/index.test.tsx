import React from "react";
import {fireEvent, render, screen} from '@testing-library/react'
import Button from ".";

describe("Button Component", ()=> {
    it('should render the button atom', ()=> {
        render(<Button children = "button"/>);
        const button = screen.getByTestId("Button");
        expect(button).toBeInTheDocument();
    })

    it('should trigger onClick event', ()=> {
        const onClick =  jest.fn();
        render(<Button children = "button" onClick={onClick}/>);
        const button = screen.getByTestId("Button");
        fireEvent.click(button);
        expect(onClick).toBeCalledTimes(1);
        
    })
})