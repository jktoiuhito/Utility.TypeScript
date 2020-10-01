"use strict";

import { UnknownAsserter } from "../../lib/Assert/UnknownAsserter";
import * as Constants from "../Constants";

/**
 * constructor
 */
describe("Constructor", () => {
   describe.each(Constants.NonNullUndefinedTypesExampleValues)(
      "Non-undefined/null value",
      (value) => {
         test.each([undefined, "name"])(
            "Value can be any type but undefined or null",
            (name) => {
               const asserter = new UnknownAsserter(value, name);

               expect(asserter).toHaveProperty("_value", value);
            }
         );

         test("Null name throws error", () => {
            const name = null;

            expect(() => {
               new UnknownAsserter(value, name);
            }).toThrow("Name cannot be null");
         });

         test.each(Constants.NonNullStringUndefinedTypesExampleValues)(
            "Non-string name throws error",
            (name) => {
               expect(() => {
                  new UnknownAsserter(value, name);
               }).toThrow("Name must be a string");
            }
         );

         test("Empty name throws error", () => {
            const name = "";

            expect(() => {
               new UnknownAsserter(value, name);
            }).toThrow("Name cannot be empty");
         });

         test("Whitespace name throws error", () => {
            const name = " 　	\n\r";

            expect(() => {
               new UnknownAsserter(value, name);
            }).toThrow("Name cannot consist only of whitespace");
         });

         test.each(["name", "name 　	\n\r", " 　	\n\rname", " 　name	\n\r"])(
            "Name is trimmed",
            (name) => {
               const asserter = new UnknownAsserter(value, name);

               expect(asserter).toHaveProperty("_name", "name");
            }
         );
      }
   );

   describe.each([undefined, "name"])("Null/undefined value", (name) => {
      test("Null value throws error", () => {
         const value = null;

         expect(() => {
            new UnknownAsserter(value, name);
         }).toThrow("Value cannot be null");
      });

      test("Undefined value throws error", () => {
         const value = undefined;

         expect(() => {
            new UnknownAsserter(value, name);
         }).toThrow("Value cannot be undefined");
      });
   });
});
