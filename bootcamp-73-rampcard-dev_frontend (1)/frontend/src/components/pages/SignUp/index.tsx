import { Grid } from "@mui/material";
import React from "react";
import SignUp from "../../organisms/SignUp";
import Anchor from "../../atoms/Anchor";
import Typography from "../../atoms/Typography";
import loginBackGround from "../../../../public/assets/icons/loginBgImg.svg";
import { ALREADY_HAVE_ACC, SIGN_IN } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";
import theme from '../../../theme';

const SignUpPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
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
        height: "100vh",
      }}
      data-testid="SignUpPage"
    >
      <Grid container alignItems={"center"} direction={"column"}>
        <Grid item paddingTop={"3.5rem"} paddingRight={"28.5rem"}>
          <Typography children={"Ramp"} variant={"h1"} />
        </Grid>
        <Grid item paddingTop={"2.5rem"}>
          <SignUp width={"100%"} />
        </Grid>
        <Grid item>
          <Grid
            container
            direction={"row"}
            paddingTop={"1rem"}
            paddingRight={"19rem"}
            data-testid="anchorGrid"
          >
            <Typography
              children={ALREADY_HAVE_ACC}
              variant={"body2"}
              color={theme.palette.other.merchantRuleText}
              style={{ paddingRight: "3px" }}
            />
            <Anchor text={SIGN_IN} onClick={handleClick} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUpPage;
