import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";
import { describe, expect, it } from "vitest";

describe("Welcome testing", () => {
  it("mounts the Welcome component correctly", () => {
    render(<Welcome />);
    const h1 = screen.getByText(/Benvenuti/i);
    expect(h1).toBeInTheDocument();
  });
});
