import { ComponentMeta } from "@storybook/react";
import { TaskManager } from "task-column/task-manager";

export default {
  title: "Task Manager",
  component: TaskManager,
} as ComponentMeta<typeof TaskManager>;

export const Todo = () => {
  return <TaskManager />;
};
