/** @jsxImportSource @theme-ui/core */
import { useReducer } from "react";
import { TaskColumnContainer } from "./task-column-container";
import { TaskColumn } from "./task-column";
import { initialState } from "./initial-state";
import { reducer } from "./reducer";

export interface TaskManagerProps {}
export const TaskManager: React.FC<TaskManagerProps> = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TaskColumnContainer dispatch={dispatch} id={state.project.id}>
      {state.project.taskColumns.map((id, index) => (
        <TaskColumn
          index={index}
          key={id}
          id={id}
          dispatch={dispatch}
          column={state.taskColumns[id]}
          tasks={state.tasks}
        ></TaskColumn>
      ))}
    </TaskColumnContainer>
  );
};
