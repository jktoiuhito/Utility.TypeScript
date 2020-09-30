"use strict";

import { ArgumentError, NotImplementedError } from "../../lib";

test("Undefined name does not print name", () => {
   const name = undefined;

   const expectedType = NotImplementedError;
   const expectedValue = "The function or method is not yet implemented";

   expect(() => {
      throw new NotImplementedError(name);
   }).toThrow(expectedType);
   expect(() => {
      throw new NotImplementedError(name);
   }).toThrow(expectedValue);
});

test("Null name does not print name", () => {
   const name = null;

   const expectedType = NotImplementedError;
   const expectedValue = "The function or method is not yet implemented";

   expect(() => {
      throw new NotImplementedError(name);
   }).toThrow(expectedType);
   expect(() => {
      throw new NotImplementedError(name);
   }).toThrow(expectedValue);
});

test("Non-string name throws exception", () => {
   const names = [
      1,
      2n,
      true,
      () => "function",
      { object: "object" },
      ["array"],
      Symbol("symbol"),
   ];

   const expected = new ArgumentError("Name must be of type string");

   names.forEach((name) => {
      expect(() => {
         throw new NotImplementedError(name);
      }).toThrow(expected);
   });
});

test("Empty name throws exception", () => {
   const name = "";

   const expected = new ArgumentError("Name cannot be empty");

   expect(() => {
      throw new NotImplementedError(name);
   }).toThrow(expected);
});

test("Whitespace name throws exception", () => {
   const name = " 　	\n\r";

   const expected = new ArgumentError("Name cannot consist only of whitespace");

   expect(() => {
      throw new NotImplementedError(name);
   }).toThrow(expected);
});

test("Name is trimmed", () => {
   const name = " 　name	\n\r";

   const expectedType = NotImplementedError;
   const expectedValue = "The function or method 'name' is not yet implemented";

   expect(() => {
      throw new NotImplementedError(name);
   }).toThrow(expectedType);
   expect(() => {
      throw new NotImplementedError(name);
   }).toThrow(expectedValue);
});
