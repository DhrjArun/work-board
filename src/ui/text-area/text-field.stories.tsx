import { ComponentMeta } from "@storybook/react";
import { TextArea } from "./text-area";

export default {
  title: "UI/TextArea",
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

export const Default = () => {
  return <TextArea />;
};

export const SmartResize = () => {
  return <TextArea resize="smart" sx={{ width: "15rem" }} />;
};

export const NoResize = () => {
  return <TextArea resize="none" />;
};

export const AutoResize = () => {
  return <TextArea resize="auto" />;
};

export const HorizontalResize = () => {
  return <TextArea resize="horizontal" />;
};

export const VerticalResize = () => {
  return <TextArea resize="vertical" sx={{ width: "20rem" }} />;
};

export const WithPlaceholder = () => {
  return <TextArea placeholder="Enter your Name" />;
};

export const disabled = () => {
  return <TextArea placeholder="Enter your Name" disabled />;
};

export const InlineTextArea = () => {
  return (
    <TextArea
      placeholder="What you want to do?"
      sx={{ display: "inline", width: "unset" }}
    />
  );
};

export const WithCustomStyling = () => {
  return (
    <TextArea
      placeholder="What you want to do?"
      sx={{ fontWeight: "bold", fontSize: "3" }}
    />
  );
};
