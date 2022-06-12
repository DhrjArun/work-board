import { ComponentMeta } from "@storybook/react";
import { TaskColumn } from "../task-column";
import { TaskColumnContainer } from "../task-column-container";
import { TaskBox } from "../task-box";
import {
  getProjectById,
  getTaskColumnsByProjectId,
} from "task-column/services";

export default {
  title: "Task Column",
  component: TaskColumn,
} as ComponentMeta<typeof TaskColumn>;

const project = getProjectById("bloodd");
const taskColumns = getTaskColumnsByProjectId("bloodd");

export const Todo = () => {
  return (
    <TaskColumnContainer id={project!.id}>
      {taskColumns.map((taskColumn) => (
        <TaskColumn
          index={project?.taskColumnsIndex[taskColumn.id]!}
          key={taskColumn.id}
          size={taskColumn.tasks.length}
          label={taskColumn.name}
          id={taskColumn.id}
        >
          {taskColumn.tasks.map(({ title, id }, index) => (
            <TaskBox index={index} key={id} title={title} id={id} />
          ))}
        </TaskColumn>
      ))}
    </TaskColumnContainer>
  );
};
