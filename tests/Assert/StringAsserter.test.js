"use strict";

import { StringAsserter } from "../../lib/Assert/StringAsserter";
import * as Constants from "../Constants";

/**
 * constructor
 */
describe("Constructor", () => {
   describe.each(Constants.ExampleStrings)("String value", (value) => {
      test.each([undefined, "name"])("Value can be string", (name) => {
         const asserter = new StringAsserter(value, name);

         expect(asserter).toHaveProperty("_value", value);
      });

      test("Undefined name is set", () => {
         const name = undefined;
         const asserter = new StringAsserter(value, name);

         expect(asserter).toHaveProperty("_name", name);
      });

      test.each(Constants.NonStringUndefinedTypesExampleValues)(
         "Non-string/undefined name throws error",
         (name) => {
            expect(() => {
               new StringAsserter(value, name);
            }).toThrow("Name must be of type string or undefined");
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
   });

   describe.each([undefined, "name"])("Non-string value", (name) => {
      test.each(Constants.NonStringTypesExampleValues)(
         "Non-string value throws error",
         (value) => {
            expect(() => {
               new StringAsserter(value, name);
            }).toThrow("Value must be of type string");
         }
      );
   });
});

/**
 * Immutability
 */
describe.each([Constants.ExampleStrings])("Immutability", (value) => {
   test.each([undefined, "name"])("Object is frozen", (name) => {
      const asserter = new StringAsserter(value, name);

      expect(Object.isFrozen(asserter)).toBeTruthy();
   });
});

/**
 * isNotEmpty
 */
describe.each([undefined, "name"])("isNotEmpty", (name) => {
   test("Empty string value throws error", () => {
      const value = "";
      const asserter = new StringAsserter(value, name);

      const expected =
         name !== undefined ? `String '${name}' is empty` : "String is empty";

      expect(() => {
         asserter.isNotEmpty();
      }).toThrow(expected);
   });

   describe.each([
      " 　	\n\r",
      "value",
      "value 　	\n\r",
      " 　	\n\rvalue",
      " 　value	\n\r",
   ])("Non-empty string value", (value) => {
      test("Returns itself", () => {
         const asserter = new StringAsserter(value, name);

         const ret = asserter.isNotEmpty();

         expect(ret).toBe(asserter);
      });

      test("Value remains the same", () => {
         const asserter = new StringAsserter(value, name);
         const oldValue = asserter.value;

         const ret = asserter.isNotEmpty();
         const newValue = ret.value;

         expect(newValue).toBe(oldValue);
      });

      test("Name remains the same", () => {
         const asserter = new StringAsserter(value, name);
         const oldValue = asserter["_name"];

         const ret = asserter.isNotEmpty();
         const newValue = ret["_name"];

         expect(newValue).toBe(oldValue);
      });
   });
});

/**
 * isEmpty
 */
describe.each([undefined, "name"])("isEmpty", (name) => {
   test("Empty string value returns empty string", () => {
      const value = "";
      const asserter = new StringAsserter(value, name);

      const ret = asserter.isEmpty();

      expect(ret).toBe(value);
   });

   test.each([
      " 　	\n\r",
      "value",
      "value 　	\n\r",
      " 　	\n\rvalue",
      " 　value	\n\r",
   ])("Non-empty string value throws error", (value) => {
      const asserter = new StringAsserter(value, name);

      const expected =
         name !== undefined
            ? `String '${name}' is not empty`
            : "String is not empty";

      expect(() => {
         asserter.isEmpty();
      }).toThrow(expected);
   });
});

/**
 * isNotEmpty
 */
describe.each([undefined, "name"])("isNotWhitespace", (name) => {
   test("Whitespace string value throws error", () => {
      const value = " 　	\n\r";
      const asserter = new StringAsserter(value, name);

      const expected =
         name !== undefined
            ? `String '${name}' consists only of whitespace`
            : "String consists only of whitespace";

      expect(() => {
         asserter.isNotWhitespace();
      }).toThrow(expected);
   });

   describe.each(["", "value", "value 　	\n\r", " 　	\n\rvalue", " 　value	\n\r"])(
      "Non-whitespace string value",
      (value) => {
         test("Returns itself", () => {
            const asserter = new StringAsserter(value, name);

            const ret = asserter.isNotWhitespace();

            expect(ret).toBe(asserter);
         });

         test("Value remains the same", () => {
            const asserter = new StringAsserter(value, name);
            const oldValue = asserter.value;

            const ret = asserter.isNotWhitespace();
            const newValue = ret.value;

            expect(newValue).toBe(oldValue);
         });

         test("Name remains the same", () => {
            const asserter = new StringAsserter(value, name);
            const oldValue = asserter["_name"];

            const ret = asserter.isNotWhitespace();
            const newValue = ret["_name"];

            expect(newValue).toBe(oldValue);
         });
      }
   );
});
