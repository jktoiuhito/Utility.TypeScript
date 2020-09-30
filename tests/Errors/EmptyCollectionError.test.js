"use strict";

import { ArgumentError, EmptyCollectionError } from "../../lib";

describe("constructor", () => {
   test("Undefined name throws exception", () => {
      const name = undefined;

      const expected = new ArgumentError("Name cannot be undefined");

      expect(() => {
         throw new EmptyCollectionError(name);
      }).toThrow(expected);
   });

   test("Null name throws exception", () => {
      const name = null;

      const expected = new ArgumentError("Name cannot be null");

      expect(() => {
         throw new EmptyCollectionError(name);
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
      const expected = new ArgumentError("Name must be of type string");

      expect(() => {
         throw new EmptyCollectionError(name);
      }).toThrow(expected);
   });

   test("Empty name throws exception", () => {
      const name = "";

      const expected = new ArgumentError("Name cannot be empty");

      expect(() => {
         throw new EmptyCollectionError(name);
      }).toThrow(expected);
   });

   test("Whitespace name throws exception", () => {
      const name = " 　	\n\r";

      const expected = new ArgumentError(
         "Name cannot consist only of whitespace"
      );

      expect(() => {
         throw new EmptyCollectionError(name);
      }).toThrow(expected);
   });

   test("Name is trimmed", () => {
      const name = " 　name	\n\r";

      const expectedType = EmptyCollectionError;
      const expectedValue = "Collection 'name' cannot be empty";

      expect(() => {
         throw new EmptyCollectionError(name);
      }).toThrow(expectedType);
      expect(() => {
         throw new EmptyCollectionError(name);
      }).toThrow(expectedValue);
   });
});
