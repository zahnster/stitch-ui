import React from "react";
import { Button } from "./button";

export default {
  title: "Components/Button",
  component: Button,
};

// export const Test = () => <button>What the ever loving fuck</button>;

const Template = (args) => <Button {...args} />;
// const Template = (args) => <button>{args.children}</button>;

export const Base = Template.bind({});
Base.args = {
  children: "Hello World",
};
