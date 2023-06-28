import { ThemeProvider } from "@mui/material";
import React from "react";
import theme from "../src/theme";
import "../src/styles.css";
import LogIn from "../src/components/pages/LogIn";
import SignUpPage from "../src/components/pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderNav from "./components/templates/HeaderNav";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LogIn />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/home" element={<HeaderNav />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
