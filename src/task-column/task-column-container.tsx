/** @jsxImportSource @theme-ui/core */
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { NewTaskColumn } from "./new-task-column";
import { TaskManagerAction } from "./types";

export interface TaskColumnContainerProps {
  id: string;
  children?: React.ReactNode;
  dispatch: React.Dispatch<TaskManagerAction>;
}
export const TaskColumnContainer: React.FC<TaskColumnContainerProps> = ({
  id,
  children,
  dispatch,
}) => {
  const onDragEnd = ({
    destination,
    source,
    draggableId,
    type,
  }: DropResult) => {
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    if (type === "task") {
      dispatch({
        type: "change-task-position",
        draggableId,
        source,
        destination,
      });
      return;
    }

    dispatch({
      type: "change-column-position",
      draggableId,
      source,
      destination,
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={id} direction="horizontal" type="column">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            sx={{
              display: "flex",
              "& > * + *": { marginLeft: "3" },
            }}
          >
            {children}
            {provided.placeholder}
            <NewTaskColumn />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
