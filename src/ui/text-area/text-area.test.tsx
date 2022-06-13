import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TextArea } from "./text-area";

it("Checking if sx props of TextArea component is working or not", () => {
  render(<TextArea placeholder="Name" sx={{ color: "green" }} />);

  expect(screen.getByPlaceholderText("Name")).toHaveStyle({ color: "green" });
});
