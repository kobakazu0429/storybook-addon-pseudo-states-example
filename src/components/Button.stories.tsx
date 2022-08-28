import React from "react";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import {
  PseudoStatesDefault,
  withPseudo,
} from "@ergosign/storybook-addon-pseudo-states-react";
import { Button } from "./Button";

type Story = ComponentStoryObj<typeof Button>;

export default {
  component: Button,
  decorators: [withPseudo],
  parameters: {
    withPseudo: {
      pseudos: [...PseudoStatesDefault, "focus & hover"],
      selector: "button",
    },
  },
  args: {
    label: "Button",
  },
} as ComponentMeta<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};
export const Secondary: Story = {
  args: {
    primary: false,
  },
};
export const Large: Story = {
  args: {
    size: "large",
  },
};
export const Medium: Story = {
  args: {
    size: "medium",
  },
};
export const Small: Story = {
  args: {
    size: "small",
  },
};
