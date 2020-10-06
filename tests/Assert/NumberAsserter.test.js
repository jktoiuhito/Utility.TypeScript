"use strict";

import { NumberAsserter } from "../../lib/Assert/NumberAsserter";
import * as Constants from "../Constants";

/**
 * constructor
 */
describe("Constructor", () => {
   describe.each(Constants.ExampleNumbers)("Number value", (value) => {
      test.each([undefined, "name"])("Value can be number", (name) => {
         const asserter = new NumberAsserter(value, name);

         expect(asserter).toHaveProperty("_value", value);
      });

      test("Undefined name is set", () => {
         const name = undefined;
         const asserter = new NumberAsserter(value, name);

         expect(asserter).toHaveProperty("_name", name);
      });

      test.each(Constants.ExampleNotStringUndefinedTypes)(
         "Non-string/undefined name throws error",
         (name) => {
            expect(() => {
               new NumberAsserter(value, name);
            }).toThrow("Name must be of type string or undefined");
         }
      );

      test("Empty name throws error", () => {
         const name = "";

         expect(() => {
            new NumberAsserter(value, name);
         }).toThrow("Name cannot be empty");
      });

      test("Whitespace name throws error", () => {
         const name = " 　	\n\r";

         expect(() => {
            new NumberAsserter(value, name);
         }).toThrow("Name cannot consist only of whitespace");
      });

      test.each(["name", "name 　	\n\r", " 　	\n\rname", " 　name	\n\r"])(
         "Name is trimmed",
         (name) => {
            const asserter = new NumberAsserter(value, name);

            expect(asserter).toHaveProperty("_name", "name");
         }
      );
   });

   describe.each([undefined, "name"])("Non-number value", (name) => {
      test.each(Constants.ExampleNotNumberTypes)(
         "Non-number value throws error",
         (value) => {
            expect(() => {
               new NumberAsserter(value, name);
            }).toThrow("Value must be of type number");
         }
      );
   });
});

/**
 * Immutability
 */
describe.each([Constants.ExampleNumbers])("Immutability", (value) => {
   test.each([undefined, "name"])("Object is frozen", (name) => {
      const asserter = new NumberAsserter(value, name);

      expect(Object.isFrozen(asserter)).toBeTruthy();
   });
});

/**
 * isGreaterThan
 */
describe.each([undefined, "name"])("isGreaterThan", (name) => {
   test.each(Constants.ExampleNotNumberTypes)(
      "Non-number argument throws error",
      (other) => {
         const value = Constants.ExampleNumber;
         const asserter = new NumberAsserter(value, name);

         expect(() => {
            asserter.isGreaterThan(other);
         }).toThrow("Argument must be of type number");
      }
   );

   test("Smaller value throws error", () => {
      const value = Constants.ExampleNumber;
      const asserter = new NumberAsserter(value, name);

      const other = value + 1;
      const expected =
         name === undefined
            ? `number is not greater than '${other}'`
            : `'${name}' is not greater than '${other}'`;

      expect(() => {
         asserter.isGreaterThan(other);
      }).toThrow(expected);
   });

   test("Equal value throws error", () => {
      const value = Constants.ExampleNumber;
      const asserter = new NumberAsserter(value, name);

      const other = value;
      const expected =
         name === undefined
            ? `number is not greater than '${other}'`
            : `'${name}' is not greater than '${other}'`;

      expect(() => {
         asserter.isGreaterThan(other);
      }).toThrow(expected);
   });

   test("Greater value returns itself", () => {
      const value = Constants.ExampleNumber;
      const asserter = new NumberAsserter(value, name);

      const other = value - 1;
      const ret = asserter.isGreaterThan(other);

      expect(ret).toBe(asserter);
   });
});

/**
 * islessThan
 */
describe.each([undefined, "name"])("islessThan", (name) => {
   test.each(Constants.ExampleNotNumberTypes)(
      "Non-number argument throws error",
      (other) => {
         const value = Constants.ExampleNumber;
         const asserter = new NumberAsserter(value, name);

         expect(() => {
            asserter.isLessThan(other);
         }).toThrow("Argument must be of type number");
      }
   );

   test("Greater value throws error", () => {
      const value = Constants.ExampleNumber;
      const asserter = new NumberAsserter(value, name);

      const other = value - 1;
      const expected =
         name === undefined
            ? `number is not less than '${other}'`
            : `'${name}' is not less than '${other}'`;

      expect(() => {
         asserter.isLessThan(other);
      }).toThrow(expected);
   });

   test("Equal value throws error", () => {
      const value = Constants.ExampleNumber;
      const asserter = new NumberAsserter(value, name);

      const other = value;
      const expected =
         name === undefined
            ? `number is not less than '${other}'`
            : `'${name}' is not less than '${other}'`;

      expect(() => {
         asserter.isLessThan(other);
      }).toThrow(expected);
   });

   test("Lesser value returns itself", () => {
      const value = Constants.ExampleNumber;
      const asserter = new NumberAsserter(value, name);

      const other = value + 1;
      const ret = asserter.isLessThan(other);

      expect(ret).toBe(asserter);
   });
});

/**
 * isSafeInteger
 */
describe.each([undefined, "name"])("isSafeInteger", (name) => {
   test.each([
      Number.MIN_VALUE,
      Number.MIN_SAFE_INTEGER - 1,
      Number.MAX_SAFE_INTEGER + 1,
      Number.MAX_VALUE,
   ])("Non-safe integer throws error", (value) => {
      const asserter = new NumberAsserter(value, name);

      const expected =
         name !== undefined
            ? `'${name}' is not a safe integer`
            : "number is not a safe integer";

      expect(() => {
         asserter.isSafeInteger;
      }).toThrow(expected);
   });

   test.each([Number.MIN_SAFE_INTEGER, 0, Number.MAX_SAFE_INTEGER])(
      "Safe integer returns itself",
      (value) => {
         const asserter = new NumberAsserter(value, name);

         const ret = asserter.isSafeInteger;

         expect(ret).toBe(asserter);
      }
   );
});

/**
 * isNaN
 */
describe.each([undefined, "name"])("isNaN", (name) => {
   test.each(Constants.ExampleNumbers)(
      "Not-NaN-value throws error",
      (value) => {
         const asserter = new NumberAsserter(value, name);

         const expected =
            name !== undefined ? `'${name}' is not NaN` : "number is not NaN";

         expect(() => {
            asserter.isNaN;
         }).toThrow(expected);
      }
   );

   test("NaN-value returns itself", () => {
      const value = NaN;
      const asserter = new NumberAsserter(value, name);

      const ret = asserter.isNaN;

      expect(ret).toBe(asserter);
   });
});

/**
 * isNotNaN
 */
describe.each([undefined, "name"])("isNotNaN", (name) => {
   test("NaN-value throws error", () => {
      const value = NaN;
      const asserter = new NumberAsserter(value, name);

      const expected =
         name !== undefined ? `'${name}' is NaN` : "number is NaN";

      expect(() => {
         asserter.isNotNaN;
      }).toThrow(expected);
   });

   test("Not-NaN-value returns itself", () => {
      const value = Constants.ExampleNumber;
      const asserter = new NumberAsserter(value, name);

      const ret = asserter.isNotNaN;

      expect(ret).toBe(asserter);
   });
});
