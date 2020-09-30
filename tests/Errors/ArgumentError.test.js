"use strict";

const REASON_IS_UNDEFINED = "Reason cannot be undefined";
const REASON_IS_NULL = "Reason cannot be null";
const REASON_IS_EMPTY = "Reason cannot be empty";
const REASON_IS_WHITESPACE = "Reason cannot only consist of whitespace";
const NAME_IS_EMPTY = "Name cannot be empty";
const NAME_IS_WHITESPACE = "Name cannot only consist of whitespace";

import { ArgumentError } from "../../lib";

// reason

test("Undefined reason throws error", () => {
   const reason = undefined;
   const name = undefined;

   expect(() => {
      throw new ArgumentError(reason, name);
   }).toThrow(REASON_IS_UNDEFINED);
});

test("Null reason throws error", () => {
   const reason = null;
   const name = undefined;

   expect(() => {
      throw new ArgumentError(reason, name);
   }).toThrow(REASON_IS_NULL);
});

test("Empty reason throws error", () => {
   const reason = "";
   const name = undefined;

   expect(() => {
      throw new ArgumentError(reason, name);
   }).toThrow(REASON_IS_EMPTY);
});

test("Whitespace reason throws error", () => {
   const reason = " 　	\n\r";
   const name = undefined;

   expect(() => {
      throw new ArgumentError(reason, name);
   }).toThrow(REASON_IS_WHITESPACE);
});

test("Reason is trimmed", () => {
   const reason = " 　reason	\n\r";
   const name = undefined;

   const expected = "reason";

   expect(() => {
      throw new ArgumentError(reason, name);
   }).toThrow(expected);
});

// name

test("Undefined name does not print name", () => {
   const reason = "reason";
   const name = undefined;
   const expected = "reason";

   expect(() => {
      throw new ArgumentError(reason, name);
   }).toThrow(expected);
});

test("Null name does not print name", () => {
   const reason = "reason";
   const name = null;
   const expected = "reason";

   expect(() => {
      throw new ArgumentError(reason, name);
   }).toThrow(expected);
});

test("Empty name throws exception", () => {
   const reason = "reason";
   const name = "";

   expect(() => {
      throw new ArgumentError(reason, name);
   }).toThrow(NAME_IS_EMPTY);
});

test("Whitespace name throws exception", () => {
   const reason = "reason";
   const name = " 　	\n\r";

   expect(() => {
      throw new ArgumentError(reason, name);
   }).toThrow(NAME_IS_WHITESPACE);
});

test("Name is trimmed", () => {
   const reason = "reason";
   const name = " 　name	\n\r";

   const expected = "name: reason";

   expect(() => {
      throw new ArgumentError(reason, name);
   }).toThrow(expected);
});
