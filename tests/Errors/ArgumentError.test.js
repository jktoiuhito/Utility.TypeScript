"use strict";

import { ArgumentError } from "../../lib";

// reason

test("Undefined reason throws error", () => {
   const reason = undefined;
   const name = undefined;

   const expected = new ArgumentError("Reason cannot be undefined");

   expect(() => {
      throw new ArgumentError(reason, name);
   }).toThrow(expected);
});

test("Null reason throws error", () => {
   const reason = null;
   const name = undefined;

   const expected = new ArgumentError("Reason cannot be null");

   expect(() => {
      throw new ArgumentError(reason, name);
   }).toThrow(expected);
});

test("Non-string reason throws error", () => {
   const reasons = [
      1,
      2n,
      true,
      () => "function",
      { object: "object" },
      ["array"],
      Symbol("symbol"),
   ];
   const name = undefined;

   const expected = new ArgumentError("Reason must be of type string");

   reasons.forEach((reason) => {
      expect(() => {
         throw new ArgumentError(reason, name);
      }).toThrow(expected);
   });
});

test("Empty reason throws error", () => {
   const reason = "";
   const name = undefined;

   const excepted = new ArgumentError("Reason cannot be empty");

   expect(() => {
      throw new ArgumentError(reason, name);
   }).toThrow(excepted);
});

test("Whitespace reason throws error", () => {
   const reason = " 　	\n\r";
   const name = undefined;

   const expected = new ArgumentError(
      "Reason cannot only consist of whitespace"
   );

   expect(() => {
      throw new ArgumentError(reason, name);
   }).toThrow(expected);
});

test("Reason is trimmed", () => {
   const reason = " 　reason	\n\r";
   const name = undefined;

   const expected = new ArgumentError("reason");

   expect(() => {
      throw new ArgumentError(reason, name);
   }).toThrow(expected);
});

// name

test("Undefined name does not print name", () => {
   const reason = "reason";
   const name = undefined;

   const expected = new ArgumentError(reason);

   expect(() => {
      throw new ArgumentError(reason, name);
   }).toThrow(expected);
});

test("Null name does not print name", () => {
   const reason = "reason";
   const name = null;

   const expected = new ArgumentError(reason);

   expect(() => {
      throw new ArgumentError(reason, name);
   }).toThrow(expected);
});

test("Non-string name throws error", () => {
   const reason = "reason";
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
         throw new ArgumentError(reason, name);
      }).toThrow(expected);
   });
});

test("Empty name throws exception", () => {
   const reason = "reason";
   const name = "";

   const expected = new ArgumentError("Name cannot be empty");

   expect(() => {
      throw new ArgumentError(reason, name);
   }).toThrow(expected);
});

test("Whitespace name throws exception", () => {
   const reason = "reason";
   const name = " 　	\n\r";

   const expected = new ArgumentError("Name cannot only consist of whitespace");

   expect(() => {
      throw new ArgumentError(reason, name);
   }).toThrow(expected);
});

test("Name is trimmed", () => {
   const reason = "reason";
   const name = " 　name	\n\r";

   const expectedType = ArgumentError;
   const expectedValue = "name: reason";

   expect(() => {
      throw new ArgumentError(reason, name);
   }).toThrow(expectedType);
   expect(() => {
      throw new ArgumentError(reason, name);
   }).toThrow(expectedValue);
});
