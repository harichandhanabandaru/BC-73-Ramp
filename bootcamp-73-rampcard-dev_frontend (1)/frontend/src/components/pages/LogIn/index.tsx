import { Grid } from "@mui/material";
import React from "react";
import Anchor from "../../atoms/Anchor";
import Typography from "../../atoms/Typography";
import SignIn from "../../organisms/SignIn";
import loginBackGround from "../../../../public/assets/icons/loginBgImg.svg";
import { DONT_HAVE_ACC, SIGNUP_TITLE } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";
import theme from '../../../theme';

const LogIn = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: `url(${loginBackGround})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh"
      }}
      data-testid="LogInPage"
    >
      <Grid container alignItems={'center'} direction={'column'}>
        <Grid item paddingTop={"3.5rem"} paddingRight={"28.5rem"}>
          <Typography children={"Ramp"} variant={"h1"} />
        </Grid>
        <Grid item paddingTop={"2.5rem"}>
          <SignIn buttonText={"Continue"} or={"OR"} width={"470px"} />
        </Grid>
        <Grid item>
          <Grid container direction={"row"} paddingTop={"1rem"} paddingRight={'19rem'}>
            <Grid item>
            <Typography
              children={DONT_HAVE_ACC}
              variant={"body2"}
              color={theme.palette.other.merchantRuleText}
              style={{ paddingRight: "3px" }}
            />
            </Grid>
            <Grid item>
            <Anchor text={SIGNUP_TITLE} onClick={()=>{navigate('/signUp')}}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LogIn;
