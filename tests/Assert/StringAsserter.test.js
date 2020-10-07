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

         expect(asserter.value).toBe(value);
      });

      test("Undefined name is set", () => {
         const name = undefined;
         const asserter = new StringAsserter(value, name);

         expect(asserter).toHaveProperty("_name", name);
      });

      test.each(Constants.ExampleNotStringUndefinedTypes)(
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
      test.each(Constants.ExampleNotStringUndefinedTypes)(
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
         // eslint-disable-next-line no-unused-expressions
         asserter.isNotEmpty;
      }).toThrow(expected);
   });

   test.each([
      " 　	\n\r",
      "value",
      "value 　	\n\r",
      " 　	\n\rvalue",
      " 　value	\n\r",
   ])("Non-empty string value returns itself", (value) => {
      const asserter = new StringAsserter(value, name);

      const ret = asserter.isNotEmpty;

      expect(ret).toBe(asserter);
   });
});

/**
 * isEmpty
 */
describe.each([undefined, "name"])("isEmpty", (name) => {
   test("Empty string value returns itself", () => {
      const value = "";
      const asserter = new StringAsserter(value, name);

      const ret = asserter.isEmpty;

      expect(ret).toBe(asserter);
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
         // eslint-disable-next-line no-unused-expressions
         asserter.isEmpty;
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
         // eslint-disable-next-line no-unused-expressions
         asserter.isNotWhitespace;
      }).toThrow(expected);
   });

   test.each(["", "value", "value 　	\n\r", " 　	\n\rvalue", " 　value	\n\r"])(
      "Non-whitespace string value returns itself",
      (value) => {
         const asserter = new StringAsserter(value, name);

         const ret = asserter.isNotWhitespace;

         expect(ret).toBe(asserter);
      }
   );
});

/**
 * isMatch
 */
describe.each([undefined, "name"])("isMatch", (name) => {
   test.each(Constants.NonRegExpExampleValues)(
      "Non-RegExp argument throws error",
      (regexp) => {
         const value = Constants.ExampleString;
         const asserter = new StringAsserter(value, name);

         expect(() => {
            asserter.isMatch(regexp);
         }).toThrow("Argument must be of type RegExp");
      }
   );

   test("Non-matching string throws error", () => {
      const value = Constants.ExampleString;
      const regex = new RegExp("^" + value + "___$");
      const asserter = new StringAsserter(value, name);

      const expected =
         name !== undefined
            ? `'${name}' does not match the regular expression ${regex.toString()}`
            : `string does not match the regular expression ${regex.toString()}`;

      expect(() => {
         asserter.isMatch(regex);
      }).toThrow(expected);
   });

   test("Matching string returns itself", () => {
      const value = Constants.ExampleString;
      const regex = new RegExp("^" + value + "$");
      const asserter = new StringAsserter(value, name);

      const ret = asserter.isMatch(regex);

      expect(ret).toBe(asserter);
   });
});

/**
 * isNotMatch
 */
describe.each([undefined, "name"])("isNotMatch", (name) => {
   test.each(Constants.NonRegExpExampleValues)(
      "Non-RegExp argument throws error",
      (regexp) => {
         const value = Constants.ExampleString;
         const asserter = new StringAsserter(value, name);

         expect(() => {
            asserter.isNotMatch(regexp);
         }).toThrow("Argument must be of type RegExp");
      }
   );

   test("Matching string throws error", () => {
      const value = Constants.ExampleString;
      const regex = RegExp("^" + value + "$");
      const asserter = new StringAsserter(value, name);

      const expected =
         name !== undefined
            ? `'${name}' matches the regular expression ${regex.toString()}`
            : `string matches the regular expression ${regex.toString()}`;

      expect(() => {
         asserter.isNotMatch(regex);
      }).toThrow(expected);
   });

   test("Non-matching string returns itself", () => {
      const value = Constants.ExampleString;
      const regex = new RegExp("^" + value + "___$");
      const asserter = new StringAsserter(value, name);

      const ret = asserter.isNotMatch(regex);

      expect(ret).toBe(asserter);
   });
});
