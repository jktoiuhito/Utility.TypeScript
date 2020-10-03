"use strict";

import { SymbolAsserter } from "../../lib/Assert/SymbolAsserter";
import * as Constants from "../Constants";

/**
 * constructor
 */
describe("Constructor", () => {
   describe.each(Constants.ExampleSymbols)("Symbol value", (value) => {
      test.each([undefined, "name"])("Value can be symbol", (name) => {
         const asserter = new SymbolAsserter(value, name);

         expect(asserter).toHaveProperty("_value", value);
      });

      test("Undefined name is set", () => {
         const name = undefined;
         const asserter = new SymbolAsserter(value, name);

         expect(asserter).toHaveProperty("_name", name);
      });

      test.each(Constants.NonStringUndefinedTypesExampleValues)(
         "Non-string/undefined name throws error",
         (name) => {
            expect(() => {
               new SymbolAsserter(value, name);
            }).toThrow("Name must be of type string or undefined");
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
      test.each(Constants.NonSymbolTypesExampleValues)(
         "Non-symbol value throws error",
         (value) => {
            expect(() => {
               new SymbolAsserter(value, name);
            }).toThrow("Value must be of type symbol");
         }
      );
   });
});

/**
 * Immutability
 */
describe.each([Constants.ExampleSymbols])("Immutability", (value) => {
   test.each([undefined, "name"])("Object is frozen", (name) => {
      const asserter = new SymbolAsserter(value, name);

      expect(Object.isFrozen(asserter)).toBeTruthy();
   });
});
