import { TaskManagerReducer, TaskMangerState } from "./types";

export const reducer: TaskManagerReducer = (state, action) => {
  let _state: TaskMangerState;
  switch (action.type) {
    case "create-new-task":
      _state = { ...state };
      _state.taskColumns[action.taskColumnId].tasks.push(action.task.id);
      _state.tasks[action.task.id] = action.task;
      break;
    case "update-task-title":
      _state = { ...state };
      _state.tasks[action.id].title = action.newTitle;
      break;
    case "create-new-task-column":
      _state = { ...state };
      _state.project.taskColumns.push(action.taskColumn.id);
      _state.taskColumns[action.taskColumn.id] = action.taskColumn;
      break;
    case "delete-task":
      _state = { ...state };
      const taskIds = [..._state.taskColumns[action.taskColumnId].tasks];
      const _taskIds = taskIds.filter((id) => action.taskId !== id);
      _state.taskColumns[action.taskColumnId].tasks = _taskIds;
      break;
    case "add-to-archive":
      _state = { ...state };
      const addedTask = { ...state.tasks[action.id], isArchive: true };
      _state.tasks[action.id] = addedTask;
      break;
    case "remove-from-archive":
      _state = { ...state };
      const removedTask = { ...state.tasks[action.id], isArchive: false };
      _state.tasks[action.id] = removedTask;
      break;
    case "change-task-position":
      _state = { ...state };
      const isSameColumn =
        action.source.droppableId === action.destination.droppableId;

      let sourceIds;
      let destIds;

      sourceIds = [...state.taskColumns[action.source.droppableId].tasks];
      if (isSameColumn) {
        destIds = sourceIds;
      } else {
        destIds = [...state.taskColumns[action.destination.droppableId].tasks];
      }
      sourceIds.splice(action.source.index, 1);
      destIds.splice(action.destination.index, 0, action.draggableId);

      _state.taskColumns[action.source.droppableId].tasks = sourceIds;
      _state.taskColumns[action.destination.droppableId].tasks = destIds;

      break;
    case "change-column-position":
      _state = { ...state };

      const newIds = [...state.project.taskColumns];
      newIds.splice(action.source.index, 1);
      newIds.splice(action.destination.index, 0, action.draggableId);

      _state.project.taskColumns = newIds;
      break;
    default:
      throw new Error();
  }
  return _state;
};
