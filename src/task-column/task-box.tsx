/** @jsxImportSource @theme-ui/core */

import { Draggable } from "react-beautiful-dnd";

export interface TaskBoxProps {
  id: string;
  title: string;
  index: number;
}
export const TaskBox: React.FC<TaskBoxProps> = ({ id, title, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          sx={{
            boxSizing: "border-box",
            width: "full",
            height: "max-content",
            background: "white",
            boxShadow: "sm",
            px: "2",
            py: "2",
            mb: "2",
          }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {title}
        </div>
      )}
    </Draggable>
  );
};
