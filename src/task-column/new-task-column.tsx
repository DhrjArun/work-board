/** @jsxImportSource @theme-ui/core */
import { IconButton } from "ui";
import { Plus } from "react-feather";

export interface NewTaskColumnProps {}
export const NewTaskColumn: React.FC<NewTaskColumnProps> = () => {
  return <IconButton icon={<Plus />} />;
};
