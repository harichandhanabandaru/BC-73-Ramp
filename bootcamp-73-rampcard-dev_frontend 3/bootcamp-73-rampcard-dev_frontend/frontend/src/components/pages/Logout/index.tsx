import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import Logout from "../../organisms/LogoutCard";
import loginBackGround from "../../../../public/assets/icons/loginBgImg.svg";

const LogoutPage = () => {
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
        height: "100vh",
      }}
      data-testid="LogInPage"
    >
      <Grid container alignItems={"center"} direction={"column"}>
        <Logout
          handleClick={() => {
            navigate("/");
          }}
        ></Logout>
      </Grid>
    </div>
  );
};

export default LogoutPage;
