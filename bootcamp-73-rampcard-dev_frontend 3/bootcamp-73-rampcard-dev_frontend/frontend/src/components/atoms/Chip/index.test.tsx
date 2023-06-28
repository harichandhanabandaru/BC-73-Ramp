import React from "react"
import ChipSet from "."
import {render, screen} from '@testing-library/react'

describe('Chip Component',()=>{
    it('should render chip',()=>{
        render(<ChipSet content="Test" icon={"icon"} />);
        const chip = screen.getByTestId("ChipSet");
        expect(chip).toBeInTheDocument();
    })
})