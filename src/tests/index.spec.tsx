import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { sum } from "./sum";
import { sayHello } from "./sayHello";
import { App } from "../App";

test("adds two numbers and returns the result", () => {
  const result = sum(1, 2);
  const expectedResult = 3;

  expect(result).toBe(expectedResult);
});

describe("sayHello", () => {
  test("returns greeting with specified name", () => {
    expect(sayHello("Knur")).toBe("Hello, Knur");
  });

  test("returns empty greeting when the name is not specified", () => {
    expect(sayHello()).toBe("Hello");
  });
});

describe.skip("App", () => {
  test("renders title", () => {
    render(<App />);
    screen.getByText("KNUR + REACT");
  });

  test("renders button", () => {
    render(<App />);
    screen.getByRole("button", { name: "click!" });
  });
});
