"use strict";

import { StringAsserter } from "../../lib/Assert/StringAsserter";
import * as Constants from "../Constants";

/**
 * constructor
 */
describe("Constructor", () => {
   describe.each(["", " 　	\n\r", "string", " 　string	\n\r"])(
      "String value",
      (value) => {
         test.each([undefined, "name"])("Value can be string", (name) => {
            const asserter = new StringAsserter(value, name);

            expect(asserter).toHaveProperty("_value", value);
         });

         test("Null name throws error", () => {
            const name = null;

            expect(() => {
               new StringAsserter(value, name);
            }).toThrow("Name cannot be null");
         });

         test.each(Constants.NonNullStringUndefinedTypesExampleValues)(
            "Non-string name throws error",
            (name) => {
               expect(() => {
                  new StringAsserter(value, name);
               }).toThrow("Name must be a string");
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
      }
   );

   describe.each([undefined, "name"])("Non-string value", (name) => {
      test("Null value throws error", () => {
         const value = null;

         expect(() => {
            new StringAsserter(value, name);
         }).toThrow("Value cannot be null");
      });

      test("Undefined value throws error", () => {
         const value = undefined;

         expect(() => {
            new StringAsserter(value, name);
         }).toThrow("Value cannot be undefined");
      });

      test.each(Constants.NonNullStringUndefinedTypesExampleValues)(
         "Non-string value throws error",
         (value) => {
            expect(() => {
               new StringAsserter(value, name);
            }).toThrow("Value must be a string");
         }
      );
   });
});

/**
 * isNotEmpty
 */
describe.each([undefined, "name"])("isNotEmpty", (name) => {
   test("Empty string value throws error", () => {
      const value = "";
      const asserter = new StringAsserter(value, name);

      const expected = name ? `String '${name}' is empty` : "String is empty";

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
         const oldValue = asserter["_value"];

         const ret = asserter.isNotEmpty();
         const newValue = ret["_value"];

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

      const expected = name
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

      const expected = name
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
            const oldValue = asserter["_value"];

            const ret = asserter.isNotWhitespace();
            const newValue = ret["_value"];

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
