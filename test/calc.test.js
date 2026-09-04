import { test } from "node:test";
import assert from "node:assert";
import { addition, multiplication } from "../src/calc.js";

test("addition de deux nombres", () => {
  assert.strictEqual(addition(2, 3), 5);
});

test("multiplication de deux nombres", () => {
  assert.strictEqual(multiplication(4, 5), 20);
});
