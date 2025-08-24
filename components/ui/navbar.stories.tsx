import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./navbar";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: "UI/Navbar",
};
export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};
