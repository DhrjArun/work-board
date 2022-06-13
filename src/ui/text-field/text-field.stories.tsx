import { ComponentMeta } from "@storybook/react";
import { TextField } from "./text-field";

export default {
  title: "UI/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

export const Default = () => {
  return <TextField />;
};

export const disabled = () => {
  return <TextField />;
};

export const WithPlaceholder = () => {
  return <TextField placeholder="Enter your Name" />;
};

export const InlineTextField = () => {
  return (
    <TextField
      placeholder="What you want to do?"
      sx={{ display: "inline", width: "unset" }}
    />
  );
};

export const WithCustomStyling = () => {
  return (
    <TextField
      placeholder="What you want to do?"
      sx={{ fontWeight: "bold", fontSize: "3", height: "12" }}
    />
  );
};
