import { StoryFn } from "@storybook/react";
import React from "react";
import UploadFile from ".";

export default {
    title: "organisms/UploadFile",
    component: UploadFile,
  };

  const Template: StoryFn<typeof UploadFile> = (args) => {
    return <UploadFile {...args} />;
  };

  export const Upload = Template.bind({});
  Upload.args = {
    width: '432px',
    height: '516px'
  }