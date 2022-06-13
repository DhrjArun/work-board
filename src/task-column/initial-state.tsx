import { TaskMangerState } from "./types";

export const initialState: TaskMangerState = {
  project: {
    id: "bloodd",
    title: "BloodBuddy",
    taskColumns: ["Tudumm", "progre", "Doneee"],
  },
  taskColumns: {
    Tudumm: {
      title: "To Do",
      id: "Tudumm",
      tasks: ["button", "bugwss", "modals"],
    },
    progre: {
      title: "Progress",
      id: "progre",
      tasks: ["Inputs", "archiv"],
    },
    Doneee: {
      title: "Done",
      id: "Doneee",
      tasks: ["reactq", "lintin"],
    },
  },
  tasks: {
    button: {
      title: "Create Button Components",
      id: "button",
      isArchive: true,
      // taskColumn: "Tudumm",
    },
    Inputs: {
      title: "Create Input Components",
      id: "Inputs",
      // taskColumn: "progre",
    },
    bugwss: {
      title: "Fix the Webpack Bug",
      id: "bugwss",
      // taskColumn: "Tudumm",
    },
    archiv: {
      title: "Add the Archive feature",
      id: "archiv",
      // taskColumn: "progre",
    },
    reactq: {
      title: "Migrate to react-query",
      id: "reactq",
      // taskColumn: "Doneee",
    },
    modals: {
      title: "Create Modal Component",
      id: "modals",
      // taskColumn: "Tudumm",
    },
    lintin: {
      title: "Fix the linting issue",
      id: "lintin",
      // taskColumn: "Doneee",
    },
  },
};
