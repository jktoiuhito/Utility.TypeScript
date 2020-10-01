"use strict";

import { UnknownUndefinedAsserter } from "../../lib/Assert/UnknownUndefinedAsserter";
import { UnknownAsserter } from "../../lib/Assert/UnknownAsserter";
import * as Constants from "../Constants";

/**
 * constructor
 */
describe("Constructor", () => {
   describe.each(Constants.NonNullTypesExampleValues)(
      "Non-null value",
      (value) => {
         test.each([undefined, "name"])(
            "Value can be any type but null",
            (name) => {
               const asserter = new UnknownUndefinedAsserter(value, name);

               expect(asserter).toHaveProperty("_value", value);
            }
         );

         test("Null name throws error", () => {
            const name = null;

            expect(() => {
               new UnknownUndefinedAsserter(value, name);
            }).toThrow("Name cannot be null");
         });

         test.each(Constants.NonNullStringUndefinedTypesExampleValues)(
            "Non-string name throws error",
            (name) => {
               expect(() => {
                  new UnknownUndefinedAsserter(value, name);
               }).toThrow("Name must be a string");
            }
         );

         test("Empty name throws error", () => {
            const name = "";

            expect(() => {
               new UnknownUndefinedAsserter(value, name);
            }).toThrow("Name cannot be empty");
         });

         test("Whitespace name throws error", () => {
            const name = " 　	\n\r";

            expect(() => {
               new UnknownUndefinedAsserter(value, name);
            }).toThrow("Name cannot consist only of whitespace");
         });

         test.each(["name", "name 　	\n\r", " 　	\n\rname", " 　name	\n\r"])(
            "Name is trimmed",
            (name) => {
               const asserter = new UnknownUndefinedAsserter(value, name);

               expect(asserter).toHaveProperty("_name", "name");
            }
         );
      }
   );

   test.each([undefined, "name"])("Null value throws error", (name) => {
      const value = null;

      expect(() => {
         new UnknownUndefinedAsserter(value, name);
      }).toThrow("Value cannot be null");
   });
});

/**
 * isNotUndefined
 */
describe.each([undefined, "name"])("isNotUndefined", (name) => {
   describe.each(Constants.NonNullUndefinedTypesExampleValues)(
      "Non-undefined value",
      (value) => {
         test("Returns UnknownAsserter", () => {
            const asserter = new UnknownUndefinedAsserter(value, name);

            const unknown = asserter.isNotUndefined();

            expect(unknown instanceof UnknownAsserter).toBeTruthy();
         });

         test("Returned UnknownAsserter has same value", () => {
            const asserter = new UnknownUndefinedAsserter(value, name);

            const unknown = asserter.isNotUndefined();

            expect(unknown).toHaveProperty("_value", value);
         });

         test("Returned UnknownNullAsserter has same name", () => {
            const asserter = new UnknownUndefinedAsserter(value, name);

            const unknown = asserter.isNotUndefined();

            expect(unknown).toHaveProperty("_name", name);
         });
      }
   );

   test("Undefined value throws error", () => {
      const value = undefined;
      const asserter = new UnknownUndefinedAsserter(value, name);

      const expected = name
         ? `Value of '${name}' is undefined`
         : "Value is undefined";

      expect(() => {
         asserter.isNotUndefined();
      }).toThrow(expected);
   });
});

/**
 * isUndefined
 */
describe.each([undefined, "name"])("isUndefined", (name) => {
   test.each(Constants.NonNullUndefinedTypesExampleValues)(
      "Non-undefined value throws error",
      (value) => {
         const asserter = new UnknownUndefinedAsserter(value, name);

         const expected = name
            ? `Value of '${name}' is not undefined`
            : "Value is not undefined";

         expect(() => {
            asserter.isUndefined();
         }).toThrow(expected);
      }
   );

   test("Undefined value returns undefined", () => {
      const value = undefined;
      const asserter = new UnknownUndefinedAsserter(value, name);

      const ret = asserter.isUndefined();

      expect(ret).toBe(value);
   });
});
