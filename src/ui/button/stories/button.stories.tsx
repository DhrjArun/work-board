import { ComponentMeta } from "@storybook/react";
import { Button } from "../button";

export default {
  title: "UI/Buttons",
  component: Button,
} as ComponentMeta<typeof Button>;

export const SM = () => {
  return <Button size="sm">Click Me</Button>;
};

export const MD = () => {
  return <Button size="md">Click Me</Button>;
};

export const LG = () => {
  return <Button size="lg">Click Me</Button>;
};

export const FullWidth = () => {
  return <Button isFullWidth={true}>Click Me</Button>;
};

export const IsDisabled = () => {
  return <Button disabled>Click Me</Button>;
};

export const LeftAligned = () => {
  return (
    <Button sx={{ justifyContent: "flex-start" }} isFullWidth>
      Left Aligned
    </Button>
  );
};

export const RightAligned = () => {
  return (
    <Button sx={{ justifyContent: "flex-end" }} isFullWidth>
      Right Aligned
    </Button>
  );
};
