/** @jsxImportSource @theme-ui/core */
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { NewTaskColumn } from "./new-task-column";

export interface TaskColumnContainerProps {
  id: string;
  children?: React.ReactNode;
}
export const TaskColumnContainer: React.FC<TaskColumnContainerProps> = ({
  id,
  children,
}) => {
  return (
    <DragDropContext onDragEnd={() => {}}>
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
