import { StoryFn } from "@storybook/react";
import React from "react";
import ChipSet from ".";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import theme from "../../../theme";

export default{
    title: 'atoms/Chip',
    component: ChipSet
}

const Template : StoryFn<typeof ChipSet> = (args) =>{
    return <ChipSet {...args} />;
}

export const chip = Template.bind({});
chip.args = {
    content: "Setup guide",
    icon: <EastOutlinedIcon/>,
    backgroundColor: theme.palette.structural[100],
    color: theme.palette.primary[500],
}
