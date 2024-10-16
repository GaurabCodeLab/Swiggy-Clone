import { render, screen } from "@testing-library/react";
import Grocery from "../components/Grocery";
import "@testing-library/jest-dom";

describe("It should test grocery component", () => {
  it("should render grocery component with button", () => {
    render(<Grocery />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  it("should render button component", () => {
    render(<Grocery />);
    const button = screen.getByRole("button", { name: "Click me!!!" });
    expect(button).toBeInTheDocument();
    const btn = screen.getAllByRole("button", { name: "Click me!!!" });
    expect(btn.length).not.toBe(2);
  });
});
