import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import TableTextFeild from ".";

const meta: Meta = {
  title: "atoms/TableTextFeild",
  component: TableTextFeild,
};
export default meta;
const Templete: StoryFn<typeof TableTextFeild> = (args) => (
  <TableTextFeild {...args} />
);
export const textField = Templete.bind({});
textField.args = {
  value: 0,
  setValue: () => {},
};
