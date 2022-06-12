/** @jsxImportSource @theme-ui/core */
import React from "react";
import { ThemeUIStyleObject } from "@theme-ui/core";
import { Variant, ColorScheme, Size } from "./types";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;

  variant?: Variant;
  colorScheme?: ColorScheme;
  size?: Size;

  isFullWidth?: boolean;
  sx?: ThemeUIStyleObject;
}

const baseStyles: ThemeUIStyleObject = {
  fontWeight: "medium",
  cursor: "pointer",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  ":disabled": {
    opacity: "0.55",
    cursor: "not-allowed",
  },
};

const sizeStyles: { [key in Size]: ThemeUIStyleObject } = {
  sm: { fontSize: "0.8rem", px: "2", height: "6" },
  md: { fontSize: "0", px: "3", height: "8" },
  lg: { fontSize: "1", px: "3", height: "10" },
};

const VariantStyles: {
  [Key in Variant]: { [Key in ColorScheme]: ThemeUIStyleObject };
} = {
  light: {
    neutral: {
      bg: "gray.3",
      color: "gray.8",
    },
  },
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, size, colorScheme, variant, sx, isFullWidth, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        sx={{
          ...baseStyles,
          ...sizeStyles[size || "md"],
          ...VariantStyles[variant || "light"][colorScheme || "neutral"],
          width: isFullWidth ? "100%" : "",
          ...sx,
        }}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
