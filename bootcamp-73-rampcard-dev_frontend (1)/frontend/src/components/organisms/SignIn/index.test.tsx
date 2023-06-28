import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckboxTypography from '../../molecules/CheckboxTypography';
import SignIn from './index';
import { BrowserRouter } from 'react-router-dom';

describe('SignIn', () => {
  it('renders Signin form', () => {
    render(<BrowserRouter><SignIn buttonText="Sign in" or="or" width="100%" /></BrowserRouter>);
    const signIn = screen.getAllByText(/Sign in/i);
    const emailField = screen.getAllByPlaceholderText(/orders@supertodo.me/i);

    expect(signIn[0]).toBeInTheDocument();
    expect(emailField[0]).toBeInTheDocument();
    expect(emailField[1]).toBeInTheDocument();
    expect(signIn[1]).toBeInTheDocument();

  });

  it("should show error message for invalid email", () => {
    const { getByRole, getAllByPlaceholderText, getByText } = render(<BrowserRouter><SignIn buttonText="Sign in" or="or" width="100%" /></BrowserRouter>);
    const Input = getAllByPlaceholderText("orders@supertodo.me");
    const submitButton = getByRole("button", { name: "Sign in" });

    fireEvent.change(Input[0], { target: { value: "invalidEmail" } });
    fireEvent.change(Input[1], { target: { value: "validPassword123" } });
    fireEvent.click(submitButton);

    expect(getByText("Please enter valid Email")).toBeInTheDocument();
  });

  it("should show error message for invalid password", () => {
    const { getByRole, getAllByPlaceholderText, getByText } = render(<BrowserRouter><SignIn buttonText="Sign in" or="or" width="100%" /></BrowserRouter>);
    const Input = getAllByPlaceholderText("orders@supertodo.me");
    const submitButton = getByRole("button", { name: "Sign in" });

    fireEvent.change(Input[0], { target: { value: "email@gmail.com" } });
    fireEvent.change(Input[1], { target: { value: "invalidpassword" } });
    fireEvent.click(submitButton);

    expect(getByText("Please enter valid Password")).toBeInTheDocument();
  });

  it("should render correct email and password", () => {
    const { getByRole, getAllByPlaceholderText } = render(<BrowserRouter><SignIn buttonText="Sign in" or="or" width="100%" /></BrowserRouter>);
    const Input = getAllByPlaceholderText("orders@supertodo.me");
    const submitButton = getByRole("button", { name: "Sign in" });

    fireEvent.change(Input[0], { target: { value: "email@gmail.com" } });
    fireEvent.change(Input[1], { target: { value: "validPassword123" } });
    fireEvent.click(submitButton);

    expect(submitButton).toBeInTheDocument();
  });

  it('toogle icon',()=>{
    render(<BrowserRouter><SignIn buttonText="Sign in" or="or" width="100%"/></BrowserRouter>)
    const passwordInput = screen.getAllByPlaceholderText("orders@supertodo.me")[1];
    const icon = screen.getByTestId("VisibilityIcon");
    fireEvent.click(icon);
    expect(passwordInput).toBeInTheDocument();
  })

  it('disables sign in button when email and password fields are empty', () => {
    render(<BrowserRouter><SignIn buttonText="Continue" or="or" width="100%" /></BrowserRouter>);
    const signUpButton = screen.getByText(/Continue/i);

    expect(signUpButton).toBeDisabled();
  });

   it('should render checkbox typography',()=>{
    render(<CheckboxTypography text={'test'}/>)
    expect(screen.getByTestId('checkbox-typo')).toBeInTheDocument();
   })
});
