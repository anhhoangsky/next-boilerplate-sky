import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./table";

const meta: Meta<typeof Table> = {
  component: Table,
  title: "UI/Table",
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    headers: ["Name", "Age"],
    data: [
      ["Alice", 30],
      ["Bob", 25],
    ],
  },
};
