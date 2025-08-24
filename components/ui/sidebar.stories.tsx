import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./sidebar";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: "UI/Sidebar",
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};
