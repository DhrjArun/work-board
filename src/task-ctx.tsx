import React from "react";

export interface TaskCtxProps {
  isShowArchived: boolean;
  isSearching: boolean;
}
export const TaskCtx = React.createContext<TaskCtxProps>({
  isShowArchived: false,
  isSearching: false,
});

export const TaskProvider = TaskCtx.Provider;

export const useTaskCtx = () => {
  return React.useContext(TaskCtx);
};
