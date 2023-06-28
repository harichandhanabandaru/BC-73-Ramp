import { fireEvent, render, screen } from "@testing-library/react";
import SignUp from ".";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("Signup Component", () => {
  it("should render signup component", () => {
    render(<BrowserRouter><SignUp width={"100%"} /></BrowserRouter>);
    const signUp = screen.getByText(/Sign up/i);
    const emailField = screen.getAllByPlaceholderText(/orders@supertodo.me/i);

    expect(signUp).toBeInTheDocument();
    expect(emailField[0]).toBeInTheDocument();
    expect(emailField[1]).toBeInTheDocument();
  });

  it("should render correct name email and password", () => {
    const { getByRole, getAllByPlaceholderText, getByPlaceholderText } = render(<BrowserRouter><SignUp width="100%" /></BrowserRouter>);
    const name = getByPlaceholderText("John doe");
    const Input = getAllByPlaceholderText("orders@supertodo.me");
    const submitButton = getByRole("button", { name: "Continue" });

    fireEvent.change(name,{target: {value: "valid name"}});
    fireEvent.change(Input[0], { target: { value: "email@gmail.com" } });
    fireEvent.change(Input[1], { target: { value: "validPassword123" } });
    fireEvent.click(submitButton);

    expect(submitButton).toBeInTheDocument();
  });


  it('should give error when name, email and password is invalid',()=>{
    const {getAllByPlaceholderText, getByRole, getByPlaceholderText } = render(<BrowserRouter><SignUp width={"100%"} /></BrowserRouter>);
    const Input = getByPlaceholderText("John doe");
    const emailPassword = getAllByPlaceholderText("orders@supertodo.me");
    const Button = getByRole("button",{name: "Continue"});

    fireEvent.change(Input, {target : {value: "12345"}});
    fireEvent.change(emailPassword[0], {target : {value: 'invalidEmail'}});
    fireEvent.change(emailPassword[1], {target : {value: 'invalidpassword'}});
    fireEvent.click(Button);

    expect(Button).toBeInTheDocument();
  })

  it('should give error when name, email and password is invalid',()=>{
    const {getAllByPlaceholderText, getByRole, getByPlaceholderText } = render(<BrowserRouter><SignUp width={"100%"} /></BrowserRouter>);
    const Input = getByPlaceholderText("John doe");
    const emailPassword = getAllByPlaceholderText("orders@supertodo.me");
    const Button = getByRole("button",{name: "Continue"});

    fireEvent.change(Input, {target : {value: "valid name"}});
    fireEvent.change(emailPassword[0], {target : {value: 'invalidEmail'}});
    fireEvent.change(emailPassword[1], {target : {value: 'invalidpassword'}});
    fireEvent.click(Button);

    expect(Button).toBeInTheDocument();
  })

  it('should give error when name, email and password is invalid',()=>{
    const {getAllByPlaceholderText, getByRole, getByPlaceholderText } = render(<BrowserRouter><SignUp width={"100%"} /></BrowserRouter>);
    const Input = getByPlaceholderText("John doe");
    const emailPassword = getAllByPlaceholderText("orders@supertodo.me");
    const Button = getByRole("button",{name: "Continue"});

    fireEvent.change(Input, {target : {value: "valid name"}});
    fireEvent.change(emailPassword[0], {target : {value: 'email@gmail.com'}});
    fireEvent.change(emailPassword[1], {target : {value: 'invalidpassword'}});
    fireEvent.click(Button);

    expect(Button).toBeInTheDocument();
  })

  it('toogle icon',()=>{
    render(<BrowserRouter><SignUp width="100%"/></BrowserRouter>)
    const passwordInput = screen.getAllByPlaceholderText("orders@supertodo.me")[1];
    const icon = screen.getByTestId("VisibilityIcon");
    fireEvent.click(icon);
    expect(passwordInput).toBeInTheDocument();
  })

  it('disables sign up button when name email and password fields are empty', () => {
    render(<BrowserRouter><SignUp width="100%" /></BrowserRouter>);
    const signUpButton = screen.getByText(/Continue/i);

    expect(signUpButton).toBeDisabled();
  });
});
