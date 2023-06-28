import { ThemeProvider } from "@mui/material";
import React from "react";
import theme from "../src/theme";
import "../src/styles.css";
import LogIn from "./pages/LogIn";
import SignUpPage from "./pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderNav from "./components/templates/HeaderNav";
import LogoutPage from "../src/components/pages/Logout";

const App = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LogIn />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/home" element={<HeaderNav />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
