import { screen, render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import LogIn from ".";


describe('LogIn Page', ()=>{
    beforeEach(()=>{
        render(<BrowserRouter><LogIn/></BrowserRouter>)
    })

    it('should render the comppnent', ()=> {
        const page = screen.getByTestId('LogInPage');
        expect(page).toBeInTheDocument();
    })

})