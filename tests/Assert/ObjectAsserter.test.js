"use strict";

import { ObjectAsserter } from "../../lib/Assert/ObjectAsserter";
import { Asserter } from "../../lib/Assert/Asserter";
import * as Constants from "../Constants";
import { NonNullObjectAsserter } from "../../lib/Assert/NonNullObjectAsserter";

/**
 * constructor
 */
describe("Constructor", () => {
   describe.each(Constants.ExampleObjects)("Object value", (value) => {
      test.each([undefined, "name"])("Value can be object", (name) => {
         const asserter = new ObjectAsserter(value, name);

         expect(asserter.value).toBe(value);
      });

      test("Undefined name is set", () => {
         const name = undefined;
         const asserter = new ObjectAsserter(value, name);

         expect(asserter).toHaveProperty("_name", name);
      });

      test.each(Constants.ExampleNotStringUndefinedTypes)(
         "Non-string/undefined name throws error",
         (name) => {
            expect(() => {
               new ObjectAsserter(value, name);
            }).toThrow("Name must be of type string or undefined");
         }
      );

      test("Empty name throws error", () => {
         const name = "";

         expect(() => {
            new ObjectAsserter(value, name);
         }).toThrow("Name cannot be empty");
      });

      test("Whitespace name throws error", () => {
         const name = " 　	\n\r";

         expect(() => {
            new ObjectAsserter(value, name);
         }).toThrow("Name cannot consist only of whitespace");
      });

      test.each(["name", "name 　	\n\r", " 　	\n\rname", " 　name	\n\r"])(
         "Name is trimmed",
         (name) => {
            const asserter = new ObjectAsserter(value, name);

            expect(asserter).toHaveProperty("_name", "name");
         }
      );
   });

   describe.each([undefined, "name"])("Non-object value", (name) => {
      test.each(Constants.ExampleNotObjectTypes)(
         "Non-object value throws error",
         (value) => {
            expect(() => {
               new ObjectAsserter(value, name);
            }).toThrow("Value must be of type object");
         }
      );
   });
});

/**
 * Immutability
 */
describe.each([Constants.ExampleObjects])("Immutability", (value) => {
   test.each([undefined, "name"])("Object is frozen", (name) => {
      const asserter = new ObjectAsserter(value, name);

      expect(Object.isFrozen(asserter)).toBeTruthy();
   });
});

/**
 * isNull
 */
describe.each([undefined, "name"])("isNull", (name) => {
   test.each(Constants.ExampleNonNullObjects)(
      "Non-null value throws error",
      (value) => {
         const asserter = new ObjectAsserter(value, name);

         const expected =
            name !== undefined ? `'${name}' is not null` : "Value is not null";

         expect(() => {
            // eslint-disable-next-line no-unused-expressions
            asserter.isNull;
         }).toThrow(expected);
      }
   );

   describe("Null value", () => {
      test("Returns Asserter", () => {
         const value = null;
         const asserter = new ObjectAsserter(value, name);

         const nul = asserter.isNull;

         expect(nul instanceof Asserter).toBeTruthy();
      });

      test("Returned Asserter has same value", () => {
         const value = null;
         const asserter = new ObjectAsserter(value, name);

         const nul = asserter.isNull;
         const retValue = nul.value;

         expect(retValue).toBe(value);
      });

      test("Returned Asserter has same name", () => {
         const value = null;
         const asserter = new ObjectAsserter(value, name);

         const nul = asserter.isNull;

         expect(nul).toHaveProperty("_name", name);
      });
   });
});

/**
 * isNotNull
 */
describe.each([undefined, "name"])("isNull", (name) => {
   test("Null value throws error", () => {
      const value = null;
      const asserter = new ObjectAsserter(value, name);

      const expected =
         name !== undefined ? `'${name}' is null` : "Value is null";

      expect(() => {
         // eslint-disable-next-line no-unused-expressions
         asserter.isNotNull;
      }).toThrow(expected);
   });

   describe.each(Constants.ExampleNonNullObjects)("Non-null value", (value) => {
      test("Returns NonNullObjectAsserter", () => {
         const asserter = new ObjectAsserter(value, name);

         const notNul = asserter.isNotNull;

         expect(notNul instanceof NonNullObjectAsserter).toBeTruthy();
      });

      test("Returned NonNullObjectAsserter has same value", () => {
         const asserter = new ObjectAsserter(value, name);

         const notNul = asserter.isNotNull;
         const retValue = notNul.value;

         expect(retValue).toBe(value);
      });

      test("Returned NonNullObjectAsserter has same name", () => {
         const asserter = new ObjectAsserter(value, name);

         const notNul = asserter.isNotNull;

         expect(notNul).toHaveProperty("_name", name);
      });
   });
});
