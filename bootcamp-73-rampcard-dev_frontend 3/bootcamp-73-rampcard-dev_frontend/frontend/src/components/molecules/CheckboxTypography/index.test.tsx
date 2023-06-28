import React from "react"
import CheckboxComponent from "../../atoms/Checkbox"
import { render, screen } from "@testing-library/react"
import Typography from "../../atoms/Typography"
import CheckboxTypography from "."

describe('Checkbox Typography',()=>{
    it('should render checkbox',()=>{
        render(<CheckboxComponent/>)
        expect(screen.getByTestId('checkbox')).toBeInTheDocument();
    })
    it('should render Typography',()=>{
        render(<Typography/>)
        expect(screen.getByTestId('Typography')).toBeInTheDocument();
    })
    it('should render CheckboxTypography',()=>{
        render(<CheckboxTypography text="Test"/>)
        expect(screen.getByTestId('checkbox-typo')).toBeInTheDocument();
    })
})