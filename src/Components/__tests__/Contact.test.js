import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Test Cases", () => {
  test("should load component contact us", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("should load button in component contact us", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
  // IT and Test is same
  it("check 2 inputs in component contact us", () => {
    render(<Contact />);

    const inputboxes = screen.getAllByRole("textbox");

    expect(inputboxes.length).toBe(2);
  });
});
