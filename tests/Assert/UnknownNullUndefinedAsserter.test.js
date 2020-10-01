"use strict";

import { UnknownNullUndefinedAsserter } from "../../lib/Assert/UnknownNullUndefinedAsserter";
import { UnknownUndefinedAsserter } from "../../lib/Assert/UnknownUndefinedAsserter";
import { UnknownNullAsserter } from "../../lib/Assert/UnknownNullAsserter";

describe.each([
   null,
   undefined,
   1,
   2n,
   true,
   "string",
   Symbol("symbol"),
   { object: "object" },
])("Constructor", (value) => {
   test.each([undefined, "name"])("Value can be any type", (name) => {
      const asserter = new UnknownNullUndefinedAsserter(value, name);

      expect(asserter).toHaveProperty("_value", value);
   });

   test("Null name throws error", () => {
      const name = null;

      expect(() => {
         new UnknownNullUndefinedAsserter(value, name);
      }).toThrow("Name cannot be null");
   });

   test.each([1, 2n, true, Symbol("symbol"), { object: "object" }])(
      "Non-string name throws error",
      (name) => {
         expect(() => {
            new UnknownNullUndefinedAsserter(value, name);
         }).toThrow("Name must be a string");
      }
   );

   test("Empty name throws error", () => {
      const name = "";

      expect(() => {
         new UnknownNullUndefinedAsserter(value, name);
      }).toThrow("Name cannot be empty");
   });

   test("Whitespace name throws error", () => {
      const name = " 　	\n\r";

      expect(() => {
         new UnknownNullUndefinedAsserter(value, name);
      }).toThrow("Name cannot consist only of whitespace");
   });

   test.each(["name", "name 　	\n\r", " 　	\n\rname", " 　name	\n\r"])(
      "Name is trimmed",
      (name) => {
         const asserter = new UnknownNullUndefinedAsserter(value, name);

         expect(asserter).toHaveProperty("_name", "name");
      }
   );
});

// TODO: print name in errors if given

describe.each([
   undefined,
   1,
   2n,
   true,
   "string",
   Symbol("symbol"),
   { object: "object" },
])("isNotNull: Non-null value", (value) => {
   test.each([undefined, "name"])(
      "Returns UnknownUndefinedAsserter",
      (name) => {
         const asserter = new UnknownNullUndefinedAsserter(value, name);

         const nonNull = asserter.isNotNull();

         expect(nonNull instanceof UnknownUndefinedAsserter).toBeTruthy();
      }
   );

   test.each([undefined, "name"])(
      "Returned UnknownUndefinedAsserter has same value",
      (name) => {
         const asserter = new UnknownNullUndefinedAsserter(value, name);

         const nonNull = asserter.isNotNull();

         expect(nonNull).toHaveProperty("_value", value);
      }
   );

   test.each([undefined, "name"])(
      "Returned UnknownUndefinedAsserter has same name",
      (name) => {
         const asserter = new UnknownNullUndefinedAsserter(value, name);

         const nonNull = asserter.isNotNull();

         expect(nonNull).toHaveProperty("_name", name);
      }
   );
});

describe("isNotNull: Null value", () => {
   test.each([undefined, "name"])("Throws error", (name) => {
      const value = null;
      const asserter = new UnknownNullUndefinedAsserter(value, name);

      const expected = name ? `Value of '${name}' is null` : "Value is null";

      expect(() => {
         asserter.isNotNull();
      }).toThrow(expected);
   });
});

describe.each([
   null,
   1,
   2n,
   true,
   "string",
   Symbol("symbol"),
   { object: "object" },
])("isNotUndefined: Non-undefined value", (value) => {
   test.each([undefined, "name"])("Returns UnknownNullAsserter", (name) => {
      const asserter = new UnknownNullUndefinedAsserter(value, name);

      const nonUndefined = asserter.isNotUndefined();

      expect(nonUndefined instanceof UnknownNullAsserter).toBeTruthy();
   });

   test.each([undefined, "name"])(
      "Returned UnknownNullAsserter has same value",
      (name) => {
         const asserter = new UnknownNullUndefinedAsserter(value, name);

         const nonUndefined = asserter.isNotUndefined();

         expect(nonUndefined).toHaveProperty("_value", value);
      }
   );

   test.each([undefined, "name"])(
      "Returned UnknownNullAsserter has same name",
      (name) => {
         const asserter = new UnknownNullUndefinedAsserter(value, name);

         const nonNull = asserter.isNotUndefined();

         expect(nonNull).toHaveProperty("_name", name);
      }
   );
});

describe("isNotUndefined: Undefined value", () => {
   test.each([undefined, "name"])("Throws error", (name) => {
      const value = undefined;
      const asserter = new UnknownNullUndefinedAsserter(value, name);

      const expected = name
         ? `Value of '${name}' is undefined`
         : "Value is undefined";

      expect(() => {
         asserter.isNotUndefined();
      }).toThrow(expected);
   });
});
