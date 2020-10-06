"use strict";

import { NumberAsserter } from "../../lib/Assert/NumberAsserter";
import * as Constants from "../Constants";

/**
 * constructor
 */
describe("Constructor", () => {
   describe.each(Constants.ExampleNumbers)("Number value", (value) => {
      test.each([undefined, "name"])("Value can be number", (name) => {
         const asserter = new NumberAsserter(value, name);

         expect(asserter).toHaveProperty("_value", value);
      });

      test("Undefined name is set", () => {
         const name = undefined;
         const asserter = new NumberAsserter(value, name);

         expect(asserter).toHaveProperty("_name", name);
      });

      test.each(Constants.NonStringUndefinedTypesExampleValues)(
         "Non-string/undefined name throws error",
         (name) => {
            expect(() => {
               new NumberAsserter(value, name);
            }).toThrow("Name must be of type string or undefined");
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
      test.each(Constants.NonNumberTypesExampleValues)(
         "Non-number value throws error",
         (value) => {
            expect(() => {
               new NumberAsserter(value, name);
            }).toThrow("Value must be of type number");
         }
      );
   });
});

/**
 * Immutability
 */
describe.each([Constants.ExampleNumbers])("Immutability", (value) => {
   test.each([undefined, "name"])("Object is frozen", (name) => {
      const asserter = new NumberAsserter(value, name);

      expect(Object.isFrozen(asserter)).toBeTruthy();
   });
});

/**
 * isGreaterThan
 * TODO!
 */
describe.skip.each([undefined, "name"])("isGreaterThan", (name) => {
   test("", () => {
      throw new Error("not implemented");
   });
});

/**
 * islessThan
 * TODO!
 */
describe.skip.each([undefined, "name"])("islessThan", (name) => {
   test("", () => {
      throw new Error("not implemented");
   });
});
