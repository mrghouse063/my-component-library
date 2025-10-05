import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";

const meta: Meta<typeof InputField> = {
  component: InputField,
  title: "Components/InputField"
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    helperText: "This is required"
  }
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    errorMessage: "Invalid email"
  }
};

export const Disabled: Story = {
  args: {
    label: "Username",
    placeholder: "Cannot type here",
    disabled: true
  }
};
