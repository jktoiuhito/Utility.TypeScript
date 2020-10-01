"use strict";

import { UnknownNullAsserter } from "../../lib/Assert/UnknownNullAsserter";

describe.each([
   null,
   1,
   2n,
   true,
   "string",
   Symbol("symbol"),
   { object: "object" },
])("Constructor", (value) => {
   test.each([undefined, "name"])(
      "Value can be any type but undefined",
      (name) => {
         const asserter = new UnknownNullAsserter(value, name);

         expect(asserter).toHaveProperty("_value", value);
      }
   );

   test("Null name throws error", () => {
      const name = null;

      expect(() => {
         new UnknownNullAsserter(value, name);
      }).toThrow("Name cannot be null");
   });

   test.each([1, 2n, true, Symbol("symbol"), { object: "object" }])(
      "Non-string name throws error",
      (name) => {
         expect(() => {
            new UnknownNullAsserter(value, name);
         }).toThrow("Name must be a string");
      }
   );

   test("Empty name throws error", () => {
      const name = "";

      expect(() => {
         new UnknownNullAsserter(value, name);
      }).toThrow("Name cannot be empty");
   });

   test("Whitespace name throws error", () => {
      const name = " 　	\n\r";

      expect(() => {
         new UnknownNullAsserter(value, name);
      }).toThrow("Name cannot consist only of whitespace");
   });

   test.each(["name", "name 　	\n\r", " 　	\n\rname", " 　name	\n\r"])(
      "Name is trimmed",
      (name) => {
         const asserter = new UnknownNullAsserter(value, name);

         expect(asserter).toHaveProperty("_name", "name");
      }
   );
});

describe("Constructor: undefined value", () => {
   test.each([undefined, "name"])("Undefined value throws error", (name) => {
      const value = undefined;

      expect(() => {
         new UnknownNullAsserter(value, name);
      }).toThrow("Value cannot be undefined");
   });
});
