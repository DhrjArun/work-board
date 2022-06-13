import {
  Listbox,
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
  ListboxProps,
  ListboxInputProps,
} from "@reach/listbox";
import "@reach/listbox/styles.css";

export interface ListBoxInputProps extends 
export const ListboxInput = React.forwardRef<HTMLInputElement, ListboxInputProps> = (({}, ref) => {
    return <ListboxInput />
})