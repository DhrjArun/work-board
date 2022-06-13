/** @jsxImportSource @theme-ui/core */
import React from "react";
import { Button, ButtonProps } from "ui";

export interface NewTaskProps extends ButtonProps {}
export const NewTask: React.FC<NewTaskProps> = React.memo(({ sx, ...rest }) => {
  console.log("rerender");

  return (
    <Button
      className="new-task-btn"
      isFullWidth
      sx={{
        justifyContent: "flex-start",
        ...sx,
      }}
      {...rest}
    >
      New Task
    </Button>
  );
});
