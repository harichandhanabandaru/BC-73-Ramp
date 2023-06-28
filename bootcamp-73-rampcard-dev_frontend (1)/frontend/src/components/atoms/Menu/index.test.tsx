import React from "react";
import "jest";
import { render, screen, fireEvent } from "@testing-library/react";
import Menu from ".";
import { MENU } from "../../../utils/constants";

describe("Menu Component", ()=>{

    const mockFunction = jest.fn();

    it('should render the component', ()=>{
        render(<Menu options={MENU} setRampCard={mockFunction} />);
        const icon = screen.getByTestId("long-button");
        expect(icon).toBeInTheDocument();
    });

    it("renders with default props", () => {
        render(<Menu options={MENU} setRampCard={mockFunction} />);
        const icon = screen.getByTestId("long-button");
        fireEvent.click(icon);
        const close = screen.getByTestId("menu-item");
        fireEvent.click(close);
        expect(icon).toBeInTheDocument();
      });

      it('should render onClick to popup',()=>{
        render(<Menu options={MENU} setRampCard={mockFunction} />);
        const icon = screen.getByTestId("long-button");
        fireEvent.click(icon);
        const menu = screen.getByTestId("menu-click");
        fireEvent.click(menu);
        expect(menu).toHaveTextContent("Create Ramp Category");
      })
})