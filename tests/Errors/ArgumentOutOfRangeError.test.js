"use strict";

import { ArgumentError, ArgumentOutOfRangeError } from "../../lib";

test("Undefined name throws exception", () => {
   const name = undefined;

   const expected = new ArgumentError("Name cannot be undefined");

   expect(() => {
      throw new ArgumentOutOfRangeError(name);
   }).toThrow(expected);
});

test("Null name throws exception", () => {
   const name = null;

   const expected = new ArgumentError("Name cannot be null");

   expect(() => {
      throw new ArgumentOutOfRangeError(name);
   }).toThrow(expected);
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
         throw new ArgumentOutOfRangeError(name);
      }).toThrow(expected);
   });
});

test("Empty name throws exception", () => {
   const name = "";

   const expected = new ArgumentError("Name cannot be empty");

   expect(() => {
      throw new ArgumentOutOfRangeError(name);
   }).toThrow(expected);
});

test("Whitespace name throws exception", () => {
   const name = " 　	\n\r";

   const expected = new ArgumentError("Name cannot consist only of whitespace");

   expect(() => {
      throw new ArgumentOutOfRangeError(name);
   }).toThrow(expected);
});

test("Name is trimmed", () => {
   const name = " 　name	\n\r";

   const expectedType = ArgumentOutOfRangeError;
   const expectedValue = "Value of 'name' was outside the allowed range";

   expect(() => {
      throw new ArgumentOutOfRangeError(name);
   }).toThrow(expectedType);
   expect(() => {
      throw new ArgumentOutOfRangeError(name);
   }).toThrow(expectedValue);
});
