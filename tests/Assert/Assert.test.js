"use strict";

import { UnknownAsserter } from "../../lib/Assert/UnknownAsserter";
import { Assert } from "../../lib/Assert/Assert";
import * as Constants from "../Constants";

describe.each(Constants.ExampleAllTypes)("Assert(value)", (value) => {
   test.each([undefined, "name"])("Value can be any type", (name) => {
      const asserter = Assert(value, name);

      expect(asserter.value).toBe(value);
   });

   test("Undefined name is set", () => {
      const name = undefined;
      const asserter = Assert(value, name);

      expect(asserter).toHaveProperty("_name", name);
   });

   test.each(Constants.ExampleNotStringUndefinedTypes)(
      "Non-string/undefined name throws error",
      (name) => {
         expect(() => {
            Assert(value, name);
         }).toThrow("Name must be of type string or undefined");
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

   test.each([undefined, "name"])("Returns UnknownAsserter", (name) => {
      const asserter = Assert(value, name);

      expect(asserter instanceof UnknownAsserter).toBeTruthy();
   });

   // having the same value is already tested on first test.

   test.each([undefined, "name"])(
      "Returned UnknownAsserter has passed name",
      (name) => {
         const asserter = Assert(value, name);

         expect(asserter).toHaveProperty("_name", name);
      }
   );
});
