import React from "react";
import { render, screen } from "@testing-library/react";
import QuickbooksCategoryPopup from ".";

describe('QuickbooksCategoryPopup', ()=>{

    const props = {
        category: 'Travel',
        transaction: 'Lyft',
        onClick: jest.fn()
    }

    it('should render the component', ()=>{
        render(<QuickbooksCategoryPopup {...props}/>);
        const popup = screen.getByTestId("QuickbooksCategoryPopup");
        expect(popup).toBeInTheDocument();
    });

    it('should render button', ()=>{
        const onClick = jest.fn();
        render(<QuickbooksCategoryPopup {...props} onClick={onClick}/>);
        expect(screen.getByRole("button",{name:"Create rule"})).toBeInTheDocument();
    });

    it('should have two icons', ()=>{
        render(<QuickbooksCategoryPopup {...props}/>);
        expect(screen.getAllByTestId("icon")).toHaveLength(2);
    })

})