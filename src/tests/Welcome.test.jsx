import { render, screen } from "@testing-library/react";
import Welcome from "./components/Welcome";
import { describe, expect, it } from "vitest";

describe("Welcome component", () => {
  it("renders without crashing", () => {
    render(<Welcome />);
    const welcomeElement = screen.getByText(/Benvenuti in EpiBooks!/i);
    expect(welcomeElement).toBeInTheDocument();
  });
});
