/** @jsxImportSource @theme-ui/core */
import React from "react";
import { ThemeUIStyleObject } from "@theme-ui/core";

export interface TextFieldProps
  extends React.ComponentPropsWithoutRef<"input"> {
  sx?: ThemeUIStyleObject;
}

const baseStyles: ThemeUIStyleObject = {
  fontSize: "0",
  display: "block",
  height: "8",
  width: "full",
  py: "0",
  px: "2",
  borderRadius: "0",
  border: "1px solid gray",
  borderColor: "gray.4",
  boxSizing: "border-box",
  color: "gray.8",
  ":disabled": {
    cursor: "not-allowed",
  },
  "::placeholder": {
    color: "gray.5",
  },
  ":focus": {
    outline: "none",
    borderColor: "blue.5",
  },
};

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ sx, disabled, ...rest }, ref) => {
    return (
      <input
        sx={{ ...baseStyles, opacity: disabled ? "0.55" : "", ...sx }}
        disabled={disabled}
        {...rest}
        ref={ref}
      ></input>
    );
  }
);
