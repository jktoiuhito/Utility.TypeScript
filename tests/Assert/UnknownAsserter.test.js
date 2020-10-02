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

         test("Null name throws error", () => {
            const name = null;

            expect(() => {
               new UnknownAsserter(value, name);
            }).toThrow("Name cannot be null");
         });

         test.each(Constants.NonNullStringUndefinedTypesExampleValues)(
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
 * TODO: isX and isNotX -methods
 */
describe.each([
   ["value", undefined],
   ["value", "name"],
])("Immutability", (value, name) => {
   describe("Existing properties", () => {
      describe.each(Constants.NonNullUndefinedTypesExampleValues)(
         "Cannot be reassigned",
         (newValue) => {
            describe("By dot notation", () => {
               test("Value", () => {
                  const asserter = new UnknownAsserter(value, name);

                  try {
                     asserter._value = newValue;
                  } catch {
                     /* empty */
                  }

                  expect(asserter["_value"]).toBe(value);
               });

               test("Name", () => {
                  const asserter = new UnknownAsserter(value, name);

                  try {
                     asserter._name = newValue;
                  } catch {
                     /* empty */
                  }

                  expect(asserter["_name"]).toBe(name);
               });
            });

            describe("By key", () => {
               test("Value", () => {
                  const asserter = new UnknownAsserter(value, name);

                  try {
                     asserter["_value"] = newValue;
                  } catch {
                     /* empty */
                  }

                  expect(asserter["_value"]).toBe(value);
               });

               test("Name", () => {
                  const asserter = new UnknownAsserter(value, name);

                  try {
                     asserter["_name"] = newValue;
                  } catch {
                     /* empty */
                  }

                  expect(asserter["_name"]).toBe(name);
               });
            });

            describe("By Object.defineProperties()", () => {
               test("Value", () => {
                  const asserter = new UnknownAsserter(value, name);

                  try {
                     Object.defineProperties(asserter, { _value: newValue });
                  } catch {
                     /* empty */
                  }

                  expect(asserter["_value"]).toBe(value);
               });

               test("Name", () => {
                  const asserter = new UnknownAsserter(value, name);

                  try {
                     Object.defineProperties(asserter, { _name: newValue });
                  } catch {
                     /* empty */
                  }

                  expect(asserter["_name"]).toBe(name);
               });
            });

            describe("By Object.defineProperty()", () => {
               test("Value", () => {
                  const asserter = new UnknownAsserter(value, name);

                  try {
                     Object.defineProperty(asserter, "_value", newValue);
                  } catch {
                     /* empty */
                  }

                  expect(asserter["_value"]).toBe(value);
               });

               test("Name", () => {
                  const asserter = new UnknownAsserter(value, name);

                  try {
                     Object.defineProperty(asserter, "_name", newValue);
                  } catch {
                     /* empty */
                  }

                  expect(asserter["_name"]).toBe(name);
               });
            });
         }
      );

      describe("Cannot be removed", () => {
         describe("By delete", () => {
            test("Value", () => {
               const asserter = new UnknownAsserter(value, name);

               try {
                  delete asserter._value;
               } catch {
                  /* empty */
               }

               expect(asserter["_value"]).toBe(value);
            });

            test("Name", () => {
               const asserter = new UnknownAsserter(value, name);

               try {
                  delete asserter._name;
               } catch {
                  /* empty */
               }

               expect(asserter["_name"]).toBe(name);
            });
         });

         describe.each(Constants.NonNullUndefinedTypesExampleValues)(
            "By Object.defineProperties()",
            (newValue) => {
               test("Value", () => {
                  const asserter = new UnknownAsserter(value, name);

                  try {
                     Object.defineProperties(asserter, { _name: newValue });
                  } catch {
                     /* empty */
                  }

                  expect(asserter["_value"]).toBe(value);
               });

               test("Name", () => {
                  const asserter = new UnknownAsserter(value, name);

                  try {
                     Object.defineProperties(asserter, { _value: newValue });
                  } catch {
                     /* empty */
                  }

                  expect(asserter["_name"]).toBe(name);
               });
            }
         );
      });
   });

   describe.each(Constants.NonNullUndefinedTypesExampleValues)(
      "Undefined properties cannot be assigned",
      (newValue) => {
         test("By dot notation", () => {
            const asserter = new UnknownAsserter(value, name);

            try {
               asserter.idontexist = newValue;
            } catch {
               /* empty */
            }

            expect(asserter).not.toHaveProperty("idontexist");
         });

         describe("By key", () => {
            const asserter = new UnknownAsserter(value, name);

            try {
               asserter["idontexist"] = newValue;
            } catch {
               /* empty */
            }

            expect(asserter).not.toHaveProperty("idontexist");
         });

         describe("By Object.defineProperties()", () => {
            const asserter = new UnknownAsserter(value, name);

            try {
               Object.defineProperties(asserter, { idontexist: newValue });
            } catch {
               /* empty */
            }

            expect(asserter).not.toHaveProperty("idontexist");
         });

         describe("By Object.defineProperty()", () => {
            const asserter = new UnknownAsserter(value, name);

            try {
               Object.defineProperty(asserter, "idontexist", newValue);
            } catch {
               /* empty */
            }

            expect(asserter).not.toHaveProperty("idontexist");
         });
      }
   );

   test("Object.isExtensible() returns false", () => {
      const asserter = new UnknownAsserter(value, name);

      expect(Object.isExtensible(asserter)).toBeFalsy();
   });

   test("Object.isFrozen() returns true", () => {
      const asserter = new UnknownAsserter(value, name);

      expect(Object.isFrozen(asserter)).toBeTruthy();
   });

   test("Object.isSealed() returns true", () => {
      const asserter = new UnknownAsserter(value, name);

      expect(Object.isSealed(asserter)).toBeTruthy();
   });

   test("Prototype cannot be changed with Object.setPrototypeOf()", () => {
      const asserter = new UnknownAsserter(value, name);
      const oldProto = Object.getPrototypeOf(asserter);

      const newProto = { proto: {} };
      try {
         Object.setPrototypeOf(asserter, newProto);
      } catch {
         /* empty */
      }

      expect(Object.getPrototypeOf(asserter)).toBe(oldProto);
   });
});

/**
 * isBigInt
 */
describe.each([undefined, "name"])("isBigInt", (name) => {
   test.each(Constants.NonBigintNullUndefinedTypesExampleValues)(
      "Non-BigInt value throws error",
      (value) => {
         const asserter = new UnknownAsserter(value, name);

         const expected = name
            ? `Value of '${name}' is not a BigInt`
            : "Value is not a BigInt";

         expect(() => {
            asserter.isBigInt();
         }).toThrow(expected);
      }
   );

   describe("BigInt value", () => {
      test("Returns BigIntAsserter", () => {
         const value = 1n;
         const asserter = new UnknownAsserter(value, name);

         const bigint = asserter.isBigInt();

         expect(bigint instanceof BigIntAsserter).toBeTruthy();
      });

      test("Returned BigIntAsserter has same value", () => {
         const value = 1n;
         const asserter = new UnknownAsserter(value, name);

         const bigint = asserter.isBigInt();

         expect(bigint).toHaveProperty("_value", value);
      });

      test("Returned BigIntAsserter has same name", () => {
         const value = 1n;
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

         const expected = name
            ? `Value of '${name}' is not a boolean`
            : "Value is not a boolean";

         expect(() => {
            asserter.isBoolean();
         }).toThrow(expected);
      }
   );

   describe("Boolean value", () => {
      test("Returns BooleanAsserter", () => {
         const value = true;
         const asserter = new UnknownAsserter(value, name);

         const bigint = asserter.isBoolean();

         expect(bigint instanceof BooleanAsserter).toBeTruthy();
      });

      test("Returned BooleanAsserter has same value", () => {
         const value = true;
         const asserter = new UnknownAsserter(value, name);

         const boolean = asserter.isBoolean();

         expect(boolean).toHaveProperty("_value", value);
      });

      test("Returned BooleanAsserter has same name", () => {
         const value = true;
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

         const expected = name
            ? `Value of '${name}' is not a function`
            : "Value is not a function";

         expect(() => {
            asserter.isFunction();
         }).toThrow(expected);
      }
   );

   describe("Function value", () => {
      test("Returns FunctionAsserter", () => {
         const value = () => "function";
         const asserter = new UnknownAsserter(value, name);

         const functn = asserter.isFunction();

         expect(functn instanceof FunctionAsserter).toBeTruthy();
      });

      test("Returned FunctionAsserter has same value", () => {
         const value = () => "function";
         const asserter = new UnknownAsserter(value, name);

         const functn = asserter.isFunction();

         expect(functn).toHaveProperty("_value", value);
      });

      test("Returned FunctionAsserter has same name", () => {
         const value = () => "function";
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

         const expected = name
            ? `Value of '${name}' is not a number`
            : "Value is not a number";

         expect(() => {
            asserter.isNumber();
         }).toThrow(expected);
      }
   );

   describe("Number value", () => {
      test("Returns NumberAsserter", () => {
         const value = 1;
         const asserter = new UnknownAsserter(value, name);

         const number = asserter.isNumber();

         expect(number instanceof NumberAsserter).toBeTruthy();
      });

      test("Returned NumberAsserter has same value", () => {
         const value = 1;
         const asserter = new UnknownAsserter(value, name);

         const functn = asserter.isNumber();

         expect(functn).toHaveProperty("_value", value);
      });

      test("Returned NumberAsserter has same name", () => {
         const value = 1;
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

         const expected = name
            ? `Value of '${name}' is not an object`
            : "Value is not an object";

         expect(() => {
            asserter.isObject();
         }).toThrow(expected);
      }
   );

   describe("Object value", () => {
      test("Returns ObjectAsserter", () => {
         const value = {};
         const asserter = new UnknownAsserter(value, name);

         const obj = asserter.isObject();

         expect(obj instanceof ObjectAsserter).toBeTruthy();
      });

      test("Returned ObjectAsserter has same value", () => {
         const value = {};
         const asserter = new UnknownAsserter(value, name);

         const obj = asserter.isObject();

         expect(obj).toHaveProperty("_value", value);
      });

      test("Returned ObjectAsserter has same name", () => {
         const value = {};
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

         const expected = name
            ? `Value of '${name}' is not a string`
            : "Value is not a string";

         expect(() => {
            asserter.isString();
         }).toThrow(expected);
      }
   );

   describe("String value", () => {
      test("Returns StringAsserter", () => {
         const value = "string";
         const asserter = new UnknownAsserter(value, name);

         const string = asserter.isString();

         expect(string instanceof StringAsserter).toBeTruthy();
      });

      test("Returned StringAsserter has same value", () => {
         const value = "string";
         const asserter = new UnknownAsserter(value, name);

         const string = asserter.isString();

         expect(string).toHaveProperty("_value", value);
      });

      test("Returned StringAsserter has same name", () => {
         const value = "string";
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

         const expected = name
            ? `Value of '${name}' is not a symbol`
            : "Value is not a symbol";

         expect(() => {
            asserter.isSymbol();
         }).toThrow(expected);
      }
   );

   describe("Symbol value", () => {
      test("Returns SymbolAsserter", () => {
         const value = Symbol();
         const asserter = new UnknownAsserter(value, name);

         const string = asserter.isSymbol();

         expect(string instanceof SymbolAsserter).toBeTruthy();
      });

      test("Returned SymbolAsserter has same value", () => {
         const value = Symbol();
         const asserter = new UnknownAsserter(value, name);

         const string = asserter.isSymbol();

         expect(string).toHaveProperty("_value", value);
      });

      test("Returned SymbolAsserter has same name", () => {
         const value = Symbol();
         const asserter = new UnknownAsserter(value, name);

         const string = asserter.isSymbol();

         expect(string).toHaveProperty("_name", name);
      });
   });
});
