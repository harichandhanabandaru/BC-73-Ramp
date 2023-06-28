import React from "react";
import Typography from ".";
import {render, screen} from '@testing-library/react'

describe("Typography Component", ()=> {
    it('should render the typography atom', ()=> {
        render(<Typography children = "Body 1" variant= "body1"/>);
        const typo = screen.getByTestId("Typography");
        expect(typo).toBeInTheDocument();
    })

    it('should render the text', ()=> {
        render(<Typography children = "Body 1" variant= "body1"/>);
        const typo = screen.getByTestId("Typography");
        expect(typo).toHaveTextContent("Body 1");
    })
})