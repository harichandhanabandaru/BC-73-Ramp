import { StoryFn } from "@storybook/react";
import Profile from "../../../../public/assets/icons/profile.svg";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import React from "react";
import Navbar from ".";
import theme from "../../../theme";

export default {
  title: "molecules/Navbar",
  component: Navbar,
};

const Template: StoryFn<typeof Navbar> = (args) => {
  return <Navbar {...args} />;
};

export const navbar = Template.bind({});
navbar.args = {
  text: "Setup guide",
  avatar: Profile,
  alt: "img",
  icon: <EastOutlinedIcon />,
  backgroundColor: theme.palette.structural[100],
  color: theme.palette.primary[500],
};
