"use strict";

import { StringAsserter } from "../../lib/Assert/StringAsserter";
import * as Constants from "../Constants";

/**
 * constructor
 */
describe("Constructor", () => {
   describe.each(["", " 　	\n\r", "string", " 　string	\n\r"])(
      "String value",
      (value) => {
         test.each([undefined, "name"])("Value can be string", (name) => {
            const asserter = new StringAsserter(value, name);

            expect(asserter).toHaveProperty("_value", value);
         });

         test("Null name throws error", () => {
            const name = null;

            expect(() => {
               new StringAsserter(value, name);
            }).toThrow("Name cannot be null");
         });

         test.each(Constants.NonNullStringUndefinedTypesExampleValues)(
            "Non-string name throws error",
            (name) => {
               expect(() => {
                  new StringAsserter(value, name);
               }).toThrow("Name must be a string");
            }
         );

         test("Empty name throws error", () => {
            const name = "";

            expect(() => {
               new StringAsserter(value, name);
            }).toThrow("Name cannot be empty");
         });

         test("Whitespace name throws error", () => {
            const name = " 　	\n\r";

            expect(() => {
               new StringAsserter(value, name);
            }).toThrow("Name cannot consist only of whitespace");
         });

         test.each(["name", "name 　	\n\r", " 　	\n\rname", " 　name	\n\r"])(
            "Name is trimmed",
            (name) => {
               const asserter = new StringAsserter(value, name);

               expect(asserter).toHaveProperty("_name", "name");
            }
         );
      }
   );

   describe.each([undefined, "name"])("Non-string value", (name) => {
      test("Null value throws error", () => {
         const value = null;

         expect(() => {
            new StringAsserter(value, name);
         }).toThrow("Value cannot be null");
      });

      test("Undefined value throws error", () => {
         const value = undefined;

         expect(() => {
            new StringAsserter(value, name);
         }).toThrow("Value cannot be undefined");
      });

      test.each(Constants.NonNullStringUndefinedTypesExampleValues)(
         "Non-string value throws error",
         (value) => {
            expect(() => {
               new StringAsserter(value, name);
            }).toThrow("Value must be a string");
         }
      );
   });
});
