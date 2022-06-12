/** @jsxImportSource @theme-ui/core */
import React from "react";
import { Button } from "ui";

export interface NewTaskProps {}
export const NewTask: React.FC<NewTaskProps> = React.memo(() => {
  console.log("rerender");

  return (
    <Button
      className="new-task-btn"
      isFullWidth
      sx={{
        justifyContent: "flex-start",
      }}
    >
      New Task
    </Button>
  );
});
