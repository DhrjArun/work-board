import { TaskColumn } from "./types";

export const taskColumns: TaskColumn[] = [
  {
    name: "To Do",
    id: "Tudumm",
    projectId: "bloodd",
    tasks: [
      { id: "button", title: "Create Button Components" },
      {
        title: "Fix the Webpack Bug",
        id: "bugwss",
      },
      {
        title: "Create Modal Component",
        id: "modals",
      },
    ],
  },
  {
    name: "Progress",
    id: "progre",
    projectId: "bloodd",
    tasks: [
      {
        title: "Create Input Components",
        id: "Inputs",
      },
      {
        title: "Add the Archive feature",
        id: "archiv",
      },
    ],
  },
  {
    name: "Done",
    id: "Doneee",
    projectId: "bloodd",
    tasks: [
      {
        title: "Migrate to react-query",
        id: "reactq",
      },
      {
        title: "Fix the linting issue",
        id: "lintin",
      },
    ],
  },
];
