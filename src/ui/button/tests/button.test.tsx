import { Button } from "../button";
import { render, screen } from "@testing-library/react";
import {} from "@testing-library/jest-dom";

it("isFullWidth prop if true, button's width should be 100% of the parent's width", () => {
  render(<Button isFullWidth={true}>FullWidth</Button>);

  expect(screen.getByText("FullWidth")).toHaveStyle({ width: "100%" });
});

it("cursor should be `not-allowed` when disabled", () => {
  render(<Button disabled>disabled</Button>);

  expect(screen.getByText("disabled")).toHaveStyle({ cursor: "not-allowed" });
});
