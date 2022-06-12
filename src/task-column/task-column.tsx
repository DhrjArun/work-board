/** @jsxImportSource @theme-ui/core */
import { NewTask } from "./new-task";
import { Droppable, Draggable } from "react-beautiful-dnd";

export interface TaskColumnProps {
  label: string;
  id: string;
  index: number;
  size: number;
  children?: React.ReactNode;
}
export const TaskColumn: React.FC<TaskColumnProps> = ({
  label,
  children,
  size,
  id,
  index,
}) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="task-column"
          sx={{
            width: "64",
            minHeight: "56",
            background: "gray.2",
            padding: "2",
            display: "grid",
            gridTemplateColumns: "100%",
            gridTemplateRows: "max-content 1fr 4rem",
            ":not(:hover) .new-task-btn": {
              display: "none",
            },
          }}
        >
          <header
            {...provided.dragHandleProps}
            sx={{ color: "gray.7", pt: "2", pb: "3" }}
          >
            <p sx={{ m: "0" }}>
              {label} {size} Task
            </p>
          </header>
          <Droppable droppableId={id} type="task">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {children}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <footer sx={{ alignSelf: "end" }}>
            <NewTask />
          </footer>
        </div>
      )}
    </Draggable>
  );
};
