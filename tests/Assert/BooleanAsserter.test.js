"use strict";

import { BooleanAsserter } from "../../lib/Assert/BooleanAsserter";
import * as Constants from "../Constants";

/**
 * constructor
 */
describe("Constructor", () => {
   describe.each(Constants.ExampleBooleans)("Boolean value", (value) => {
      test.each([undefined, "name"])("Value can be boolean", (name) => {
         const asserter = new BooleanAsserter(value, name);

         expect(asserter).toHaveProperty("_value", value);
      });

      test("Undefined name is set", () => {
         const name = undefined;
         const asserter = new BooleanAsserter(value, name);

         expect(asserter).toHaveProperty("_name", name);
      });

      test.each(Constants.NonStringUndefinedTypesExampleValues)(
         "Non-string/undefined name throws error",
         (name) => {
            expect(() => {
               new BooleanAsserter(value, name);
            }).toThrow("Name must be of type string or undefined");
         }
      );

      test("Empty name throws error", () => {
         const name = "";

         expect(() => {
            new BooleanAsserter(value, name);
         }).toThrow("Name cannot be empty");
      });

      test("Whitespace name throws error", () => {
         const name = " 　	\n\r";

         expect(() => {
            new BooleanAsserter(value, name);
         }).toThrow("Name cannot consist only of whitespace");
      });

      test.each(["name", "name 　	\n\r", " 　	\n\rname", " 　name	\n\r"])(
         "Name is trimmed",
         (name) => {
            const asserter = new BooleanAsserter(value, name);

            expect(asserter).toHaveProperty("_name", "name");
         }
      );
   });

   describe.each([undefined, "name"])("Non-boolean value", (name) => {
      test.each(Constants.NonBooleanTypesExampleValues)(
         "Non-boolean value throws error",
         (value) => {
            expect(() => {
               new BooleanAsserter(value, name);
            }).toThrow("Value must be of type boolean");
         }
      );
   });
});

/**
 * Immutability
 */
describe.each([Constants.ExampleBooleans])("Immutability", (value) => {
   test.each([undefined, "name"])("Object is frozen", (name) => {
      const asserter = new BooleanAsserter(value, name);

      expect(Object.isFrozen(asserter)).toBeTruthy();
   });
});

/**
 * isTrue
 * TODO!
 */
describe.skip.each([undefined, "name"])("isTrue", (name) => {
   test("", () => {
      throw new Error("not implemented");
   });
});

/**
 * isFalse
 * TODO!
 */
describe.skip.each([undefined, "name"])("isFalse", (name) => {
   test("", () => {
      throw new Error("not implemented");
   });
});

/**
 * isEqual
 * TODO!
 */
describe.skip.each([undefined, "name"])("isEqual", (name) => {
   test("", () => {
      throw new Error("not implemented");
   });
});
