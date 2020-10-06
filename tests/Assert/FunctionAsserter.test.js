"use strict";

import { FunctionAsserter } from "../../lib/Assert/FunctionAsserter";
import * as Constants from "../Constants";

/**
 * constructor
 */
describe("Constructor", () => {
   describe.each(Constants.ExampleFunctions)("Function value", (value) => {
      test.each([undefined, "name"])("Value can be function", (name) => {
         const asserter = new FunctionAsserter(value, name);

         expect(asserter.value).toBe(value);
      });

      test("Undefined name is set", () => {
         const name = undefined;
         const asserter = new FunctionAsserter(value, name);

         expect(asserter).toHaveProperty("_name", name);
      });

      test.each(Constants.ExampleNotStringUndefinedTypes)(
         "Non-string/undefined name throws error",
         (name) => {
            expect(() => {
               new FunctionAsserter(value, name);
            }).toThrow("Name must be of type string or undefined");
         }
      );

      test("Empty name throws error", () => {
         const name = "";

         expect(() => {
            new FunctionAsserter(value, name);
         }).toThrow("Name cannot be empty");
      });

      test("Whitespace name throws error", () => {
         const name = " 　	\n\r";

         expect(() => {
            new FunctionAsserter(value, name);
         }).toThrow("Name cannot consist only of whitespace");
      });

      test.each(["name", "name 　	\n\r", " 　	\n\rname", " 　name	\n\r"])(
         "Name is trimmed",
         (name) => {
            const asserter = new FunctionAsserter(value, name);

            expect(asserter).toHaveProperty("_name", "name");
         }
      );
   });

   describe.each([undefined, "name"])("Non-function value", (name) => {
      test.each(Constants.ExampleNotFunctionTypes)(
         "Non-function value throws error",
         (value) => {
            expect(() => {
               new FunctionAsserter(value, name);
            }).toThrow("Value must be of type function");
         }
      );
   });
});

/**
 * Immutability
 */
describe.each([Constants.ExampleFunctions])("Immutability", (value) => {
   test.each([undefined, "name"])("Object is frozen", (name) => {
      const asserter = new FunctionAsserter(value, name);

      expect(Object.isFrozen(asserter)).toBeTruthy();
   });
});
