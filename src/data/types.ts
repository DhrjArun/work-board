export interface Project {
  id: string;
  name: string;
  taskColumnsIndex: { [key: string]: number };
}

export interface TaskColumn {
  id: string;
  name: string;
  projectId: string;
  tasks: { id: string; title: string }[];
}

export interface Task {
  id: string;
  title: string;
  projectId: string;
  taskColumnId: string;
  description: string;
}
