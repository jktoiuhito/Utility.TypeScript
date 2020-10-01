"use strict";

import { UnknownAsserter } from "../../lib/Assert/UnknownAsserter";

describe.each([1, 2n, true, "string", Symbol("symbol"), { object: "object" }])(
   "Constructor",
   (value) => {
      test.each([undefined, "name"])(
         "Value can be any type but undefined or null",
         (name) => {
            const asserter = new UnknownAsserter(value, name);

            expect(asserter).toHaveProperty("_value", value);
         }
      );

      test("Null name throws error", () => {
         const name = null;

         expect(() => {
            new UnknownAsserter(value, name);
         }).toThrow("Name cannot be null");
      });

      test.each([1, 2n, true, Symbol("symbol"), { object: "object" }])(
         "Non-string name throws error",
         (name) => {
            expect(() => {
               new UnknownAsserter(value, name);
            }).toThrow("Name must be a string");
         }
      );

      test("Empty name throws error", () => {
         const name = "";

         expect(() => {
            new UnknownAsserter(value, name);
         }).toThrow("Name cannot be empty");
      });

      test("Whitespace name throws error", () => {
         const name = " 　	\n\r";

         expect(() => {
            new UnknownAsserter(value, name);
         }).toThrow("Name cannot consist only of whitespace");
      });

      test.each(["name", "name 　	\n\r", " 　	\n\rname", " 　name	\n\r"])(
         "Name is trimmed",
         (name) => {
            const asserter = new UnknownAsserter(value, name);

            expect(asserter).toHaveProperty("_name", "name");
         }
      );
   }
);

describe.each([undefined, "name"])(
   "Constructor: undefined or null value",
   (name) => {
      test("Undefined value throws error", () => {
         const value = undefined;

         expect(() => {
            new UnknownAsserter(value, name);
         }).toThrow("Value cannot be undefined");
      });

      test("Null value throws error", () => {
         const value = null;

         expect(() => {
            new UnknownAsserter(value, name);
         }).toThrow("Value cannot be null");
      });
   }
);

describe.each([undefined, "name"])("isType", (name) => {
   test("Null type throws error", () => {
      throw "not implemented";
   });

   test("Undefined type throws error", () => {
      throw "not implemented";
   });

   test.each([
      [1, String],
      [true, SVGAElement],
      ["string", Error],
      [new HTMLAllCollection(), HTMLAnchorElement],
   ])("Wrong type throws exception", (value, type) => {
      const asserter = new UnknownAsserter(value, name);

      const expected = `Values type is not ${type}`;

      // TODO: how to pass the type information???
      expect(() => asserter.isType()).toThrow(expected);
   });

   test("Right type returns Asserter", () => {
      throw "not implemented";
   });

   test("Returned Asserter includes the same value", () => {
      throw "not implemented";
   });

   test("Returned Asserter includes the same name", () => {
      throw "not implemented";
   });
});
