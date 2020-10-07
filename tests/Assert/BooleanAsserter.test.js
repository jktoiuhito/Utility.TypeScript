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

         expect(asserter.value).toBe(value);
      });

      test("Undefined name is set", () => {
         const name = undefined;
         const asserter = new BooleanAsserter(value, name);

         expect(asserter).toHaveProperty("_name", name);
      });

      test.each(Constants.ExampleNotStringUndefinedTypes)(
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
      test.each(Constants.ExampleNotBooleanTypes)(
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
 */
describe.each([undefined, "name"])("isTrue", (name) => {
   test("False value throws error", () => {
      const value = false;
      const asserter = new BooleanAsserter(value, name);

      const expected =
         name !== undefined ? `'${name}' is not true` : "boolean is not true";

      expect(() => {
         // eslint-disable-next-line no-unused-expressions
         asserter.isTrue;
      }).toThrow(expected);
   });

   test("True value returns itself", () => {
      const value = true;
      const asserter = new BooleanAsserter(value, name);

      const ret = asserter.isTrue;

      expect(ret).toBe(asserter);
   });
});

/**
 * isFalse
 */
describe.each([undefined, "name"])("isFalse", (name) => {
   test("True value throws error", () => {
      const value = true;
      const asserter = new BooleanAsserter(value, name);

      const expected =
         name !== undefined ? `'${name}' is not false` : "boolean is not false";

      expect(() => {
         // eslint-disable-next-line no-unused-expressions
         asserter.isFalse;
      }).toThrow(expected);
   });

   test("False value returns itself", () => {
      const value = false;
      const asserter = new BooleanAsserter(value, name);

      const ret = asserter.isFalse;

      expect(ret).toBe(asserter);
   });
});

/**
 * isEqual
 */
describe.each([undefined, "name"])("isEqual", (name) => {
   test.each(Constants.ExampleNotBooleanTypes)(
      "Non-boolean argument throws error",
      (other) => {
         const value = Constants.ExampleBoolean;
         const asserter = new BooleanAsserter(value, name);

         expect(() => {
            asserter.isEqual(other);
         }).toThrow("Argument must be of type boolean");
      }
   );

   test.each([
      [true, false],
      [false, true],
   ])("Wrong value throws error", (value, other) => {
      const asserter = new BooleanAsserter(value, name);

      const expected =
         name !== undefined
            ? `'${name}' is not '${other.toString()}'`
            : `boolean is not '${other.toString()}'`;

      expect(() => {
         asserter.isEqual(other);
      }).toThrow(expected);
   });

   test.each([
      [true, true],
      [false, false],
   ])("Rigth value returns itself", (value, other) => {
      const asserter = new BooleanAsserter(value, name);

      const ret = asserter.isEqual(other);

      expect(ret).toBe(asserter);
   });
});
