"use strict";

import { NumberAsserter } from "../../lib/Assert/NumberAsserter";
import * as Constants from "../Constants";

/**
 * constructor
 */
describe("Constructor", () => {
   describe.each([1, -1, 3.1415, -273.15])("Number value", (value) => {
      test.each([undefined, "name"])("Value can be number", (name) => {
         const asserter = new NumberAsserter(value, name);

         expect(asserter).toHaveProperty("_value", value);
      });

      test("Null name throws error", () => {
         const name = null;

         expect(() => {
            new NumberAsserter(value, name);
         }).toThrow("Name cannot be null");
      });

      test.each(Constants.NonNullStringUndefinedTypesExampleValues)(
         "Non-string name throws error",
         (name) => {
            expect(() => {
               new NumberAsserter(value, name);
            }).toThrow("Name must be a string");
         }
      );

      test("Empty name throws error", () => {
         const name = "";

         expect(() => {
            new NumberAsserter(value, name);
         }).toThrow("Name cannot be empty");
      });

      test("Whitespace name throws error", () => {
         const name = " 　	\n\r";

         expect(() => {
            new NumberAsserter(value, name);
         }).toThrow("Name cannot consist only of whitespace");
      });

      test.each(["name", "name 　	\n\r", " 　	\n\rname", " 　name	\n\r"])(
         "Name is trimmed",
         (name) => {
            const asserter = new NumberAsserter(value, name);

            expect(asserter).toHaveProperty("_name", "name");
         }
      );
   });

   describe.each([undefined, "name"])("Non-number value", (name) => {
      test("Null value throws error", () => {
         const value = null;

         expect(() => {
            new NumberAsserter(value, name);
         }).toThrow("Value cannot be null");
      });

      test("Undefined value throws error", () => {
         const value = undefined;

         expect(() => {
            new NumberAsserter(value, name);
         }).toThrow("Value cannot be undefined");
      });

      test.each(Constants.NonNullNumberUndefinedTypesExampleValues)(
         "Non-number value throws error",
         (value) => {
            expect(() => {
               new NumberAsserter(value, name);
            }).toThrow("Value must be a number");
         }
      );
   });
});
