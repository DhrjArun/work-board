import { ComponentMeta } from "@storybook/react";
import { IconButton } from "../icon-button";
import { Plus } from "react-feather";

export default {
  title: "UI/Icon Button",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

export const SM = () => {
  return <IconButton icon={<Plus />} size="sm" />;
};
export const MD = () => {
  return <IconButton icon={<Plus />} size="md" />;
};
export const LG = () => {
  return <IconButton icon={<Plus />} size="lg" />;
};
