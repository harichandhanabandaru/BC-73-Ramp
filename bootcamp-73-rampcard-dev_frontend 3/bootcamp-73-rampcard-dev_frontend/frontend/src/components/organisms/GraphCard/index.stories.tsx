import React from "react";
import { StoryFn } from "@storybook/react";
import Graph from ".";

export default {
    title: "molecules/Graph", 
    component: Graph,
  };

  const Template: StoryFn<typeof Graph> = () => {
    return <Graph  />;
  };

  export const GraphImg = Template.bind({});
GraphImg.args={}
