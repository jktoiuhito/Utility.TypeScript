"use strict";

import { UnknownUndefinedAsserter } from "../../lib/Assert/UnknownUndefinedAsserter";

describe.each([
   undefined,
   1,
   2n,
   true,
   "string",
   Symbol("symbol"),
   { object: "object" },
])("Constructor", (value) => {
   test.each([undefined, "name"])("Value can be any type but null", (name) => {
      const asserter = new UnknownUndefinedAsserter(value, name);

      expect(asserter).toHaveProperty("_value", value);
   });

   test("Null name throws error", () => {
      const name = null;

      expect(() => {
         new UnknownUndefinedAsserter(value, name);
      }).toThrow("Name cannot be null");
   });

   test.each([1, 2n, true, Symbol("symbol"), { object: "object" }])(
      "Non-string name throws error",
      (name) => {
         expect(() => {
            new UnknownUndefinedAsserter(value, name);
         }).toThrow("Name must be a string");
      }
   );

   test("Empty name throws error", () => {
      const name = "";

      expect(() => {
         new UnknownUndefinedAsserter(value, name);
      }).toThrow("Name cannot be empty");
   });

   test("Whitespace name throws error", () => {
      const name = " 　	\n\r";

      expect(() => {
         new UnknownUndefinedAsserter(value, name);
      }).toThrow("Name cannot consist only of whitespace");
   });

   test.each(["name", "name 　	\n\r", " 　	\n\rname", " 　name	\n\r"])(
      "Name is trimmed",
      (name) => {
         const asserter = new UnknownUndefinedAsserter(value, name);

         expect(asserter).toHaveProperty("_name", "name");
      }
   );
});

describe("Constructor: null value", () => {
   test.each([undefined, "name"])("Null value throws error", (name) => {
      const value = null;

      expect(() => {
         new UnknownUndefinedAsserter(value, name);
      }).toThrow("Value cannot be null");
   });
});
