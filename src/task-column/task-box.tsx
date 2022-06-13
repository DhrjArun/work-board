/** @jsxImportSource @theme-ui/core */

import { Draggable } from "react-beautiful-dnd";
import { TextArea } from "ui/text-area";
import { useClickOutside, getHotkeyHandler } from "@mantine/hooks";
import React, { useState } from "react";
import { Task } from "./types";
import { useTaskCtx } from "task-ctx";

export interface TaskBoxProps {
  task: Task;
  index: number;
  handleTaskUpdate: (id: string, newTitle: string) => void;
  handleTaskDelete: (id: string) => void;
}
export const TaskBox: React.FC<TaskBoxProps> = React.memo(
  ({
    task: { title, id, isArchive },
    index,
    handleTaskDelete,
    handleTaskUpdate,
  }) => {
    const isEmpty = title ? true : false;
    const [value, setValue] = useState("");

    function handleSubmit() {
      if (value) {
        handleTaskUpdate(id, value);
        return;
      }
      handleTaskDelete(id);
    }

    const { isShowArchived } = useTaskCtx();

    const ref = useClickOutside(handleSubmit);

    if (!isShowArchived && isArchive) return null;

    return (
      <Draggable draggableId={id} index={index}>
        {(provided) => (
          <div
            sx={{
              boxSizing: "border-box",
              width: "full",
              height: "max-content",
              background: "white",
              boxShadow: "sm",
              mb: "2",
            }}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {!isEmpty ? (
              <TextArea
                ref={ref}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setValue(e.target.value);
                }}
                autoFocus
                placeholder="What you want to do?"
                onKeyDown={getHotkeyHandler([
                  [
                    "Enter",
                    () => {
                      if (value) handleTaskUpdate(id, value);
                    },
                  ],
                  [
                    "Escape",
                    () => {
                      handleTaskDelete(id);
                    },
                  ],
                ])}
              />
            ) : (
              <p sx={{ p: "2", m: "0" }}>{title}</p>
            )}
          </div>
        )}
      </Draggable>
    );
  }
);
