"use strict";

import { BigIntAsserter } from "../../lib/Assert/BigIntAsserter";
import * as Constants from "../Constants";

/**
 * constructor
 */
describe("Constructor", () => {
   describe.each([1n, 1024n, 1125899906842624n])("BigInt value", (value) => {
      test.each([undefined, "name"])("Value can be BigInt", (name) => {
         const asserter = new BigIntAsserter(value, name);

         expect(asserter).toHaveProperty("_value", value);
      });

      test("Null name throws error", () => {
         const name = null;

         expect(() => {
            new BigIntAsserter(value, name);
         }).toThrow("Name cannot be null");
      });

      test.each(Constants.NonNullStringUndefinedTypesExampleValues)(
         "Non-string name throws error",
         (name) => {
            expect(() => {
               new BigIntAsserter(value, name);
            }).toThrow("Name must be a string");
         }
      );

      test("Empty name throws error", () => {
         const name = "";

         expect(() => {
            new BigIntAsserter(value, name);
         }).toThrow("Name cannot be empty");
      });

      test("Whitespace name throws error", () => {
         const name = " 　	\n\r";

         expect(() => {
            new BigIntAsserter(value, name);
         }).toThrow("Name cannot consist only of whitespace");
      });

      test.each(["name", "name 　	\n\r", " 　	\n\rname", " 　name	\n\r"])(
         "Name is trimmed",
         (name) => {
            const asserter = new BigIntAsserter(value, name);

            expect(asserter).toHaveProperty("_name", "name");
         }
      );
   });

   describe.each([undefined, "name"])("Non-BigInt value", (name) => {
      test("Null value throws error", () => {
         const value = null;

         expect(() => {
            new BigIntAsserter(value, name);
         }).toThrow("Value cannot be null");
      });

      test("Undefined value throws error", () => {
         const value = undefined;

         expect(() => {
            new BigIntAsserter(value, name);
         }).toThrow("Value cannot be undefined");
      });

      test.each(Constants.NonBigintNullUndefinedTypesExampleValues)(
         "Non-BigInt value throws error",
         (value) => {
            expect(() => {
               new BigIntAsserter(value, name);
            }).toThrow("Value must be a BigInt");
         }
      );
   });
});
