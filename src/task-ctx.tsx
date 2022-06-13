import React from "react";

export interface TaskCtxProps {
  isShowArchived: boolean;
  searchValue: string;
}
export const TaskCtx = React.createContext<TaskCtxProps>({
  isShowArchived: false,
  searchValue: "",
});

export const TaskProvider = TaskCtx.Provider;

export const useTaskCtx = () => {
  return React.useContext(TaskCtx);
};
