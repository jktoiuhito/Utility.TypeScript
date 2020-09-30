"use strict";

import { ArgumentError } from "../../lib";

describe.each([undefined, null, "name"])("constructor: reason", (name) => {
   test("Undefined reason throws error", () => {
      const reason = undefined;

      const expected = new ArgumentError("Reason cannot be undefined");

      expect(() => {
         throw new ArgumentError(reason, name);
      }).toThrow(expected);
   });

   test("Null reason throws error", () => {
      const reason = null;

      const expected = new ArgumentError("Reason cannot be null");

      expect(() => {
         throw new ArgumentError(reason, name);
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
   ])("Non-string reason throws error", (reason) => {
      const expected = new ArgumentError("Reason must be of type string");

      expect(() => {
         throw new ArgumentError(reason, name);
      }).toThrow(expected);
   });

   test("Empty reason throws error", () => {
      const reason = "";

      const excepted = new ArgumentError("Reason cannot be empty");

      expect(() => {
         throw new ArgumentError(reason, name);
      }).toThrow(excepted);
   });

   test("Whitespace reason throws error", () => {
      const reason = " 　	\n\r";

      const expected = new ArgumentError(
         "Reason cannot only consist of whitespace"
      );

      expect(() => {
         throw new ArgumentError(reason, name);
      }).toThrow(expected);
   });

   test("Reason is trimmed", () => {
      const reason = " 　reason	\n\r";

      const expected = new ArgumentError((name ? name + ": " : "") + "reason");

      expect(() => {
         throw new ArgumentError(reason, name);
      }).toThrow(expected);
   });
});

describe("constructor: paramName", () => {
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

   test.each([
      ["reason", 1],
      ["reason", 2n],
      ["reason", true],
      ["reason", () => "function"],
      ["reason", { object: "object" }],
      ["reason", ["array"]],
      ["reason", Symbol("symbol")],
   ])("Non-string name throws error", (reason, name) => {
      const expected = new ArgumentError("Name must be of type string");

      expect(() => {
         throw new ArgumentError(reason, name);
      }).toThrow(expected);
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

      const expected = new ArgumentError(
         "Name cannot only consist of whitespace"
      );

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
});
