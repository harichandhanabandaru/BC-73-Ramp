import { Card, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import Typography from "../../atoms/Typography";
import theme from "../../../theme";
import { TextField } from "../../atoms/Textfield";
import {
  CLIENT_ID,
  FULL_NAME,
  PASSWORD_TEXT,
  SIGNUP_EMAIL_TEXT,
  SIGNUP_TITLE,
  SIGN_BUTTON_TEXT,
  SIGN_OR_TEXT,
  VALID_EMAIL,
  VALID_NAME,
  VALID_PASSWORD,
} from "../../../utils/constants";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "../../atoms/Button";
import Google from "../../../../public/assets/icons/google.svg";
import Icon from "../../atoms/Icon";
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
    const isValidName = VALID_NAME.test(name);
    const isValidMail = VALID_EMAIL.test(mail);
    const isValidPassword = VALID_PASSWORD.test(password);
    if (!isValidName) {
      setNameError("Please enter valid Name");
      return;
    }
    setNameError("");
    if (!isValidMail) {
      setMailError("Please enter valid Email");
      return;
    }
    setMailError("");
    if (!isValidPassword) {
      setPasswordError("Please enter valid Password");
      return;
    }
    setPasswordError("");
  };

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
    console.log(credentialResponse);
    navigate("/home");
  };

  return (
    <Card
      data-testid="SignUp"
      sx={{
        width: "29.375rem",
        height: "34.5625rem",
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
              color={theme.palette.other.mediumEmhasis}
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
              color={theme.palette.other.mediumEmhasis}
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
                  color={theme.palette.other.mediumEmhasis}
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
          <Grid item>
            <Typography
              variant="caption2"
              color={theme.palette.text.disabled}
              children={SIGN_OR_TEXT}
            />
          </Grid>
          <Grid item width="100%" height="34px">
            <GoogleOAuthProvider clientId={CLIENT_ID}>
              <GoogleLogin
                width="334px"
                onSuccess={handleLoginSuccess}
                onError={() => {
                  console.log("Login Failed");
                }}
                text={"signup_with"}
              />
            </GoogleOAuthProvider>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SignUp;
