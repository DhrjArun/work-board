import { DraggableLocation } from "react-beautiful-dnd";

export interface Project {
  id: string;
  title: string;
  taskColumns: string[];
}
export interface TaskColumn {
  id: string;
  title: string;
  tasks: string[];
}
export interface Task {
  id: string;
  title: string;
  isArchive?: boolean;
  // taskColumn: string;
}

export interface TaskMangerState {
  project: Project;
  taskColumns: { [id: string]: TaskColumn };
  tasks: { [id: string]: Task };
}

export interface CreateNewTask {
  type: "create-new-task";
  task: Task;
  taskColumnId: string;
}
export interface DeleteTask {
  type: "delete-task";
  taskId: string;
  taskColumnId: string;
}
export interface CreateNewTaskColumn {
  type: "create-new-task-column";
  taskColumn: TaskColumn;
}
export interface ChangeTaskPosition {
  type: "change-task-position";
  draggableId: string;
  source: DraggableLocation;
  destination: DraggableLocation;
}

export interface ChangeColumnPosition {
  type: "change-column-position";
  draggableId: string;
  source: DraggableLocation;
  destination: DraggableLocation;
}

export interface UpdateTaskTitle {
  type: "update-task-title";
  id: string;
  newTitle: string;
}

export interface AddToArchive {
  type: "add-to-archive";
  id: "string";
}

export interface RemoveFromArchive {
  type: "remove-from-archive";
  id: "string";
}

export type TaskManagerAction =
  | CreateNewTask
  | DeleteTask
  | CreateNewTaskColumn
  | ChangeTaskPosition
  | ChangeColumnPosition
  | UpdateTaskTitle
  | AddToArchive
  | RemoveFromArchive;

export type TaskManagerReducer = (
  state: TaskMangerState,
  action: TaskManagerAction
) => TaskMangerState;
