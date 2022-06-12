import { taskColumns, tasks, projects } from "data";
import { Project, TaskColumn, Task } from "data";
export * from "data/types";

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getTaskColumns(): TaskColumn[] {
  return taskColumns;
}

export function getTaskColumnsByProjectId(projectId: string): TaskColumn[] {
  return taskColumns.filter((taskColumn) => taskColumn.projectId === projectId);
}

export function getTaskColumnById(id: string): TaskColumn | undefined {
  return taskColumns.find((task) => task.id === id);
}

export function getTasks(): Task[] {
  return tasks;
}
export type GetTasks = typeof getTasks;

export function getTasksByProjectId(projectId: string): Task[] {
  return tasks.filter((task) => task.projectId === projectId);
}

export function getTasksByColumnId(columnId: string): Task[] {
  return tasks.filter((task) => task.taskColumnId === columnId);
}
