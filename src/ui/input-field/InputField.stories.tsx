import { Story, Meta } from "@storybook/react";
import { InputField, InputFieldProps } from "./InputField";

export default {
  component: InputField,
  title: "InputField",
} as Meta;

const Template: Story<InputFieldProps> = (args) => {
  return (
    <div style={{ padding: "16px", background: "#101b48" }}>
      <InputField {...args} />
    </div>
  );
};

export const Playground = Template.bind({});
Playground.args = {};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: "Type something...",
};
