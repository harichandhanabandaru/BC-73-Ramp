import React from "react";
import {fireEvent, render, screen} from '@testing-library/react'
import IconTypography from ".";
import theme from "../../../theme";

describe("IconTypography Component", ()=> {
    it('should render the iconTypography molecule', ()=> {
        render(<IconTypography content={"Add new"} color={theme.palette.primary[500]} onClick={()=>{}}/>);
        const iconTypography = screen.getByTestId("IconTypography");
        expect(iconTypography).toBeInTheDocument();
    });

    it('Should have icon atom', ()=>{
        render(<IconTypography content={"Add new"} color={theme.palette.primary[500]} onClick={()=>{}}/>);
        const icon = screen.getByTestId("icon");
        expect(icon).toBeInTheDocument();
    });

    it('Should have typography atom', ()=>{
        render(<IconTypography content={"Add new"} color={theme.palette.primary[500]} onClick={()=>{}}/>);
        const typography = screen.getByTestId("Typography");
        expect(typography).toBeInTheDocument();
    });
})