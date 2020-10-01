"use strict";

import { UnknownNullAsserter } from "../../lib/Assert/UnknownNullAsserter";
import { UnknownAsserter } from "../../lib/Assert/UnknownAsserter";
import * as Constants from "../Constants";

/**
 * constructor
 */
describe("Constructor", () => {
   describe.each(Constants.NonUndefinedTypesExampleValues)(
      "Non-undefined value",
      (value) => {
         test.each([undefined, "name"])(
            "Value can be any type but undefined",
            (name) => {
               const asserter = new UnknownNullAsserter(value, name);

               expect(asserter).toHaveProperty("_value", value);
            }
         );

         test("Null name throws error", () => {
            const name = null;

            expect(() => {
               new UnknownNullAsserter(value, name);
            }).toThrow("Name cannot be null");
         });

         test.each(Constants.NonNullStringUndefinedTypesExampleValues)(
            "Non-string name throws error",
            (name) => {
               expect(() => {
                  new UnknownNullAsserter(value, name);
               }).toThrow("Name must be a string");
            }
         );

         test("Empty name throws error", () => {
            const name = "";

            expect(() => {
               new UnknownNullAsserter(value, name);
            }).toThrow("Name cannot be empty");
         });

         test("Whitespace name throws error", () => {
            const name = " 　	\n\r";

            expect(() => {
               new UnknownNullAsserter(value, name);
            }).toThrow("Name cannot consist only of whitespace");
         });

         test.each(["name", "name 　	\n\r", " 　	\n\rname", " 　name	\n\r"])(
            "Name is trimmed",
            (name) => {
               const asserter = new UnknownNullAsserter(value, name);

               expect(asserter).toHaveProperty("_name", "name");
            }
         );
      }
   );

   test.each([undefined, "name"])("Undefined value throws error", (name) => {
      const value = undefined;

      expect(() => {
         new UnknownNullAsserter(value, name);
      }).toThrow("Value cannot be undefined");
   });
});

/**
 * isNotNull
 */
describe.each([undefined, "name"])("isNotNull", (name) => {
   describe.each(Constants.NonNullUndefinedTypesExampleValues)(
      "Non-null value",
      (value) => {
         test("Returns UnknownAsserter", () => {
            const asserter = new UnknownNullAsserter(value, name);

            const nonNull = asserter.isNotNull();

            expect(nonNull instanceof UnknownAsserter).toBeTruthy();
         });

         test("Returned UnknownAsserter has same value", () => {
            const asserter = new UnknownNullAsserter(value, name);

            const nonNull = asserter.isNotNull();

            expect(nonNull).toHaveProperty("_value", value);
         });

         test("Returned UnknownAsserter has same name", () => {
            const asserter = new UnknownNullAsserter(value, name);

            const nonNull = asserter.isNotNull();

            expect(nonNull).toHaveProperty("_name", name);
         });
      }
   );

   test("Null value throws error", () => {
      const value = null;
      const asserter = new UnknownNullAsserter(value, name);

      const expected = name ? `Value of '${name}' is null` : "Value is null";

      expect(() => {
         asserter.isNotNull();
      }).toThrow(expected);
   });
});

/**
 * isNull
 */
describe.each([undefined, "name"])("isNull", (name) => {
   test.each(Constants.NonNullUndefinedTypesExampleValues)(
      "Non-null value throws error",
      (value) => {
         const asserter = new UnknownNullAsserter(value, name);

         const expected = name
            ? `Value of '${name}' is not null`
            : "Value is not null";

         expect(() => {
            asserter.isNull();
         }).toThrow(expected);
      }
   );

   test("Null value returns null", () => {
      const value = null;
      const asserter = new UnknownNullAsserter(value, name);

      const ret = asserter.isNull();

      expect(ret).toBe(value);
   });
});
