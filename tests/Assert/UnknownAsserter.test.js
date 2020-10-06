"use strict";

import { FunctionAsserter } from "../../lib/Assert/FunctionAsserter";
import { BooleanAsserter } from "../../lib/Assert/BooleanAsserter";
import { UnknownAsserter } from "../../lib/Assert/UnknownAsserter";
import { ObjectAsserter } from "../../lib/Assert/ObjectAsserter";
import { SymbolAsserter } from "../../lib/Assert/SymbolAsserter";
import { StringAsserter } from "../../lib/Assert/StringAsserter";
import { NumberAsserter } from "../../lib/Assert/NumberAsserter";
import { BigIntAsserter } from "../../lib/Assert/BigIntAsserter";
import { Asserter } from "../../lib/Assert/Asserter";
import * as Constants from "../Constants";

/**
 * constructor
 */
describe.each(Constants.ExampleAllTypes)("Constructor", (value) => {
   test.each([undefined, "name"])("Value can be any type", (name) => {
      const asserter = new UnknownAsserter(value, name);

      const ret = asserter.value;

      expect(ret).toBe(value);
   });

   test("Undefined name is set", () => {
      const name = undefined;
      const asserter = new UnknownAsserter(value, name);

      expect(asserter).toHaveProperty("_name", name);
   });

   test.each(Constants.ExampleNotStringUndefinedTypes)(
      "Non-string/undefined name throws error",
      (name) => {
         expect(() => {
            new UnknownAsserter(value, name);
         }).toThrow("Name must be of type string or undefined");
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
});

/**
 * Immutability
 */
describe.each([Constants.NonNullUndefinedTypesExampleValues])(
   "Immutability",
   (value) => {
      test.each([undefined, "name"])("Object is frozen", (name) => {
         const asserter = new UnknownAsserter(value, name);

         expect(Object.isFrozen(asserter)).toBeTruthy();
      });
   }
);

/**
 * isBigInt
 */
describe.each([undefined, "name"])("isBigInt", (name) => {
   test.each(Constants.ExampleNotBigintTypes)(
      "Non-BigInt value throws error",
      (value) => {
         const asserter = new UnknownAsserter(value, name);

         const expected =
            name !== undefined
               ? `Value of '${name}' is not a bigint`
               : "Value is not a bigint";

         expect(() => {
            asserter.isBigint;
         }).toThrow(expected);
      }
   );

   describe.each(Constants.ExampleBigInts)("Bigint value", (value) => {
      test("Returns BigIntAsserter", () => {
         const asserter = new UnknownAsserter(value, name);

         const bigint = asserter.isBigint;

         expect(bigint instanceof BigIntAsserter).toBeTruthy();
      });

      test("Returned BigIntAsserter has same value", () => {
         const asserter = new UnknownAsserter(value, name);

         const bigint = asserter.isBigint;
         const retValue = bigint.value;

         expect(retValue).toBe(value);
      });

      test("Returned BigIntAsserter has same name", () => {
         const asserter = new UnknownAsserter(value, name);

         const bigint = asserter.isBigint;

         expect(bigint).toHaveProperty("_name", name);
      });
   });
});

/**
 * isBoolean
 */
describe.each([undefined, "name"])("isBoolean", (name) => {
   test.each(Constants.ExampleNotBooleanTypes)(
      "Non-boolean value throws error",
      (value) => {
         const asserter = new UnknownAsserter(value, name);

         const expected =
            name !== undefined
               ? `Value of '${name}' is not a boolean`
               : "Value is not a boolean";

         expect(() => {
            asserter.isBoolean;
         }).toThrow(expected);
      }
   );

   describe.each(Constants.ExampleBooleans)("Boolean value", (value) => {
      test("Returns BooleanAsserter", () => {
         const asserter = new UnknownAsserter(value, name);

         const bigint = asserter.isBoolean;

         expect(bigint instanceof BooleanAsserter).toBeTruthy();
      });

      test("Returned BooleanAsserter has same value", () => {
         const asserter = new UnknownAsserter(value, name);

         const boolean = asserter.isBoolean;
         const retValue = boolean.value;

         expect(retValue).toBe(value);
      });

      test("Returned BooleanAsserter has same name", () => {
         const asserter = new UnknownAsserter(value, name);

         const boolean = asserter.isBoolean;

         expect(boolean).toHaveProperty("_name", name);
      });
   });
});

/**
 * isFunction
 */
describe.each([undefined, "name"])("isFunction", (name) => {
   test.each(Constants.ExampleNotFunctionTypes)(
      "Non-function value throws error",
      (value) => {
         const asserter = new UnknownAsserter(value, name);

         const expected =
            name !== undefined
               ? `Value of '${name}' is not a function`
               : "Value is not a function";

         expect(() => {
            asserter.isFunction;
         }).toThrow(expected);
      }
   );

   describe.each(Constants.ExampleFunctions)("Function value", (value) => {
      test("Returns FunctionAsserter", () => {
         const asserter = new UnknownAsserter(value, name);

         const functn = asserter.isFunction;

         expect(functn instanceof FunctionAsserter).toBeTruthy();
      });

      test("Returned FunctionAsserter has same value", () => {
         const asserter = new UnknownAsserter(value, name);

         const functn = asserter.isFunction;
         const retValue = functn.value;

         expect(retValue).toBe(value);
      });

      test("Returned FunctionAsserter has same name", () => {
         const asserter = new UnknownAsserter(value, name);

         const functn = asserter.isFunction;

         expect(functn).toHaveProperty("_name", name);
      });
   });
});

/**
 * isNumber
 */
describe.each([undefined, "name"])("isNumber", (name) => {
   test.each(Constants.ExampleNotNumberTypes)(
      "Non-number value throws error",
      (value) => {
         const asserter = new UnknownAsserter(value, name);

         const expected =
            name !== undefined
               ? `Value of '${name}' is not a number`
               : "Value is not a number";

         expect(() => {
            asserter.isNumber;
         }).toThrow(expected);
      }
   );

   describe.each(Constants.ExampleNumbers)("Number value", (value) => {
      test("Returns NumberAsserter", () => {
         const asserter = new UnknownAsserter(value, name);

         const number = asserter.isNumber;

         expect(number instanceof NumberAsserter).toBeTruthy();
      });

      test("Returned NumberAsserter has same value", () => {
         const asserter = new UnknownAsserter(value, name);

         const number = asserter.isNumber;
         const retValue = number.value;

         expect(retValue).toBe(value);
      });

      test("Returned NumberAsserter has same name", () => {
         const asserter = new UnknownAsserter(value, name);

         const number = asserter.isNumber;

         expect(number).toHaveProperty("_name", name);
      });
   });
});

/**
 * isObject
 */
describe.each([undefined, "name"])("isObject", (name) => {
   test.each(Constants.ExampleNotObjectTypes)(
      "Non-object value throws error",
      (value) => {
         const asserter = new UnknownAsserter(value, name);

         const expected =
            name !== undefined
               ? `Value of '${name}' is not an object`
               : "Value is not an object";

         expect(() => {
            asserter.isObject;
         }).toThrow(expected);
      }
   );

   describe.each(Constants.ExampleObjects)("Object value", (value) => {
      test("Returns ObjectAsserter", () => {
         const asserter = new UnknownAsserter(value, name);

         const obj = asserter.isObject;

         expect(obj instanceof ObjectAsserter).toBeTruthy();
      });

      test("Returned ObjectAsserter has same value", () => {
         const asserter = new UnknownAsserter(value, name);

         const obj = asserter.isObject;
         const retValue = obj.value;

         expect(retValue).toBe(value);
      });

      test("Returned ObjectAsserter has same name", () => {
         const asserter = new UnknownAsserter(value, name);

         const obj = asserter.isObject;

         expect(obj).toHaveProperty("_name", name);
      });
   });
});

/**
 * isString
 */
describe.each([undefined, "name"])("isString", (name) => {
   test.each(Constants.ExampleNotStringTypes)(
      "Non-string value throws error",
      (value) => {
         const asserter = new UnknownAsserter(value, name);

         const expected =
            name !== undefined
               ? `Value of '${name}' is not a string`
               : "Value is not a string";

         expect(() => {
            asserter.isString;
         }).toThrow(expected);
      }
   );

   describe.each(Constants.ExampleStrings)("String value", (value) => {
      test("Returns StringAsserter", () => {
         const asserter = new UnknownAsserter(value, name);

         const string = asserter.isString;

         expect(string instanceof StringAsserter).toBeTruthy();
      });

      test("Returned StringAsserter has same value", () => {
         const asserter = new UnknownAsserter(value, name);

         const string = asserter.isString;
         const retValue = string.value;

         expect(retValue).toBe(value);
      });

      test("Returned StringAsserter has same name", () => {
         const asserter = new UnknownAsserter(value, name);

         const string = asserter.isString;

         expect(string).toHaveProperty("_name", name);
      });
   });
});

/**
 * isSymbol
 */
describe.each([undefined, "name"])("isSymbol", (name) => {
   test.each(Constants.ExampleNotSymbolTypes)(
      "Non-symbol value throws error",
      (value) => {
         const asserter = new UnknownAsserter(value, name);

         const expected =
            name !== undefined
               ? `Value of '${name}' is not a symbol`
               : "Value is not a symbol";

         expect(() => {
            asserter.isSymbol;
         }).toThrow(expected);
      }
   );

   describe.each(Constants.ExampleSymbols)("Symbol value", (value) => {
      test("Returns SymbolAsserter", () => {
         const asserter = new UnknownAsserter(value, name);

         const symbol = asserter.isSymbol;

         expect(symbol instanceof SymbolAsserter).toBeTruthy();
      });

      test("Returned SymbolAsserter has same value", () => {
         const asserter = new UnknownAsserter(value, name);

         const symbol = asserter.isSymbol;
         const retValue = symbol.value;

         expect(retValue).toBe(value);
      });

      test("Returned SymbolAsserter has same name", () => {
         const asserter = new UnknownAsserter(value, name);

         const symbol = asserter.isSymbol;

         expect(symbol).toHaveProperty("_name", name);
      });
   });
});

/**
 * isUndefined
 */
describe.each([undefined, "name"])("isUndefined", (name) => {
   test.each(Constants.ExampleNotUndefinedTypes)(
      "Non-undefined value throws error",
      (value) => {
         const asserter = new UnknownAsserter(value, name);

         const expected =
            name !== undefined
               ? `Value of '${name}' is not undefined`
               : "Value is not undefined";

         expect(() => {
            asserter.isUndefined;
         }).toThrow(expected);
      }
   );

   describe.each([Constants.ExampleUndefined])("Undefined value", (value) => {
      test("Returns Asserter", () => {
         const asserter = new UnknownAsserter(value, name);

         const undef = asserter.isUndefined;

         expect(undef instanceof Asserter).toBeTruthy();
      });

      test("Returned Asserter has same value", () => {
         const asserter = new UnknownAsserter(value, name);

         const undef = asserter.isUndefined;
         const retValue = undef.value;

         expect(retValue).toBe(value);
      });

      test("Returned Asserter has same name", () => {
         const asserter = new UnknownAsserter(value, name);

         const undef = asserter.isUndefined;

         expect(undef).toHaveProperty("_name", name);
      });
   });
});
