"use strict";

import { BigIntAsserter } from "../../lib/Assert/BigIntAsserter";
import * as Constants from "../Constants";

/**
 * constructor
 */
describe("Constructor", () => {
   describe.each(Constants.ExampleBigInts)("BigInt value", (value) => {
      test.each([undefined, "name"])("Value can be BigInt", (name) => {
         const asserter = new BigIntAsserter(value, name);

         expect(asserter.value).toBe(value);
      });

      test("Undefined name is set", () => {
         const name = undefined;
         const asserter = new BigIntAsserter(value, name);

         expect(asserter).toHaveProperty("_name", name);
      });

      test.each(Constants.ExampleNotStringUndefinedTypes)(
         "Non-string/undefined name throws error",
         (name) => {
            expect(() => {
               new BigIntAsserter(value, name);
            }).toThrow("Name must be of type string or undefined");
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
      test.each(Constants.ExampleNotBigintTypes)(
         "Non-BigInt value throws error",
         (value) => {
            expect(() => {
               new BigIntAsserter(value, name);
            }).toThrow("Value must be of type bigint");
         }
      );
   });
});

/**
 * Immutability
 */
describe.each([Constants.ExampleBigInts])("Immutability", (value) => {
   test.each([undefined, "name"])("Object is frozen", (name) => {
      const asserter = new BigIntAsserter(value, name);

      expect(Object.isFrozen(asserter)).toBeTruthy();
   });
});

/**
 * isGreaterThan
 */
describe.each([undefined, "name"])("isGreaterThan", (name) => {
   test.each(Constants.ExampleNotBigintTypes)(
      "Non-bigint argument throws error",
      (other) => {
         const value = Constants.ExampleBigInt;
         const asserter = new BigIntAsserter(value, name);

         expect(() => {
            asserter.isGreaterThan(other);
         }).toThrow("Argument must be of type bigint");
      }
   );

   test("Smaller value throws error", () => {
      const value = Constants.ExampleBigInt;
      const asserter = new BigIntAsserter(value, name);

      const other = value + 1n;
      const expected =
         name === undefined
            ? `bigint is not greater than '${other}'`
            : `'${name}' is not greater than '${other}'`;

      expect(() => {
         asserter.isGreaterThan(other);
      }).toThrow(expected);
   });

   test("Equal value throws error", () => {
      const value = Constants.ExampleBigInt;
      const asserter = new BigIntAsserter(value, name);

      const other = value;
      const expected =
         name === undefined
            ? `bigint is not greater than '${other}'`
            : `'${name}' is not greater than '${other}'`;

      expect(() => {
         asserter.isGreaterThan(other);
      }).toThrow(expected);
   });

   test("Greater value returns itself", () => {
      const value = Constants.ExampleBigInt;
      const asserter = new BigIntAsserter(value, name);

      const other = value - 1n;
      const ret = asserter.isGreaterThan(other);

      expect(ret).toBe(asserter);
   });
});

/**
 * islessThan
 */
describe.each([undefined, "name"])("islessThan", (name) => {
   test.each(Constants.ExampleNotBigintTypes)(
      "Non-bigint argument throws error",
      (other) => {
         const value = Constants.ExampleBigInt;
         const asserter = new BigIntAsserter(value, name);

         expect(() => {
            asserter.isLessThan(other);
         }).toThrow("Argument must be of type bigint");
      }
   );

   test("Greater value throws error", () => {
      const value = Constants.ExampleBigInt;
      const asserter = new BigIntAsserter(value, name);

      const other = value - 1n;
      const expected =
         name === undefined
            ? `bigint is not less than '${other}'`
            : `'${name}' is not less than '${other}'`;

      expect(() => {
         asserter.isLessThan(other);
      }).toThrow(expected);
   });

   test("Equal value throws error", () => {
      const value = Constants.ExampleBigInt;
      const asserter = new BigIntAsserter(value, name);

      const other = value;
      const expected =
         name === undefined
            ? `bigint is not less than '${other}'`
            : `'${name}' is not less than '${other}'`;

      expect(() => {
         asserter.isLessThan(other);
      }).toThrow(expected);
   });

   test("Lesser value returns itself", () => {
      const value = Constants.ExampleBigInt;
      const asserter = new BigIntAsserter(value, name);

      const other = value + 1n;
      const ret = asserter.isLessThan(other);

      expect(ret).toBe(asserter);
   });
});
