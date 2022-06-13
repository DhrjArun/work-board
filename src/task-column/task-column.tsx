/** @jsxImportSource @theme-ui/core */
import React, { useCallback } from "react";
import { NewTask } from "./new-task";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Task, TaskColumn as TaskColumnType, TaskManagerAction } from "./types";
import { TaskBox } from "./task-box";

export interface TaskColumnProps {
  id: string;
  index: number;
  dispatch: React.Dispatch<TaskManagerAction>;
  column: TaskColumnType;
  tasks: { [Key: string]: Task };
}
export const TaskColumn: React.FC<TaskColumnProps> = React.memo(
  ({ id, index, column, tasks, dispatch }) => {
    const { title } = column;
    const size = column.tasks.length;
    const handleNewTask = useCallback(() => {
      const task: Task = { id: new Date().toString(), title: "" };
      dispatch({ type: "create-new-task", task, taskColumnId: id });
    }, [id]);
    const handleTaskTitleUpdate = useCallback(
      (id: string, newTitle: string) => {
        dispatch({ type: "update-task-title", id, newTitle });
      },
      [id]
    );
    const handleTaskDelete = useCallback(
      (taskId: string) => {
        dispatch({ type: "delete-task", taskColumnId: id, taskId });
      },
      [id]
    );
    return (
      <Draggable draggableId={id} index={index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            ref={provided.innerRef}
            className="task-column"
            sx={{
              minWidth: "64",
              width: "64",
              minHeight: "56",
              background: "gray.2",
              padding: "2",
              display: "grid",
              gridTemplateColumns: "100%",
              gridTemplateRows: "max-content 1fr 4rem",
              ":not(:hover) .new-task-btn": {
                display: "none",
              },
            }}
          >
            <header
              {...provided.dragHandleProps}
              sx={{ color: "gray.7", pt: "2", pb: "3" }}
            >
              <p sx={{ m: "0" }}>{`${title}  ${size} Task`}</p>
            </header>
            <Droppable droppableId={id} type="task">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {column.tasks.map((id, index) => (
                    <TaskBox
                      handleTaskUpdate={handleTaskTitleUpdate}
                      handleTaskDelete={handleTaskDelete}
                      index={index}
                      key={id}
                      task={tasks[id]}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <footer sx={{ alignSelf: "end" }}>
              <NewTask onClick={handleNewTask} />
            </footer>
          </div>
        )}
      </Draggable>
    );
  }
);
