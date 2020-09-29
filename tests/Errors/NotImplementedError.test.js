"use strict";

import { NotImplementedError } from "../../lib";

const NAMELESS_MESSAGE = "The function or method is not yet implemented";
const NAMED_MESSAGE_START = "The function or method '";
const NAMED_MESSAGE_END = "' is not yet implemented";

test("Undefined name does not print name", () => {
   const name = undefined;

   expect(() => {
      throw new NotImplementedError(name);
   }).toThrow(NAMELESS_MESSAGE);
});

test("Null name does not print name", () => {
   const name = null;

   expect(() => {
      throw new NotImplementedError(name);
   }).toThrow(NAMELESS_MESSAGE);
});

test("Empty name does not print name", () => {
   const name = "";

   expect(() => {
      throw new NotImplementedError(name);
   }).toThrow(NAMELESS_MESSAGE);
});

test("Whitespace name does not print name", () => {
   const name = " 　	\n\r";

   expect(() => {
      throw new NotImplementedError(name);
   }).toThrow(NAMELESS_MESSAGE);
});

test("Name is trimmed", () => {
   const name = " 　name	\n\r";
   const expected = NAMED_MESSAGE_START + "name" + NAMED_MESSAGE_END;

   expect(() => {
      throw new NotImplementedError(name);
   }).toThrow(expected);
});
