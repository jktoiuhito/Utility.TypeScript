"use strict";

import { SymbolAsserter } from "../../lib/Assert/SymbolAsserter";
import * as Constants from "../Constants";

/**
 * constructor
 */
describe("Constructor", () => {
   describe.each([Symbol(), Symbol("symbol")])("Symbol value", (value) => {
      test.each([undefined, "name"])("Value can be symbol", (name) => {
         const asserter = new SymbolAsserter(value, name);

         expect(asserter).toHaveProperty("_value", value);
      });

      test("Null name throws error", () => {
         const name = null;

         expect(() => {
            new SymbolAsserter(value, name);
         }).toThrow("Name cannot be null");
      });

      test.each(Constants.NonNullStringUndefinedTypesExampleValues)(
         "Non-string name throws error",
         (name) => {
            expect(() => {
               new SymbolAsserter(value, name);
            }).toThrow("Name must be a string");
         }
      );

      test("Empty name throws error", () => {
         const name = "";

         expect(() => {
            new SymbolAsserter(value, name);
         }).toThrow("Name cannot be empty");
      });

      test("Whitespace name throws error", () => {
         const name = " 　	\n\r";

         expect(() => {
            new SymbolAsserter(value, name);
         }).toThrow("Name cannot consist only of whitespace");
      });

      test.each(["name", "name 　	\n\r", " 　	\n\rname", " 　name	\n\r"])(
         "Name is trimmed",
         (name) => {
            const asserter = new SymbolAsserter(value, name);

            expect(asserter).toHaveProperty("_name", "name");
         }
      );
   });

   describe.each([undefined, "name"])("Non-symbol value", (name) => {
      test("Null value throws error", () => {
         const value = null;

         expect(() => {
            new SymbolAsserter(value, name);
         }).toThrow("Value cannot be null");
      });

      test("Undefined value throws error", () => {
         const value = undefined;

         expect(() => {
            new SymbolAsserter(value, name);
         }).toThrow("Value cannot be undefined");
      });

      test.each(Constants.NonNullSymbolUndefinedTypesExampleValues)(
         "Non-symbol value throws error",
         (value) => {
            expect(() => {
               new SymbolAsserter(value, name);
            }).toThrow("Value must be a symbol");
         }
      );
   });
});
