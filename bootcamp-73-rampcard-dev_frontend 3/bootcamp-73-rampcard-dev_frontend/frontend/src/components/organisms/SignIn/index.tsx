import { Card, Grid, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Typography from "../../atoms/Typography";
import theme from "../../../theme";
import jwt from 'jwt-decode';
import {
  CLIENT_ID,
  EMAIL_TEXT,
  EMAIL_VALIDATION_MESSAGE,
  FORGOT_PASSWORD,
  PASSWORD_TEXT,
  PASSWORD_VALIDATION_MESSAGE,
  SIGNIN_TITLE,
  Stay_SIGNED,
  USER_AUTHENTICATION,
  VALID_EMAIL,
  VALID_PASSWORD,
} from "../../../utils/constants";
import Anchor from "../../atoms/Anchor";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CheckboxTypography from "../../molecules/CheckboxTypography";
import {
  CredentialResponse,
  GoogleOAuthProvider,
  GoogleLogin,
} from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import ButtonWithLabel from "../../atoms/ButtonWithLabel";
import { TextField } from "../../atoms/Textfield";
import axios from "axios";
interface Props {
  buttonText: string;
  or: string;
  width: string;
}

const SignIn = (props: Props) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    const response = axios
      .post(USER_AUTHENTICATION+"/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        navigate("/home");
        return response;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleLoginSuccess = (credentialResponse: CredentialResponse) => {
    const email = jwt(credentialResponse["credential"])?.email; 
    const response = axios
      .post(USER_AUTHENTICATION+"/loginWithGoogle", {
        email: email
      })
      .then((response) => {
        navigate("/home");
        return response;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    const isValidEmail = VALID_EMAIL.test(email);
    if (!isValidEmail && email !== "") {
      setEmailError(EMAIL_VALIDATION_MESSAGE);
      return;
    }
    setEmailError("");
  }, [email]);

  useEffect(() => {
    const isValidPassword = VALID_PASSWORD.test(password);
    if (!isValidPassword && password !== "") {
      setPasswordError(PASSWORD_VALIDATION_MESSAGE);
      return;
    }
    setPasswordError("");
  }, [password]);
  return (
    <Card
      data-testid="SignIn"
      sx={{
        width: "29.375rem",
        height: "32.5rem",
      }}
    >
      <Grid
        container
        direction="column"
        rowGap={4}
        justifyContent="center"
        sx={{ padding: "44px 68px 43px" }}
      >
        <Grid item>
          <Typography variant="h2" color={theme.palette.other.highEmphasis}>
            {SIGNIN_TITLE}
          </Typography>
        </Grid>
        <Grid container direction="column" rowGap={0.5}>
          <Grid item>
            <Typography
              variant="body2"
              color={theme.palette.other.mediumEmphasis}
            >
              {EMAIL_TEXT}
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              size="small"
              placeholder="orders@supertodo.me"
              variant={"outlined"}
              value={email}
              error={!!emailError}
              helperText={emailError}
              onChange={handleEmailChange}
              fullWidth
              InputProps={{
                style: {
                  width: "330px",
                  height: "2.75rem",
                  borderRadius: "8px",
                  border: "1px solid " + `${theme.palette.structural[100]}`,
                  paddingLeft: "8px",
                  fontSize: "14px",
                  lineHeight: "16px",
                  fontFamily: "Segoe UI",
                  fontWeight: 400,
                },
                sx: {
                  "& input": {
                    padding: "6px 8px !important",
                  },
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid container direction="column" rowGap={0.5}>
          <Grid item>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography
                  variant="body2"
                  color={theme.palette.other.mediumEmphasis}
                >
                  {PASSWORD_TEXT}
                </Typography>
              </Grid>
              <Grid item>
                <Anchor text={FORGOT_PASSWORD} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <TextField
              size="small"
              variant={"outlined"}
              placeholder="orders@supertodo.me"
              fullWidth
              type={showPassword ? "text" : "password"}
              value={password}
              error={!!passwordError}
              helperText={passwordError}
              onChange={handlePasswordChange}
              InputProps={{
                style: {
                  width: "330px",
                  height: "2.75rem",
                  borderRadius: "8px",
                  border: "1px solid " + `${theme.palette.structural[100]}`,
                  paddingLeft: "8px",
                  fontSize: "14px",
                  lineHeight: "16px",
                  fontFamily: "Segoe UI",
                  fontWeight: 400,
                },
                sx: {
                  "& input": {
                    padding: "6px 8px !important",
                  },
                },
                endAdornment: (
                  <IconButton onClick={toggleShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Grid item style={{ marginTop: "-16px" }}>
          <CheckboxTypography text={Stay_SIGNED} />
        </Grid>
        <Grid container direction="column" rowGap={1.5} alignItems="center">
          <Grid item width="100%">
            <ButtonWithLabel
              label={
                <Typography variant="body2" color={theme.palette.accent.white}>
                  {props.buttonText}
                </Typography>
              }
              width={props.width}
              variant="contained"
              disabled={!(email && password)}
              sx={{ height: "32px", width: "100%" }}
              onClick={handleClick}
              textColor={theme.palette.accent.white}
              bordercolor={
                !(email && password)
                  ? theme.palette.other.stroke100
                  : theme.palette.primary["500"]
              }
              backgroundColor={
                !(email && password)
                  ? theme.palette.other.stroke100
                  : theme.palette.primary["500"]
              }
            />
          </Grid>
          <Grid item>
            <Typography
              variant="caption2"
              color={theme.palette.text.disabled}
              children={props.or}
            />
          </Grid>
          <Grid item width="100%" height="34px">
            <GoogleOAuthProvider clientId={CLIENT_ID}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <GoogleLogin
                  width="334px"
                  onSuccess={handleLoginSuccess}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </div>
            </GoogleOAuthProvider>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SignIn;
