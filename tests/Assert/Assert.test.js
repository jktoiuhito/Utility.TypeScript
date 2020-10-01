"use strict";

import { UnknownNullUndefinedAsserter } from "../../lib/Assert/UnknownNullUndefinedAsserter";
import { Assert } from "../../lib/Assert/Assert";

describe.each([
   null,
   undefined,
   1,
   2n,
   true,
   "string",
   Symbol("symbol"),
   { object: "object" },
])("Assert(value)", (value) => {
   test.each([undefined, "name"])("Value can be any type", (name) => {
      const asserter = Assert(value, name);

      expect(asserter.value).toBe(value);
   });

   test("Null name throws error", () => {
      const name = null;

      expect(() => {
         Assert(value, name);
      }).toThrow("Name cannot be null");
   });

   test.each([1, 2n, true, Symbol("symbol"), { object: "object" }])(
      "Non-string name throws error",
      (name) => {
         expect(() => {
            Assert(value, name);
         }).toThrow("Name must be a string");
      }
   );

   test("Empty name throws error", () => {
      const name = "";

      expect(() => {
         Assert(value, name);
      }).toThrow("Name cannot be empty");
   });

   test("Whitespace name throws error", () => {
      const name = " 　	\n\r";

      expect(() => {
         Assert(value, name);
      }).toThrow("Name cannot consist only of whitespace");
   });

   test.each([undefined, "name"])(
      "Returns UnknownNullUndefinedAsserter",
      (name) => {
         const asserter = Assert(value, name);

         expect(asserter instanceof UnknownNullUndefinedAsserter).toBeTruthy();
      }
   );

   test.each([undefined, "name"])(
      "Returned UnknownNullUndefinedAsserter has passed value",
      (name) => {
         const asserter = Assert(value, name);

         expect(asserter).toHaveProperty("_value", value);
      }
   );

   test.each([undefined, "name"])(
      "Returned UnknownNullUndefinedAsserter has passed name",
      (name) => {
         const asserter = Assert(value, name);

         expect(asserter).toHaveProperty("_name", name);
      }
   );
});
