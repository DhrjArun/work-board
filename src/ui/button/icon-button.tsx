/** @jsxImportSource @theme-ui/core */
import React from "react";
import { ButtonProps, Button } from "./button";
import { ThemeUIStyleObject } from "@theme-ui/core";

export interface IconButtonProps
  extends Omit<ButtonProps, "children" | "isFullWidth"> {
  icon?: React.ReactElement;
}
const baseStyles: ThemeUIStyleObject = {
  padding: 0,
  aspectRatio: "1 / 1",
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, size, sx, ...rest }, ref) => {
    const _icon = React.isValidElement(icon)
      ? React.cloneElement(
          icon,
          { fontSize: "inherit", size: "60%", strokeWidth: "2.5px" },
          null
        )
      : null;
    return (
      <Button ref={ref} sx={{ ...baseStyles, ...sx }} size={size} {...rest}>
        {_icon}
      </Button>
    );
  }
);
