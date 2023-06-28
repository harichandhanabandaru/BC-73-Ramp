import { StoryFn } from "@storybook/react";
import Header from ".";
import React from "react";
import { HEADER } from "../../../utils/constants";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

export default {
  title: "molecules/Header",
  component: Header,
};

const Template: StoryFn<typeof Header> = (args) => {
  return <Header {...args} />;
};

export const header = Template.bind({});
header.args = {
  data: HEADER,
  icon: <ExpandMoreOutlinedIcon />,
};
