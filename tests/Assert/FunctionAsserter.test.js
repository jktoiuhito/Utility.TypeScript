"use strict";

import { FunctionAsserter } from "../../lib/Assert/FunctionAsserter";
import * as Constants from "../Constants";

/**
 * constructor
 */
describe("Constructor", () => {
   describe.each([
      () => {
         /* empty */
      },
      () => "function",
      (param) => {
         param;
      },
      (param) => param,
   ])("Function value", (value) => {
      test.each([undefined, "name"])("Value can be function", (name) => {
         const asserter = new FunctionAsserter(value, name);

         expect(asserter).toHaveProperty("_value", value);
      });

      test("Null name throws error", () => {
         const name = null;

         expect(() => {
            new FunctionAsserter(value, name);
         }).toThrow("Name cannot be null");
      });

      test.each(Constants.NonNullStringUndefinedTypesExampleValues)(
         "Non-string name throws error",
         (name) => {
            expect(() => {
               new FunctionAsserter(value, name);
            }).toThrow("Name must be a string");
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
      test("Null value throws error", () => {
         const value = null;

         expect(() => {
            new FunctionAsserter(value, name);
         }).toThrow("Value cannot be null");
      });

      test("Undefined value throws error", () => {
         const value = undefined;

         expect(() => {
            new FunctionAsserter(value, name);
         }).toThrow("Value cannot be undefined");
      });

      test.each(Constants.NonFunctionNullUndefinedTypesExampleValues)(
         "Non-function value throws error",
         (value) => {
            expect(() => {
               new FunctionAsserter(value, name);
            }).toThrow("Value must be a function");
         }
      );
   });
});
