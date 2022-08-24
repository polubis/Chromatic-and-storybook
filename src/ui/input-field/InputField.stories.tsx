import { Story, Meta } from "@storybook/react";
import { InputField, InputFieldProps } from "./InputField";

export default {
  component: InputField,
  title: "InputField",
} as Meta;

// InputFieldProps interface tells for storybook which properties will be added to addons - also types of props are inferred.
// They will be merged later with properties defined in .args property.
// It's not smart enough to determine properties from extended interfaces.
const Template: Story<InputFieldProps> = (args) => {
  // Here you can add additional logic if needed.
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
  // Adding this prop tells for storybook - "add this property with the value to addons".
  placeholder: "Type something...",
};
