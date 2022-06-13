import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TextField } from "./text-field";

it("Checking if sx props of TextField component is working or not", () => {
  render(<TextField placeholder="Name" sx={{ color: "green" }} />);

  expect(screen.getByPlaceholderText("Name")).toHaveStyle({ color: "green" });
});
