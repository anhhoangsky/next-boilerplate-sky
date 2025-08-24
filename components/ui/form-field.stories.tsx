import type { Meta, StoryObj } from "@storybook/react";
import { FormField } from "./form-field";

const meta: Meta<typeof FormField> = {
  component: FormField,
  title: "UI/FormField",
};
export default meta;

type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  args: { label: "Name", id: "name", placeholder: "Your name" },
};
