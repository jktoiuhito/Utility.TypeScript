"use strict";

import { ArgumentError, NullUndefinedReturnValueError } from "../../lib";

describe("constructor", () => {
   test("Undefined name throws exception", () => {
      const name = undefined;

      const expected = new ArgumentError("functionName cannot be undefined");

      expect(() => {
         throw new NullUndefinedReturnValueError(name);
      }).toThrow(expected);
   });

   test("Null name throws exception", () => {
      const name = null;

      const expected = new ArgumentError("functionName cannot be null");

      expect(() => {
         throw new NullUndefinedReturnValueError(name);
      }).toThrow(expected);
   });

   test.each([
      1,
      2n,
      true,
      () => "function",
      { object: "object" },
      ["array"],
      Symbol("symbol"),
   ])("Non-string name throws exception", (name) => {
      const expected = new ArgumentError("functionName must be of type string");

      expect(() => {
         throw new NullUndefinedReturnValueError(name);
      }).toThrow(expected);
   });

   test("Empty name throws exception", () => {
      const name = "";

      const expected = new ArgumentError("functionName cannot be empty");

      expect(() => {
         throw new NullUndefinedReturnValueError(name);
      }).toThrow(expected);
   });

   test("Whitespace name throws exception", () => {
      const name = " 　	\n\r";

      const expected = new ArgumentError(
         "functionName cannot consist only of whitespace"
      );

      expect(() => {
         throw new NullUndefinedReturnValueError(name);
      }).toThrow(expected);
   });

   test("Name is trimmed", () => {
      const name = " 　name	\n\r";

      const expectedType = NullUndefinedReturnValueError;
      const expectedValue = "Function 'name' returned null or undefined";

      expect(() => {
         throw new NullUndefinedReturnValueError(name);
      }).toThrow(expectedType);
      expect(() => {
         throw new NullUndefinedReturnValueError(name);
      }).toThrow(expectedValue);
   });
});
