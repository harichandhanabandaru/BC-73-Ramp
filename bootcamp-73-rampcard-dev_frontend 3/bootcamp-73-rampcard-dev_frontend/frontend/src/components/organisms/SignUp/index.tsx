import { Card, Grid, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Typography from "../../atoms/Typography";
import theme from "../../../theme";
import { TextField } from "../../atoms/Textfield";
import {
  CLIENT_ID,
  EMAIL_VALIDATION_MESSAGE,
  FULL_NAME,
  NAME_VALIDATION_MESSAGE,
  PASSWORD_TEXT,
  PASSWORD_VALIDATION_MESSAGE,
  SIGNUP_EMAIL_TEXT,
  SIGNUP_TITLE,
  SIGN_BUTTON_TEXT,
  SIGN_OR_TEXT,
  USER_AUTHENTICATION,
  VALID_EMAIL,
  VALID_NAME,
  VALID_PASSWORD,
} from "../../../utils/constants";
import axios from "axios";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "../../atoms/Button";

import {
  CredentialResponse,
  GoogleOAuthProvider,
  GoogleLogin,
} from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

interface Props {
  width: string;
}

const SignUp = (props: Props) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [mailError, setMailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const response = axios
      .post(USER_AUTHENTICATION+"/signup", {
        email: mail,
        password: password,
        name: name,
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
    const isValidMail = VALID_EMAIL.test(mail);
    if (!isValidMail && mail !== "") {
      setMailError(EMAIL_VALIDATION_MESSAGE);
      return;
    }
    setMailError("");
  }, [mail]);

  useEffect(() => {
    const isValidPassword = VALID_PASSWORD.test(password);
    if (!isValidPassword && password !== "") {
      setPasswordError(PASSWORD_VALIDATION_MESSAGE);
      return;
    }
    setPasswordError("");
  }, [password]);

  useEffect(() => {
    const isValidName = VALID_NAME.test(name);
    if (!isValidName && name !== "") {
      setNameError(NAME_VALIDATION_MESSAGE);
      return;
    }
    setNameError("");
  }, [name]);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleLoginSuccess = (credentialResponse: CredentialResponse) => {
    navigate("/home");
  };

  return (
    <Card
      data-testid="SignUp"
      sx={{
        width: "29.375rem",
        height: "30rem",
      }}
    >
      <Grid
        container
        direction="column"
        rowGap={3}
        justifyContent="center"
        sx={{ padding: "49px 68px 48px" }}
      >
        <Grid item>
          <Typography variant="h2" color={theme.palette.other.highEmphasis}>
            {SIGNUP_TITLE}
          </Typography>
        </Grid>
        <Grid container direction="column" rowGap={0.5} marginTop="-1px">
          <Grid item>
            <Typography
              variant="body2"
              color={theme.palette.other.mediumEmphasis}
            >
              {FULL_NAME}
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              placeholder="John doe"
              fullWidth
              size="small"
              value={name}
              error={!!nameError}
              helperText={nameError}
              onChange={handleNameChange}
              borderRadius="8px"
              variant={"outlined"}
              height="2.75rem"
            />
          </Grid>
        </Grid>
        <Grid container direction="column" rowGap={0.5} marginTop="-4px">
          <Grid item>
            <Typography
              variant="body2"
              color={theme.palette.other.mediumEmphasis}
            >
              {SIGNUP_EMAIL_TEXT}
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              placeholder="orders@supertodo.me"
              fullWidth
              size="small"
              value={mail}
              error={!!mailError}
              helperText={mailError}
              onChange={handleMailChange}
              variant={"outlined"}
              borderRadius="8px"
              height="2.75rem"
            />
          </Grid>
        </Grid>
        <Grid container direction="column" rowGap={0.5} marginTop="-4px">
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
            </Grid>
          </Grid>
          <Grid item>
            <TextField
              placeholder="orders@supertodo.me"
              fullWidth
              size="small"
              type={showPassword ? "text" : "password"}
              value={password}
              error={!!passwordError}
              helperText={passwordError}
              onChange={handlePasswordChange}
              endAdornment={
                <IconButton onClick={toggleShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              }
              borderRadius="8px"
              variant={"outlined"}
              height="2.75rem"
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          rowGap={1.5}
          alignItems="center"
          style={{ marginTop: "7px" }}
        >
          <Grid item width="100%">
            <Button
              width={props.width}
              children={
                <Typography variant="body2">{SIGN_BUTTON_TEXT}</Typography>
              }
              variant="contained"
              disabled={!(name && mail && password)}
              sx={{ height: "32px", width: "100%", textTransform: "none" }}
              onClick={handleButtonClick}
              textColor={theme.palette.accent.white}
              bordercolor={
                !(name && mail && password)
                  ? theme.palette.other.stroke100
                  : theme.palette.primary["500"]
              }
              backgroundColor={
                !(name && mail && password)
                  ? theme.palette.other.stroke100
                  : theme.palette.primary["500"]
              }
            />
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SignUp;
