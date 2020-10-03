"use strict";

import { FunctionAsserter } from "../../lib/Assert/FunctionAsserter";
import { BooleanAsserter } from "../../lib/Assert/BooleanAsserter";
import { UnknownAsserter } from "../../lib/Assert/UnknownAsserter";
import { ObjectAsserter } from "../../lib/Assert/ObjectAsserter";
import { SymbolAsserter } from "../../lib/Assert/SymbolAsserter";
import { StringAsserter } from "../../lib/Assert/StringAsserter";
import { NumberAsserter } from "../../lib/Assert/NumberAsserter";
import { BigIntAsserter } from "../../lib/Assert/BigIntAsserter";
import * as Constants from "../Constants";

/**
 * constructor
 */
describe("Constructor", () => {
   describe.each(Constants.NonNullUndefinedTypesExampleValues)(
      "Non-undefined/null value",
      (value) => {
         test.each([undefined, "name"])(
            "Value can be any type but undefined or null",
            (name) => {
               const asserter = new UnknownAsserter(value, name);

               expect(asserter).toHaveProperty("_value", value);
            }
         );

         test("Undefined name is set", () => {
            const name = undefined;
            const asserter = new UnknownAsserter(value, name);

            expect(asserter).toHaveProperty("_name", name);
         });

         test.each(Constants.NonStringUndefinedTypesExampleValues)(
            "Non-string name throws error",
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
      }
   );

   describe.each([undefined, "name"])("Null/undefined value", (name) => {
      test("Null value throws error", () => {
         const value = null;

         expect(() => {
            new UnknownAsserter(value, name);
         }).toThrow("Value cannot be null");
      });

      test("Undefined value throws error", () => {
         const value = undefined;

         expect(() => {
            new UnknownAsserter(value, name);
         }).toThrow("Value cannot be undefined");
      });
   });
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
   test.each(Constants.NonBigIntNullUndefinedTypesExampleValues)(
      "Non-BigInt value throws error",
      (value) => {
         const asserter = new UnknownAsserter(value, name);

         const expected =
            name !== undefined
               ? `Value of '${name}' is not a BigInt`
               : "Value is not a BigInt";

         expect(() => {
            asserter.isBigInt();
         }).toThrow(expected);
      }
   );

   describe("BigInt value", () => {
      test("Returns BigIntAsserter", () => {
         const value = Constants.ExampleValues.BigInt;
         const asserter = new UnknownAsserter(value, name);

         const bigint = asserter.isBigInt();

         expect(bigint instanceof BigIntAsserter).toBeTruthy();
      });

      test("Returned BigIntAsserter has same value", () => {
         const value = Constants.ExampleValues.BigInt;
         const asserter = new UnknownAsserter(value, name);

         const bigint = asserter.isBigInt();

         expect(bigint).toHaveProperty("_value", value);
      });

      test("Returned BigIntAsserter has same name", () => {
         const value = Constants.ExampleValues.BigInt;
         const asserter = new UnknownAsserter(value, name);

         const bigint = asserter.isBigInt();

         expect(bigint).toHaveProperty("_name", name);
      });
   });
});

/**
 * isBoolean
 */
describe.each([undefined, "name"])("isBoolean", (name) => {
   test.each(Constants.NonBooleanNullUndefinedTypesExampleValues)(
      "Non-boolean value throws error",
      (value) => {
         const asserter = new UnknownAsserter(value, name);

         const expected =
            name !== undefined
               ? `Value of '${name}' is not a boolean`
               : "Value is not a boolean";

         expect(() => {
            asserter.isBoolean();
         }).toThrow(expected);
      }
   );

   describe("Boolean value", () => {
      test("Returns BooleanAsserter", () => {
         const value = Constants.ExampleValues.Boolean;
         const asserter = new UnknownAsserter(value, name);

         const bigint = asserter.isBoolean();

         expect(bigint instanceof BooleanAsserter).toBeTruthy();
      });

      test("Returned BooleanAsserter has same value", () => {
         const value = Constants.ExampleValues.Boolean;
         const asserter = new UnknownAsserter(value, name);

         const boolean = asserter.isBoolean();

         expect(boolean).toHaveProperty("_value", value);
      });

      test("Returned BooleanAsserter has same name", () => {
         const value = Constants.ExampleValues.Boolean;
         const asserter = new UnknownAsserter(value, name);

         const boolean = asserter.isBoolean();

         expect(boolean).toHaveProperty("_name", name);
      });
   });
});

/**
 * isFunction
 */
describe.each([undefined, "name"])("isFunction", (name) => {
   test.each(Constants.NonFunctionNullUndefinedTypesExampleValues)(
      "Non-function value throws error",
      (value) => {
         const asserter = new UnknownAsserter(value, name);

         const expected =
            name !== undefined
               ? `Value of '${name}' is not a function`
               : "Value is not a function";

         expect(() => {
            asserter.isFunction();
         }).toThrow(expected);
      }
   );

   describe("Function value", () => {
      test("Returns FunctionAsserter", () => {
         const value = Constants.ExampleValues.Function;
         const asserter = new UnknownAsserter(value, name);

         const functn = asserter.isFunction();

         expect(functn instanceof FunctionAsserter).toBeTruthy();
      });

      test("Returned FunctionAsserter has same value", () => {
         const value = Constants.ExampleValues.Function;
         const asserter = new UnknownAsserter(value, name);

         const functn = asserter.isFunction();

         expect(functn).toHaveProperty("_value", value);
      });

      test("Returned FunctionAsserter has same name", () => {
         const value = Constants.ExampleValues.Function;
         const asserter = new UnknownAsserter(value, name);

         const functn = asserter.isFunction();

         expect(functn).toHaveProperty("_name", name);
      });
   });
});

/**
 * isNumber
 */
describe.each([undefined, "name"])("isNumber", (name) => {
   test.each(Constants.NonNullNumberUndefinedTypesExampleValues)(
      "Non-number value throws error",
      (value) => {
         const asserter = new UnknownAsserter(value, name);

         const expected =
            name !== undefined
               ? `Value of '${name}' is not a number`
               : "Value is not a number";

         expect(() => {
            asserter.isNumber();
         }).toThrow(expected);
      }
   );

   describe("Number value", () => {
      test("Returns NumberAsserter", () => {
         const value = Constants.ExampleValues.Number;
         const asserter = new UnknownAsserter(value, name);

         const number = asserter.isNumber();

         expect(number instanceof NumberAsserter).toBeTruthy();
      });

      test("Returned NumberAsserter has same value", () => {
         const value = Constants.ExampleValues.Number;
         const asserter = new UnknownAsserter(value, name);

         const functn = asserter.isNumber();

         expect(functn).toHaveProperty("_value", value);
      });

      test("Returned NumberAsserter has same name", () => {
         const value = Constants.ExampleValues.Number;
         const asserter = new UnknownAsserter(value, name);

         const functn = asserter.isNumber();

         expect(functn).toHaveProperty("_name", name);
      });
   });
});

/**
 * isObject
 */
describe.each([undefined, "name"])("isObject", (name) => {
   test.each(Constants.NonNullObjectUndefinedTypesExampleValues)(
      "Non-object value throws error",
      (value) => {
         const asserter = new UnknownAsserter(value, name);

         const expected =
            name !== undefined
               ? `Value of '${name}' is not an object`
               : "Value is not an object";

         expect(() => {
            asserter.isObject();
         }).toThrow(expected);
      }
   );

   describe("Object value", () => {
      test("Returns ObjectAsserter", () => {
         const value = Constants.ExampleValues.Object;
         const asserter = new UnknownAsserter(value, name);

         const obj = asserter.isObject();

         expect(obj instanceof ObjectAsserter).toBeTruthy();
      });

      test("Returned ObjectAsserter has same value", () => {
         const value = Constants.ExampleValues.Object;
         const asserter = new UnknownAsserter(value, name);

         const obj = asserter.isObject();

         expect(obj).toHaveProperty("_value", value);
      });

      test("Returned ObjectAsserter has same name", () => {
         const value = Constants.ExampleValues.Object;
         const asserter = new UnknownAsserter(value, name);

         const obj = asserter.isObject();

         expect(obj).toHaveProperty("_name", name);
      });
   });
});

/**
 * isString
 */
describe.each([undefined, "name"])("isString", (name) => {
   test.each(Constants.NonNullStringUndefinedTypesExampleValues)(
      "Non-string value throws error",
      (value) => {
         const asserter = new UnknownAsserter(value, name);

         const expected =
            name !== undefined
               ? `Value of '${name}' is not a string`
               : "Value is not a string";

         expect(() => {
            asserter.isString();
         }).toThrow(expected);
      }
   );

   describe("String value", () => {
      test("Returns StringAsserter", () => {
         const value = Constants.ExampleValues.String;
         const asserter = new UnknownAsserter(value, name);

         const string = asserter.isString();

         expect(string instanceof StringAsserter).toBeTruthy();
      });

      test("Returned StringAsserter has same value", () => {
         const value = Constants.ExampleValues.String;
         const asserter = new UnknownAsserter(value, name);

         const string = asserter.isString();

         expect(string).toHaveProperty("_value", value);
      });

      test("Returned StringAsserter has same name", () => {
         const value = Constants.ExampleValues.String;
         const asserter = new UnknownAsserter(value, name);

         const string = asserter.isString();

         expect(string).toHaveProperty("_name", name);
      });
   });
});

/**
 * isSymbol
 */
describe.each([undefined, "name"])("isSymbol", (name) => {
   test.each(Constants.NonNullSymbolUndefinedTypesExampleValues)(
      "Non-symbol value throws error",
      (value) => {
         const asserter = new UnknownAsserter(value, name);

         const expected =
            name !== undefined
               ? `Value of '${name}' is not a symbol`
               : "Value is not a symbol";

         expect(() => {
            asserter.isSymbol();
         }).toThrow(expected);
      }
   );

   describe("Symbol value", () => {
      test("Returns SymbolAsserter", () => {
         const value = Constants.ExampleValues.Symbol;
         const asserter = new UnknownAsserter(value, name);

         const string = asserter.isSymbol();

         expect(string instanceof SymbolAsserter).toBeTruthy();
      });

      test("Returned SymbolAsserter has same value", () => {
         const value = Constants.ExampleValues.Symbol;
         const asserter = new UnknownAsserter(value, name);

         const string = asserter.isSymbol();

         expect(string).toHaveProperty("_value", value);
      });

      test("Returned SymbolAsserter has same name", () => {
         const value = Constants.ExampleValues.Symbol;
         const asserter = new UnknownAsserter(value, name);

         const string = asserter.isSymbol();

         expect(string).toHaveProperty("_name", name);
      });
   });
});
