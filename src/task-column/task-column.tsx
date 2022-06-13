/** @jsxImportSource @theme-ui/core */
import { NewTask } from "./new-task";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Task, TaskManagerAction, TaskMangerState } from "./types";
import { TaskBox } from "./task-box";

export interface TaskColumnProps {
  id: string;
  index: number;
  state: TaskMangerState;
  dispatch: React.Dispatch<TaskManagerAction>;
}
export const TaskColumn: React.FC<TaskColumnProps> = ({
  id,
  index,
  state,
  dispatch,
}) => {
  const { title } = state.taskColumns[id];
  const size = state.taskColumns[id].tasks.length;
  function handleNewTask() {
    const task: Task = { id: new Date().toString(), title: "" };
    dispatch({ type: "create-new-task", task, taskColumnId: id });
  }
  function handleTaskTitleUpdate(id: string, newTitle: string) {
    dispatch({ type: "update-task-title", id, newTitle });
  }
  function handleTaskDelete(taskId: string) {
    dispatch({ type: "delete-task", taskColumnId: id, taskId });
  }
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="task-column"
          sx={{
            minWidth: "64",
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
                {state.taskColumns[id].tasks.map((id, index) => (
                  <TaskBox
                    handleTaskUpdate={handleTaskTitleUpdate}
                    handleTaskDelete={handleTaskDelete}
                    index={index}
                    key={id}
                    task={state.tasks[id]}
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
};
