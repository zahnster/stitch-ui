import React from "react";
import { Button } from "./button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Action Button",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Action Button",
  variant: "secondary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Button",
  variant: "primary",
  disabled: true,
};

export const ButtonIcon = Template.bind({});
ButtonIcon.args = {
  children: <ion-icon name="heart"></ion-icon>,
  variant: "icon",
};
