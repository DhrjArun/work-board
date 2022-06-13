/** @jsxImportSource @theme-ui/core */
import {
  Listbox,
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
} from "@reach/listbox";
import { SlideFade } from "@chakra-ui/transition";
import "@reach/listbox/styles.css";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "ui/listbox",
  component: Listbox,
} as ComponentMeta<typeof Listbox>;

export const withInput = () => {
  return (
    <ListboxInput>
      {({ value, valueLabel, isExpanded }) => (
        <>
          <ListboxButton sx={{ width: "40%", ":focus": { outline: "none" } }} />
          <SlideFade in={isExpanded} offsetY="-15px">
            <ListboxPopover
              sx={{
                mt: "1",
                border: "0",
                bg: "transparent",
                boxShadow: "unset",
                ":focus-within": { outline: "none", border: "0" },
              }}
            >
              <div>
                <ListboxList>
                  <ListboxOption value="apple">Apple 🍏</ListboxOption>
                  <ListboxOption value="orange">Orange 🍊</ListboxOption>
                  <ListboxOption value="banana">Banana 🍌</ListboxOption>
                </ListboxList>
              </div>
            </ListboxPopover>
          </SlideFade>
        </>
      )}
    </ListboxInput>
  );
};

export const withoutInput = () => {
  return (
    <Listbox defaultValue="popeyes">
      <ListboxOption value="bojangles">Bojangles'</ListboxOption>
      <ListboxOption value="churchs">Church's</ListboxOption>
      <ListboxOption value="kfc">KFC</ListboxOption>
      <ListboxOption value="popeyes">Popeyes</ListboxOption>
    </Listbox>
  );
};
