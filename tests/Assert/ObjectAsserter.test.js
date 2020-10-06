"use strict";

import { ObjectAsserter } from "../../lib/Assert/ObjectAsserter";
import * as Constants from "../Constants";

/**
 * constructor
 */
describe("Constructor", () => {
   describe.each(Constants.ExampleObjects)("Object value", (value) => {
      test.each([undefined, "name"])("Value can be object", (name) => {
         const asserter = new ObjectAsserter(value, name);

         expect(asserter).toHaveProperty("_value", value);
      });

      test("Undefined name is set", () => {
         const name = undefined;
         const asserter = new ObjectAsserter(value, name);

         expect(asserter).toHaveProperty("_name", name);
      });

      test.each(Constants.NonStringUndefinedTypesExampleValues)(
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
      test.each(Constants.NonObjectTypesExampleValues)(
         "Non-object value throws error",
         (value) => {
            const expected =
               value === null
                  ? "Value cannot be null"
                  : "Value must be of type object";

            expect(() => {
               new ObjectAsserter(value, name);
            }).toThrow(expected);
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
 * isInstanceOf
 */
describe.each([undefined, "name"])("isInstanceOf", (name) => {
   test.each(Constants.NonFunctionTypesExampleValues)(
      "Non-function type throws error",
      (type) => {
         const value = Constants.ExampleObject;
         const asserter = new ObjectAsserter(value, name);

         expect(() => {
            asserter.isInstanceOf(type);
         }).toThrow("Type must be of type function");
      }
   );

   test.each(Constants.ExamplePrototypelessFunctions)(
      "Prototypeless function throws error",
      (type) => {
         class testClass {
            value = "value";
         }
         const value = new testClass();
         const asserter = new ObjectAsserter(value, name);

         expect(() => {
            asserter.isInstanceOf(type);
         }).toThrow(`Type must have a defined prototype`);
      }
   );

   test.each(Constants.ExamplePrototypedFunctions)(
      "Wrong prototype throws error",
      (type) => {
         class testClass {
            value = "value";
         }
         const value = new testClass();
         const asserter = new ObjectAsserter(value, name);

         expect(() => {
            asserter.isInstanceOf(type);
         }).toThrow(`Object is not an instance of '${type.name}'`);
      }
   );

   test("Rigth type returns itself", () => {
      class testClass {
         value = "value";
      }
      const value = new testClass();
      const asserter = new ObjectAsserter(value, name);

      const ret = asserter.isInstanceOf(testClass);

      expect(ret).toBe(asserter);
   });
});
