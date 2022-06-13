/** @jsxImportSource @theme-ui/core */
import React from "react";
import { ThemeUIStyleObject } from "@theme-ui/core";

type Resize = "none" | "horizontal" | "vertical" | "auto" | "smart";

export interface TextAreaProps
  extends React.ComponentPropsWithoutRef<"textarea"> {
  sx?: ThemeUIStyleObject;
  resize?: Resize;
}

const baseStyles: ThemeUIStyleObject = {
  fontFamily: "body",
  fontSize: "0",
  display: "block",
  width: "full",
  maxWidth: "full",
  py: "2",
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

const resizeStyle: { [Key in Resize]: ThemeUIStyleObject } = {
  none: {
    resize: "none",
  },
  horizontal: {
    resize: "horizontal",
  },
  vertical: {
    resize: "vertical",
  },
  auto: {
    resize: "both",
  },
  smart: {
    resize: "none",
    overflow: "hidden",
  },
};

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ sx, disabled, resize, onInput, ...rest }, ref) => {
    if (!resize) resize = "smart";
    return (
      <textarea
        onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          if (resize === "smart") {
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
          }
          if (onInput) {
            onInput(e);
          }
        }}
        ref={ref}
        disabled={disabled}
        sx={{
          ...baseStyles,
          ...resizeStyle[resize],
          opacity: disabled ? "0.55" : "",
          ...sx,
        }}
        {...rest}
      />
    );
  }
);
