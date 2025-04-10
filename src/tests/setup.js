import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";
import { describe, expect, it } from "vitest";

describe("welcome component", () => {
  it("render without crash", () => {
    render(<Welcome />);
    const welcomeElement = screen.getByText(/welcome/i);
    expect(welcomeElement).toBeInTheDocument();
  });
});
