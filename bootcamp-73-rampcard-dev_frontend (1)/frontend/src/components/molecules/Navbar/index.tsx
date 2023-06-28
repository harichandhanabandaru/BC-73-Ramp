import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import ChipSet from "../../atoms/Chip";
import theme from "../../../theme";
import Menu from "../../atoms/Menu";
import { MENU } from "../../../utils/constants";

export type NavbarProps = {
  avatar: string;
  text: string;
  alt: string;
  icon: string | JSX.Element;
  backgroundColor: string;
  color: string;
  setRampCard: React.Dispatch<React.SetStateAction<boolean>>; 
};

const StyledGrid = styled(Grid)(() => ({
  justifyContent: "space-between",
  padding: "10px 40px",
  background: theme.palette.structural[50],
}));

const Navbar = (props: NavbarProps) => {
  return (
    <StyledGrid container>
      <Grid item>
        <ChipSet
          content={props.text}
          icon={props.icon}
          backgroundColor={props.backgroundColor}
          color={props.color}
        />
      </Grid>
      <Grid item>
        <Menu options={MENU} setRampCard={props.setRampCard}/>
      </Grid>
    </StyledGrid>
  );
};

export default Navbar;
